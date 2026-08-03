"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";

const projectTypes = [
  "Business Website",
  "Landing Page",
  "Personal Portfolio",
  "Wedding or Event Website",
  "Graphic Design",
  "Website Maintenance",
  "Other",
];

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
      turnstileToken: String(formData.get("cf-turnstile-response") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitState("success");
      setMessage("Thank you. Your inquiry has been sent successfully.");
      form.reset();
      window.turnstile?.reset();
    } catch {
      setSubmitState("error");
      setMessage("Something went wrong while sending your inquiry. Please try again.");
      window.turnstile?.reset();
    }
  }

  return (
    <div className="rounded-md border border-white/15 bg-white p-5 text-[#071A3A] shadow-sm sm:p-6">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[#071A3A]">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-[#071A3A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#071A3A]">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-[#071A3A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[#071A3A]">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              maxLength={30}
              autoComplete="tel"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-[#071A3A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-semibold text-[#071A3A]">
              Project type
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              autoComplete="off"
              defaultValue=""
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#071A3A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25"
            >
              <option value="" disabled>
                Select a project type
              </option>
              {projectTypes.map((projectType) => (
                <option key={projectType} value={projectType}>
                  {projectType}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#071A3A]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={3000}
            rows={5}
            autoComplete="off"
            className="mt-2 w-full resize-y rounded-md border border-slate-300 px-4 py-3 text-sm leading-6 text-[#071A3A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25"
          />
        </div>

        <div>
          {turnstileSiteKey ? (
            <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
          ) : (
            <p className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Turnstile is not configured yet. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY before accepting inquiries.
            </p>
          )}
        </div>

        <div aria-live="polite" className="min-h-6">
          {message ? (
            <p
              className={`text-sm font-medium ${
                submitState === "success" ? "text-emerald-700" : "text-red-700"
              }`}
            >
              {message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={submitState === "submitting" || !turnstileSiteKey}
          className="inline-flex w-full items-center justify-center rounded-md bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {submitState === "submitting" ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}

declare global {
  interface Window {
    turnstile?: {
      reset: () => void;
    };
  }
}
