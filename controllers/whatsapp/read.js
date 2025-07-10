import Message from "../../models/Message.js";

export default async (req, res, next) => {
    try {
        const allMessage = await Message.find().select();
        if (!allMessage) {
            return res.status(404).json({
                success: true,
                message: "Products not found",
                response: null,
            });
        }
        return res.status(200).json({
            success: true,
            message: "Message found",
            response: allMessage,
        });
    } catch (error) {
        next(error);
    }
};
