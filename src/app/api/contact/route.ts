import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const projectTypes = new Set([
  "Business Website",
  "Landing Page",
  "Personal Portfolio",
  "Wedding or Event Website",
  "Graphic Design",
  "Website Maintenance",
  "Other",
]);

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  message?: unknown;
  company?: unknown;
  turnstileToken?: unknown;
};

function jsonResponse(message: string, status: number) {
  return NextResponse.json({ message }, { status });
}

function readField(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength + 1);
}

function isWithinLimit(value: string, maxLength: number) {
  return value.length > 0 && value.length <= maxLength;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function formatPhilippineDateTime(date: Date) {
  const formatted = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  return `${formatted} PHT`;
}

async function verifyTurnstile(token: string, request: NextRequest) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return false;
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) {
    formData.append("remoteip", ip);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export async function POST(request: NextRequest) {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return jsonResponse("Expected application/json.", 415);
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse("Invalid request body.", 400);
  }

  const name = readField(payload.name, 100);
  const email = readField(payload.email, 254);
  const phone = readField(payload.phone, 30);
  const projectType = readField(payload.projectType, 100);
  const message = readField(payload.message, 3000);
  const honeypot = readField(payload.company, 100);
  const turnstileToken = readField(payload.turnstileToken, 2048);

  if (honeypot) {
    return jsonResponse("Unable to process request.", 400);
  }

  if (
    !isWithinLimit(name, 100) ||
    !isWithinLimit(email, 254) ||
    phone.length > 30 ||
    !isWithinLimit(projectType, 100) ||
    !isWithinLimit(message, 3000)
  ) {
    return jsonResponse("Please complete all required fields.", 400);
  }

  if (!isValidEmail(email)) {
    return jsonResponse("Please enter a valid email address.", 400);
  }

  if (!projectTypes.has(projectType)) {
    return jsonResponse("Please select a valid project type.", 400);
  }

  if (!turnstileToken || !(await verifyTurnstile(turnstileToken, request))) {
    return jsonResponse("Please complete the verification challenge.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return jsonResponse("Contact form is not configured yet.", 503);
  }

  const submittedAt = new Date();
  const submittedAtDisplay = formatPhilippineDateTime(submittedAt);
  const subject = `New Diwatek inquiry: ${projectType} - ${name}`;

  const plainText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Project type: ${projectType}`,
    `Submission date and time: ${submittedAtDisplay}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h1>New Diwatek inquiry</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Submission date and time:</strong> ${escapeHtml(submittedAtDisplay)}</p>
    <h2>Message</h2>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject,
      text: plainText,
      html,
    });

    if (error) {
      return jsonResponse("Unable to send inquiry right now.", 502);
    }

    return NextResponse.json({ message: "Inquiry sent." });
  } catch {
    return jsonResponse("Unable to send inquiry right now.", 500);
  }
}
