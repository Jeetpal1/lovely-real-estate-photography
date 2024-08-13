// services/emailService.ts

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
  },
});

// Send contact inquiry email
export const sendContactInquiryEmail = async (name: string, email: string, phone: string, message: string) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender address
      to: "singhjeetpal001@gmail.com", // Recipient address
      subject: 'New Contact Inquiry: Lovely Real Estate Photography',
      html: `
        <div>
          <h1>Lovely Real Estate Photography</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending contact inquiry email:', error);
    throw error;
  }
};

// Send booking confirmation email
export const sendBookingConfirmationEmail = async (
  firstName: string,
  recipientEmail: string,
  bookingDate: string,
  bookingTime: string,
  propertyAddress: string
) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      subject: 'Booking Confirmation',
      html: `
        <div>
          <h1>Booking Confirmation</h1>
          <p>Dear ${firstName},</p>
          <p>Your booking for ${propertyAddress} is confirmed on ${bookingDate} at ${bookingTime}.</p>
          <p>Thank you for choosing our services!</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    throw error;
  }
};

// Send reminder email
export const sendReminderEmail = async (
  firstName: string,
  recipientEmail: string,
  bookingDate: string,
  bookingTime: string,
  propertyAddress: string
) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      subject: 'Booking Reminder',
      html: `
        <div>
          <h1>Reminder: Upcoming Booking</h1>
          <p>Dear ${firstName},</p>
          <p>This is a reminder for your upcoming booking at ${propertyAddress} on ${bookingDate} at ${bookingTime}.</p>
          <p>We look forward to serving you!</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending reminder email:', error);
    throw error;
  }
};
