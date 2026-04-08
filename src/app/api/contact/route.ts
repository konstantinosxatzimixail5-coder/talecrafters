import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { services, urgency, budget, name, email, company, message } = body;

    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'hello@talecrafters.studio',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const servicesText = Array.isArray(services) ? services.join(', ') : services || 'Not specified';

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #18181F; color: #F5F5F0;">
        <h1 style="color: #00E5CC; border-bottom: 2px solid #8B00FF; padding-bottom: 12px;">New Project Inquiry</h1>

        <div style="margin: 20px 0;">
          <h3 style="color: #FF2D6F; margin-bottom: 8px;">Contact Details</h3>
          <p><strong style="color: #00E5CC;">Name:</strong> ${name || 'Not provided'}</p>
          <p><strong style="color: #00E5CC;">Email:</strong> ${email || 'Not provided'}</p>
          <p><strong style="color: #00E5CC;">Company:</strong> ${company || 'Not provided'}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #FF2D6F; margin-bottom: 8px;">Project Details</h3>
          <p><strong style="color: #00E5CC;">Services:</strong> ${servicesText}</p>
          <p><strong style="color: #00E5CC;">Timeline:</strong> ${urgency || 'Not specified'}</p>
          <p><strong style="color: #00E5CC;">Budget:</strong> ${budget || 'Not specified'}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #FF2D6F; margin-bottom: 8px;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message || 'No message provided'}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 12px; border-top: 1px solid #3A3A3A; font-size: 12px; color: #6A6A6A;">
          Sent from talecrafters.studio contact form
        </div>
      </div>
    `;

    const textBody = `
New Project Inquiry
==================

Contact Details:
- Name: ${name || 'Not provided'}
- Email: ${email || 'Not provided'}
- Company: ${company || 'Not provided'}

Project Details:
- Services: ${servicesText}
- Timeline: ${urgency || 'Not specified'}
- Budget: ${budget || 'Not specified'}

Message:
${message || 'No message provided'}
    `.trim();

    await transporter.sendMail({
      from: '"TaleCrafters Website" <hello@talecrafters.studio>',
      to: 'hello@talecrafters.studio',
      replyTo: email || undefined,
      subject: `New Inquiry from ${name || 'Unknown'} — ${servicesText}`,
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
