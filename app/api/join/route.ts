import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const location = formData.get("location")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const interest = formData.get("interest")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "ukdbuk@gmail.com",
      replyTo: email,
      subject: `New UKDBUK join request from ${fullName}`,
      text: `
New UKDBUK Join Request

Name: ${fullName}
Email: ${email}
Town or city: ${location}
Phone: ${phone || "Not provided"}
Interest: ${interest}

Message:
${message || "Not provided"}
      `,
    });

    return Response.json({
      success: true,
      message: "Join request received",
    });
  } catch (error) {
    console.error("JOIN FORM ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to send join request",
      },
      { status: 500 }
    );
  }
}