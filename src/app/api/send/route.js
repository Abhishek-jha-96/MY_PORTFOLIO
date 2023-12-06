// Import necessary modules and configurations
import { NextResponse } from "next/server";
import { mailOptions, transporter } from "../../../../config/nodemailer";

export const CONTACT_MESSAGE_FIELDS = {
  name: 'Name',
  subject: 'Subject',
  message: 'Message',
};

export const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`), "");

  const htmlData = Object.entries(data).reduce((str, [key, val]) => (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${val}</p>`), "");

  return {
    text: stringData,
    html: htmlData,
  };
};

// Export the handler for the POST method
export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
  
    try {
      // Send email using Nodemailer
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent({ email, subject, message }),
        subject: subject,
      });
  
      // Respond with success
      return NextResponse.json({ success: true });
    } catch (error) {
      // Respond with error
      return NextResponse.json({ error: error.message });
    }
  }