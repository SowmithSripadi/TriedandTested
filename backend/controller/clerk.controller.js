import { Webhook } from "svix";

export const clerkWebhooks = async (req, res) => {
  const secret = process.env.WEBHOOK_SECRET_KEY;
  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(secret);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({
      message: "Couldn't verify the payload",
    });
  }

  if (evt.type === "user.created") {
    return res.status(200).json({
      message: "User Created",
    });
  }
};
