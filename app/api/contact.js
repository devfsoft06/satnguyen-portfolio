import config from "../utils/config";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const { name, email, number, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.smtpUser,
        pass: config.smtpPsw,
      },
    });

    const mailOptions = {
      from: email,
      to: config.smtpMailTo,
      subject: subject,
      text: `Tên: ${name} \nMail: ${email} \nPhone: ${number} \nNội dung: ${text} \n `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ status: "Successfully" });
  } catch (e) {
    res.status(500).json({ status: "Failed", error: e.message });
  }
}
