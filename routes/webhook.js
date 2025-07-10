import express from "express";
import handleIncomingMessage from "../controllers/webhook/handleIncomingMessage.js";
import verifyWebhook from "../controllers/webhook/verifyWebhook.js";

const router = express.Router();

router.get("/", verifyWebhook);
router.post("/", handleIncomingMessage);


//router.post("/send", send);
//router.get("/:id", readOne);
//router.put("/:id", update);
//router.delete("/:id", destroy);

export default router;