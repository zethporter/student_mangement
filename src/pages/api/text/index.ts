import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
  const token = <string>process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, token);
  const { message } = req.body;
  // console.log(phone, message);
  client.messages
    .create({
      body: message,
      from: "+18883398528",
      to: "+18016980428",
    })
    .then((message) => res.status(200).json(message))
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
}
