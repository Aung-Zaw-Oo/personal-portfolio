import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
}

const createTransporter = () => {
  const user = process.env.GMAIL_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const destination = process.env.CONTACT_EMAIL_ADDRESS;

  if (!user || !pass || !destination) {
    throw new Error("Gmail email delivery is not configured.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
};

const sendEmail = async (payload: ContactPayload) => {
  const destination = process.env.CONTACT_EMAIL_ADDRESS;
  const user = process.env.GMAIL_EMAIL;

  if (!destination || !user) {
    throw new Error("Gmail email delivery is not configured.");
  }

  const transporter = createTransporter();

  await transporter.sendMail({
    from: `Portfolio Contact <${user}>`,
    to: destination,
    replyTo: `${payload.name} <${payload.email}>`,
    subject: payload.subject || "New contact request from portfolio",
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nProject Type: ${payload.projectType}\n\n${payload.message}`,
  });
};

export async function POST(request: Request) {
  try {
    const payload: ContactPayload = await request.json();

    if (
      !payload.name ||
      !payload.email ||
      !payload.projectType ||
      !payload.message
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields before sending." },
        { status: 422 },
      );
    }

    await sendEmail(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to send your message at this time.",
      },
      { status: 500 },
    );
  }
}
