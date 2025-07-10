
export default async (req, res, next) => {
    try {

        console.log('ingreso a VERIFY_TOKEN')
        const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode && token) {
            if (mode === 'subscribe' && token === VERIFY_TOKEN) {
                console.log('🟢 Webhook verificado correctamente');
                return res.status(200).send(challenge);
            } else {
                return res.sendStatus(403); // token inválido
            }
        } else {
            return res.sendStatus(400); // parámetros faltantes
        }
    } catch (error) {
        next(error); // delega el manejo al middleware general de errores
    }
};