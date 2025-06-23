import { Router } from "express";
import whatsappRoutes from "./whatsapp.js";
// import otrasRutas from './otraRama.js'; // podés agregar más

const router = Router();

// Agrupás cada grupo de rutas bajo un prefijo
router.use("/whatsapp", whatsappRoutes);
// router.use('/otra', otrasRutas);

export default router;
