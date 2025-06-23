import Message from '../../models/Message.js';

export default async (req, res, next) => {
  const { to, message, user_id, status } = req.body;

  if (!to || !message) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: to, message' });
  }


  try {
    const newMessage = new Message({ to, message, user_id, status });
    await newMessage.save();

    res.status(201).json({
      success: true,
      message: 'Mensaje guardado correctamente',
      data: newMessage
    });
  } catch (error) {
    next(error);
  }
};





