/**
 * Typed payloads for the Contacts page form.
 * Keep fixtures realistic so tests exercise the same shape as production traffic.
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const validContactPayload: ContactFormData = {
  name: "Chioma Adeyemi",
  email: "chioma.adeyemi@example.com",
  phone: "+234 803 555 0142",
  subject: "Corporate Advisory Consultation",
  message:
    "Good afternoon. I would like to schedule a consultation regarding a technology licensing agreement for our Lagos subsidiary. Please let me know your earliest availability this month.",
};
