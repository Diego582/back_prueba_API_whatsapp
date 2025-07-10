// routes/whatsapp.js
import { sendWhatsAppMessage } from "../../services/whatsappService.js";

export default async (req, res, next) => {
    try {
        const { phone, client } = req.body;

        if (!phone || !client) {
            return res.status(400).json({ error: "Faltan parámetros: phone y client" });
        }


        try {
            const result = await sendWhatsAppMessage(phone, client);
            res.status(200).json({ success: true, result });
        } catch (err) {
            res.status(500).json({ success: false, error: err.client });
        }
    } catch (error) {
        next(error);
    }
}
