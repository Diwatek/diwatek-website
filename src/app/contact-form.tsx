"use client";

import Script from "next/script";
import Link from "next/link";
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
  const [privacyError, setPrivacyError] = useState("");
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setPrivacyError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const privacyAcknowledged = formData.get("privacyAcknowledged") === "true";

    if (!privacyAcknowledged) {
      setPrivacyError("Please confirm that you have read the Privacy Notice before sending your inquiry.");
      return;
    }

    setSubmitState("submitting");

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
      turnstileToken: String(formData.get("cf-turnstile-response") ?? ""),
      privacyAcknowledged,
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
    <div className="rounded-md border border-white/15 bg-[var(--surface)] p-5 text-[var(--foreground)] shadow-sm sm:p-6">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[var(--foreground)]">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              className="mt-2 w-full rounded-md border border-[var(--strong-border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--subtle-foreground)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/25"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[var(--foreground)]">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              className="mt-2 w-full rounded-md border border-[var(--strong-border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--subtle-foreground)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/25"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[var(--foreground)]">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              maxLength={30}
              autoComplete="tel"
              className="mt-2 w-full rounded-md border border-[var(--strong-border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--subtle-foreground)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/25"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-semibold text-[var(--foreground)]">
              Project type
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              autoComplete="off"
              defaultValue=""
              className="mt-2 w-full rounded-md border border-[var(--strong-border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/25"
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
          <label htmlFor="message" className="block text-sm font-semibold text-[var(--foreground)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={3000}
            rows={5}
            autoComplete="off"
            className="mt-2 w-full resize-y rounded-md border border-[var(--strong-border)] bg-[var(--surface)] px-4 py-3 text-sm leading-6 text-[var(--foreground)] outline-none transition placeholder:text-[var(--subtle-foreground)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/25"
          />
        </div>

        <div>
          {turnstileSiteKey ? (
            <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
          ) : (
            <p className="rounded-md border border-[var(--warning-border)] bg-[var(--warning-surface)] px-4 py-3 text-sm text-[var(--warning-text)]">
              Turnstile is not configured yet. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY before accepting inquiries.
            </p>
          )}
        </div>

        <div className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] p-4 text-sm leading-6 text-[var(--muted-foreground)]">
          Diwatek will use the information you provide to respond to your inquiry,
          understand your requested service, and maintain reasonable communication
          records. Please do not submit passwords, payment credentials, government
          identification numbers, or other sensitive information. See the{" "}
          <Link
            href="/privacy"
            className="font-semibold text-[var(--primary)] underline transition hover:text-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--surface-elevated)]"
          >
            Diwatek Privacy Notice
          </Link>{" "}
          for details about processing, retention, service providers, and your
          privacy rights.
        </div>

        <div>
          <label className="flex items-start gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-6 text-[var(--muted-foreground)]">
            <input
              name="privacyAcknowledged"
              type="checkbox"
              value="true"
              required
              aria-describedby={privacyError ? "privacy-acknowledgment-error" : undefined}
              onChange={() => setPrivacyError("")}
              onInvalid={() =>
                setPrivacyError(
                  "Please confirm that you have read the Privacy Notice before sending your inquiry.",
                )
              }
              className="mt-1 h-4 w-4 rounded border-[var(--strong-border)] text-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30"
            />
            <span>
              I have read the{" "}
              <Link
                href="/privacy"
                className="font-semibold text-[var(--primary)] underline transition hover:text-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
              >
                Privacy Notice
              </Link>{" "}
              and understand how my submitted information will be used to respond
              to my inquiry.
            </span>
          </label>
          <div id="privacy-acknowledgment-error" aria-live="polite" className="mt-2 min-h-5">
            {privacyError ? (
              <p role="alert" className="text-sm font-medium text-red-700 dark:text-red-300">
                {privacyError}
              </p>
            ) : null}
          </div>
        </div>

        <div aria-live="polite" className="min-h-6">
          {message ? (
            <p
              className={`text-sm font-medium ${
                submitState === "success" ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"
              }`}
            >
              {message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={submitState === "submitting" || !turnstileSiteKey}
          className="inline-flex w-full items-center justify-center rounded-md bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)] disabled:cursor-not-allowed disabled:bg-slate-400 disabled:text-white/90"
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
