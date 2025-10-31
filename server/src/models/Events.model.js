import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    date: {
        type: Date,
        required: true
    },
    maxParticipants: {
        type: Number,
        default: 0
    },
    currentParticipants: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export default mongoose.model("Event", eventSchema)