// components/ContactEmailTemplate.tsx

import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ name, email, phone, message }) => (
  <div>
    <h1>New Contact Inquiry: Lovely Real Estate Photography</h1>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);
