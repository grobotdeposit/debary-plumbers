import { getResendClient, getEmailFrom } from "@/lib/email/resend";

interface SendEmailInput {
  to: string | string[];
  subject: string;
  html: string;
}

export async function sendEmail({
  to,
  subject,
  html,
}: SendEmailInput): Promise<void> {
  const resend = getResendClient();
  const { data, error } = await resend.emails.send({
    from: getEmailFrom(),
    to,
    subject,
    html,
  });

  if (error) {
    // Resend returns API errors here (does not throw). Common with
    // onboarding@resend.dev: 403 if recipient is not your Resend account email.
    throw new Error(error.message);
  }

  if (!data?.id) {
    throw new Error("Resend did not return an email id");
  }
}
