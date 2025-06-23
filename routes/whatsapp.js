import { Router } from "express";

const router = Router();

// Ruta de prueba
router.get("/", (req, res) => {
  res.send("Ruta principal de WhatsApp API");
});

// Ruta simulada para enviar mensaje
router.post("/send", (req, res) => {
  const { to, message } = req.body;

  if (!to || !message) {
    return res
      .status(400)
      .json({ error: "Faltan campos obligatorios: to, message" });
  }

  // Lógica de envío (simulada por ahora)
  console.log(`Enviando mensaje a ${to}: ${message}`);

  res.status(200).json({ success: true, to, message });
});

export default router;
