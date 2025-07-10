import ngrok from "ngrok";
import dotenv from "dotenv";
dotenv.config();

export async function startNgrok(port) {
    try {
        const url = await ngrok.connect({
            addr: port,
            authtoken: process.env.NGROK_TOKEN,  // <<< Aca lo pasamos explícitamente
        });
        console.log(`🌐 ngrok corriendo en: ${url}`);
        return url;
    } catch (error) {
        console.error("❌ Error iniciando ngrok:", error.message || error);
        return null;
    }
}


