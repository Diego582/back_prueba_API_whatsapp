import express from "express";
import create from "../controllers/whatsapp/create.js";

const router = express.Router();

//router.get("/", read);
router.post("/", create);

//router.get("/:id", readOne);
//router.put("/:id", update);
//router.delete("/:id", destroy);

export default router;