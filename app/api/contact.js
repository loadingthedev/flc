import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method not allowed. Use POST instead." });
  }

  const { firstName, lastName, email, phone, nationality, help, message } =
    req.body;

  if (!firstName || !email || !help) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can change the service (e.g., Outlook, Yahoo, etc.)
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: process.env.ADMIN_EMAIL, // Your admin or notification email
    subject: "New Contact Us Form Submission",
    text: `
      You have a new contact form submission:

      First Name: ${firstName}
      Last Name: ${lastName || "N/A"}
      Email: ${email}
      Phone: ${phone || "N/A"}
      Nationality: ${nationality || "N/A"}
      How Can We Help You: ${help}
      Message: ${message || "No message provided"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
}
