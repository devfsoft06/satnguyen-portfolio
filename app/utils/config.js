const mode = process.env.IS_DEV;
const url = mode === "0" ? process.env.URL : process.env.URL_LOCAL;

const config = {
  url: url,
  smtpUser: process.env.SMTP_USER,
  smtpPsw: process.env.SMTP_PSW,
  smtpMailTo: process.env.SMTP_MAIL_TO,
};

export default config;
