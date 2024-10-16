import { transporter } from "../config/nodemailer.js";
import { config } from "../config/env.js";


export const sendMail = async (user) => {
    //   const { email, verificationLink } = user;

    const verificationLink = `http://localhost:3000/users/verify?token=${user.verificationtoken}`;

  const mailOptions = {
    from: config.mailer.email,
    to: user.email,
    subject: "Account Verification",
    html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Verify Your Account</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ffffff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        text-align: center;
                        padding: 20px 0;
                        background-color: #4CAF50;
                        color: #ffffff;
                        border-top-left-radius: 8px;
                        border-top-right-radius: 8px;
                    }
                    .content {
                        padding: 20px;
                        text-align: center;
                    }
                    .content p {
                        font-size: 16px;
                        line-height: 1.5;
                        color: #333333;
                    }
                    .button {
                        display: inline-block;
                        margin-top: 20px;
                        padding: 10px 20px;
                        background-color: #4CAF50;
                        color: #ffffff;
                        text-decoration: none;
                        border-radius: 5px;
                    }
                    .footer {
                        text-align: center;
                        padding: 20px 0;
                        font-size: 14px;
                        color: #999999;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Verify Your Account ${user.firstname} </h1>
                    </div>
                    <div class="content">
                        <p>Hello,</p>
                        <p>Thank you for registering. Please verify your account by clicking the button below:</p>
                        <a href="${verificationLink}" class="button">Verify Account</a>
                    </div>
                    <div class="footer">
                        <p>If you did not sign up for this account, please ignore this email.</p>
                    </div>
                </div>
            </body>
            </html>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
  }
};
