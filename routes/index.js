import { Router } from "express";
import whatsappRoutes from "./whatsapp.js";
import webhookRoutes from "./webhook.js";

// import otrasRutas from './otraRama.js'; // podés agregar más

const router = Router();

// Agrupás cada grupo de rutas bajo un prefijo
router.use("/whatsapp", whatsappRoutes);
router.use("/webhook", webhookRoutes);

// router.use('/otra', otrasRutas);

export default router;
