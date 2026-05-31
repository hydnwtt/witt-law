"use server";

/**
 * lib/actions/contact.ts  (F3 — form plumbing; provider wired in Phase 1 / P12)
 * Server action behind <ContactForm>. Validates input, checks the honeypot, and
 * returns a typed result. It does NOT yet send mail — wiring to the firm's intake
 * inbox (Resend/Formspree/Basin) is P12, gated on the real intake email (OPS5).
 *
 * No PII is persisted here; the action only forwards to email once configured.
 */

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  /** Field-level errors keyed by field name. */
  errors?: Record<string, string>;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real users leave this empty. Pretend success to bots.
  if ((formData.get("company") as string)?.trim()) {
    return { status: "success", message: "Thanks — we've got your message and will be in touch shortly." };
  }

  const firstName = (formData.get("firstName") as string)?.trim() ?? "";
  const lastName = (formData.get("lastName") as string)?.trim() ?? "";
  const phone = (formData.get("phone") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const message = (formData.get("message") as string)?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (!firstName) errors.firstName = "Please enter your first name.";
  if (!lastName) errors.lastName = "Please enter your last name.";
  if (!phone && !email)
    errors.email = "Please give us a phone number or email so we can reach you.";
  if (email && !isEmail(email)) errors.email = "Please enter a valid email address.";
  if (!message) errors.message = "Please tell us briefly how we can help.";

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  // TODO (P12): send to firm intake inbox via Resend/Formspree once OPS5 supplies
  // the destination address. Until then this is a no-op that confirms receipt.

  return {
    status: "success",
    message: "Thanks — we've got your message and will be in touch shortly.",
  };
}
