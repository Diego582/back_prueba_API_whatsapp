// services/whatsappService.js
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.WHATSAPP_TOKEN;
const phoneNumberId = process.env.PHONE_NUMBER_ID;

export const sendWhatsAppMessage = async (recipientPhone, client) => {

  try {
    const response = await axios({
      method: "POST",
      url: `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        messaging_product: "whatsapp",
        to: recipientPhone, // ejemplo: "54292015344278"
        type: "template",
        template: {
          name: "bienvenida",
          language: { code: "es_AR" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: client } // reemplazo de {{1}}
              ]
            }
          ]
        },
      },
    });

    console.log("✅ Mensaje enviado a:", recipientPhone);
    console.log("✅ Enviado con éxito:");
    console.dir(response.data, { depth: null });
    return response.data;
  } catch (error) {
    console.error("❌ Error al enviar mensaje:");
    console.dir(error.response?.data || error.message, { depth: null });
    throw error;
  }
};