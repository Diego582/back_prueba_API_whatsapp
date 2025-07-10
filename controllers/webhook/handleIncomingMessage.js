export default async (req, res, next) => {
    try {

        console.log('ingreso a handleIncomingMessage', req.body.entry)

        const entries = req.body.entry;

        if (!entries || !Array.isArray(entries)) {
            console.log("❌ Entrada vacía o no válida");
            return res.sendStatus(204); // No Content
        }

        for (const entry of entries) {
            const changes = entry.changes;

            if (!changes || !Array.isArray(changes)) continue;

            for (const change of changes) {
                const value = change.value;
                if (!value || !value.messages || !value.contacts) continue;

                const messages = value.messages;
                const contacts = value.contacts;

                for (let i = 0; i < messages.length; i++) {
                    const message = messages[i];
                    const contact = contacts[i] || {}; // fallback si no hay pares 1:1

                    const phone = contact.wa_id || "Número desconocido";
                    const name = contact.profile?.name || "Sin nombre";
                    const text = message?.text?.body || "[Mensaje sin texto]";

                    console.log("📥 Mensaje recibido:");
                    console.log("📱 Número:", phone);
                    console.log("🙋‍♂️ Nombre:", name);
                    console.log("💬 Texto:", text);

                    // Acá podés responder, guardar, registrar en base de datos, etc.
                }
            }
        }

        res.sendStatus(200); // Aceptado por Meta
    } catch (error) {
        next(error); // Tu manejador centralizado se encarga
    }
};