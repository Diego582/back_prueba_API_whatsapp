import express from "express";
import create from "../controllers/whatsapp/create.js";
import read from "../controllers/whatsapp/read.js";
import send from "../controllers/whatsapp/send.js"

const router = express.Router();

router.get("/", read);
router.post("/", create);
router.post("/send", send);

//router.get("/:id", readOne);
//router.put("/:id", update);
//router.delete("/:id", destroy);

export default router;