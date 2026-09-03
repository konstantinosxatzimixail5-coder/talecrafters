import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * The contact form.
 *
 * Three fields now, not eleven: a name, an email and the brief. The wizard it
 * replaced asked four screens of questions before it would take a message,
 * which is a lot of friction to put in front of somebody who already decided
 * to write to us.
 *
 * Mail goes to the founder's own inbox with the studio address copied, so a
 * reply comes from a person and the thread still lives somewhere the studio
 * can find it. `replyTo` is the sender, so hitting reply answers them rather
 * than us.
 */

const TO = 'konstantinos.xatzimixail5@gmail.com';
const CC = 'hello@talecrafters.studio';

/** Anything a person types goes into HTML, so it gets escaped on the way in.
 *  A brief containing a stray angle bracket should arrive as a brief. */
const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** A header field cannot carry a newline. Trimmed rather than rejected, so a
 *  pasted name with a line break in it does not lose the whole message. */
const oneLine = (v: unknown, max = 120) =>
  String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = oneLine(body?.name);
    const email = oneLine(body?.email, 200);
    const message = String(body?.message ?? '').slice(0, 8000);

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message.trim()) {
      return NextResponse.json(
        { success: false, message: 'A name, a valid email and a message, please.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'hello@talecrafters.studio',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #18181F; color: #F5F5F0;">
        <h1 style="color: #00E5CC; border-bottom: 2px solid #8B00FF; padding-bottom: 12px;">New enquiry</h1>
        <p><strong style="color: #00E5CC;">Name:</strong> ${esc(name)}</p>
        <p><strong style="color: #00E5CC;">Email:</strong> ${esc(email)}</p>
        <h3 style="color: #FF2D6F; margin: 24px 0 8px;">The brief</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${esc(message)}</p>
        <div style="margin-top: 30px; padding-top: 12px; border-top: 1px solid #3A3A3A; font-size: 12px; color: #6A6A6A;">
          Sent from the talecrafters.studio contact form
        </div>
      </div>
    `;

    const textBody = `New enquiry
===========

Name:  ${name}
Email: ${email}

The brief:
${message}`;

    await transporter.sendMail({
      from: '"TaleCrafters Website" <hello@talecrafters.studio>',
      to: TO,
      cc: CC,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
