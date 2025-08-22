import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getEnv(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const host = getEnv("EMAIL_HOST");
    const port = Number(getEnv("EMAIL_PORT"));
    const user = getEnv("EMAIL_USER");
    const pass = getEnv("EMAIL_PASS");
    const to = getEnv("EMAIL_TO", user);

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: { user, pass },
    });

    const subject = `New message from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${
      phone ?? ""
    }\n\nMessage:\n${message}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p style="white-space: pre-wrap;">${String(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: { address: user, name: "Portfolio Contact Form" },
      replyTo: email,
      to,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const description =
      error instanceof Error ? error.message : "Unknown error while sending";
    return NextResponse.json(
      { ok: false, error: description },
      { status: 500 }
    );
  }
}
