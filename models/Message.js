import { model, Schema, Types } from 'mongoose';

const collection = 'messages';

const schema = new Schema(
    {
        to: {
            type: String,
            required: true,
            trim: true
        },
        message: {
            type: String,
            required: true,
            trim: true
        },
        sentAt: {
            type: Date,
            default: Date.now
        },
        // Si pensás asociarlo a un usuario en el futuro:
        user_id: {
            type: Types.ObjectId,
            ref: 'users',
            required: false
        },
        status: {
            type: String,
            enum: ['sent', 'pending', 'failed'],
            default: 'pending'
        }
    },
    {
        timestamps: true, // createdAt y updatedAt
        versionKey: false
    }
);

const Message = model(collection, schema);

export default Message;
