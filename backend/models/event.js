import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
      location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
     seats: {
        type: Number,
        required: true
    },
    filled: {
        type: Number,  
        default: 0
     },
    starttime: {
        type: String, 
        required: true
    },
    endtime: {
        type: String, 
        required: true
    },
   
    description: {
        type:String,
    }
});

const events = mongoose.model('events', eventSchema);
export default events;