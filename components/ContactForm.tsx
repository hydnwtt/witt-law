"use client";

/**
 * components/ContactForm.tsx
 * Reusable intake form (build-spec §5.3). Fields: first/last name, phone, email,
 * "How can we help?". Client + server validation, honeypot anti-spam, and
 * success/error states. Posts to the submitContactForm server action — no PII is
 * stored client-side. All inputs are labeled for accessibility.
 */

import { useActionState } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

const fieldBase =
  "mt-1 block w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-xl border border-success/30 bg-success/5 p-5 text-ink"
      >
        <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 text-success" />
        <p>{state.message}</p>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      {state.status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-danger/30 bg-danger/5 p-3 text-sm text-danger"
        >
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      {/* Honeypot — visually hidden, off the tab order; bots fill it, humans don't */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="firstName" label="First name" required error={err.firstName} autoComplete="given-name" />
        <Field id="lastName" label="Last name" required error={err.lastName} autoComplete="family-name" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="phone" label="Phone" type="tel" error={err.phone} autoComplete="tel" />
        <Field id="email" label="Email" type="email" error={err.email} autoComplete="email" />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!err.message}
          aria-describedby={err.message ? "message-error" : undefined}
          className={fieldBase}
        />
        {err.message && (
          <p id="message-error" className="mt-1 text-sm text-danger">
            {err.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={pending} className="btn btn-primary self-start disabled:opacity-60">
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  error,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldBase}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
