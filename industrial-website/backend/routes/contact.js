const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      subject,
      message,
    } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mail to Company
    await transporter.sendMail({
  from: `"A One Industries Website" <${process.env.SMTP_USER}>`,
  to: process.env.COMPANY_EMAIL,

  replyTo: email,

  subject: `📩 New Website Enquiry | ${subject}`,

  html: `
    <div style="font-family: Arial, sans-serif; max-width: 700px; margin:auto; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
      
      <div style="background:#ea580c; padding:20px; text-align:center;">
        <h1 style="color:white; margin:0;">
          A One Industries
        </h1>
        <p style="color:#fde68a; margin-top:8px;">
          New Website Enquiry Received
        </p>
      </div>

      <div style="padding:30px;">

        <h2 style="color:#1e293b;">
          Customer Details
        </h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:10px; border:1px solid #ddd;"><strong>Name</strong></td>
            <td style="padding:10px; border:1px solid #ddd;">${name}</td>
          </tr>

          <tr>
            <td style="padding:10px; border:1px solid #ddd;"><strong>Company</strong></td>
            <td style="padding:10px; border:1px solid #ddd;">${company || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px; border:1px solid #ddd;"><strong>Email</strong></td>
            <td style="padding:10px; border:1px solid #ddd;">${email}</td>
          </tr>

          <tr>
            <td style="padding:10px; border:1px solid #ddd;"><strong>Phone</strong></td>
            <td style="padding:10px; border:1px solid #ddd;">${phone}</td>
          </tr>

          <tr>
            <td style="padding:10px; border:1px solid #ddd;"><strong>Subject</strong></td>
            <td style="padding:10px; border:1px solid #ddd;">${subject}</td>
          </tr>
        </table>

        <div style="margin-top:25px;">
          <h3 style="color:#1e293b;">
            Message
          </h3>

          <div style="
            background:#f8fafc;
            border-left:4px solid #ea580c;
            padding:15px;
            border-radius:8px;
          ">
            ${message}
          </div>
        </div>

      </div>

      <div style="
        background:#f8fafc;
        padding:15px;
        text-align:center;
        color:#64748b;
        font-size:14px;
      ">
        Submitted from A One Industries Website Contact Form
      </div>

    </div>
  `,
});

    // Auto Reply
    await transporter.sendMail({
  from: `"A One Industries" <${process.env.SMTP_USER}>`,
  to: email,

  subject: "Thank You for Contacting A One Industries",

  attachments: [
    {
      filename: "logo.png",
      path: "./assets/image.png", // Update path to your logo
      cid: "companylogo",
    },
  ],

  html: `
  <div style="
    font-family: Arial, sans-serif;
    background:#f8fafc;
    padding:20px 10px;
  ">

    <div style="
      max-width:600px;
      margin:auto;
      background:white;
      border-radius:16px;
      overflow:hidden;
      box-shadow:0 4px 20px rgba(0,0,0,0.08);
    ">

      <div style="
        background:#ea580c;
        text-align:center;
        padding:30px;
      ">

        <img
          src="cid:companylogo"
          alt="A One Industries"
          style="
            max-width:180px;
            width:100%;
            height:auto;
            margin-bottom:15px;
            background:white;
            padding:8px;
            border-radius:10px;
          "
        />

        <h1 style="
          color:white;
          margin:0;
          font-size:30px;
        ">
          Thank You
        </h1>

      </div>

      <div style="padding:40px;">

        <p style="
          font-size:18px;
          color:#334155;
        ">
          Dear <strong>${name}</strong>,
        </p>

        <p style="
          color:#475569;
          line-height:1.8;
          font-size:16px;
        ">
          Thank you for contacting
          <strong>A One Industries</strong>.
          We have successfully received your enquiry and our team will review your requirements shortly.
        </p>

        <p style="
          color:#475569;
          line-height:1.8;
          font-size:16px;
        ">
          Our representatives will get back to you as soon as possible.
        </p>

        <div style="
          background:#fff7ed;
          border-left:4px solid #ea580c;
          padding:20px;
          margin:30px 0;
          border-radius:8px;
        ">
          <strong>Need Immediate Assistance?</strong>

          <br><br>

          📞 +91 8483928292

          <br>

          📧 aonenagar11@gmail.com
        </div>

        <p style="
          color:#475569;
          line-height:1.8;
        ">
          We appreciate your interest in our manufacturing capabilities and look forward to working with you.
        </p>

        <br>

        <p style="color:#1e293b;">
          Regards,<br>
          <strong>A One Industries Team</strong>
        </p>

      </div>

      <div style="
        background:#0f172a;
        color:white;
        text-align:center;
        padding:20px;
      ">
        © 2026 A One Industries<br>
        A company of quality.
      </div>

    </div>

  </div>
  `,
});

    res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

module.exports = router;