import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    time: {
        type: String, 
        required: true
    },
    numberOfSeats: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const events = mongoose.model('events', eventSchema);
export default events;