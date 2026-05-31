"use client";

/**
 * components/ContactForm.tsx
 * Reusable intake form (design's .contact-form). First/last/phone/email + "How
 * can we help?". Client + server validation, honeypot, success/error states via
 * the submitContactForm server action — no PII stored client-side.
 */

import { useActionState } from "react";
import { CheckCircle } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const err = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle aria-hidden="true" />
        <div>
          <h3>Message received</h3>
          <p>{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" action={formAction} noValidate>
      {/* Honeypot */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field id="firstName" label="First name" autoComplete="given-name" required error={err.firstName} />
      <Field id="lastName" label="Last name" autoComplete="family-name" required error={err.lastName} />
      <Field id="phone" label="Phone" type="tel" autoComplete="tel" error={err.phone} />
      <Field id="email" label="Email" type="email" autoComplete="email" error={err.email} />

      <div className="field field--full">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Briefly describe your situation…"
          aria-invalid={!!err.message}
        />
        {err.message && <span className="err">{err.message}</span>}
      </div>

      <div className="form-actions">
        <button className="btn btn--primary" type="submit" disabled={pending}>
          {pending ? "Sending…" : "Submit"} <span className="arr">↗</span>
        </button>
        <p className="form-note">
          Contacting Witt Law does not create an attorney-client relationship. Please don&apos;t
          send confidential information through this form.
        </p>
        {state.status === "error" && (
          <p className="err" role="alert" style={{ gridColumn: "1 / -1" }}>
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
      />
      {error && <span className="err">{error}</span>}
    </div>
  );
}
