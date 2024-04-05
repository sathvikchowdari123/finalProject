import mongoose from "mongoose";

const userEventSchema = new mongoose.Schema({
      email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    },
      eventId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
    
});

const userEventRegistration = mongoose.model('userEventRegistration', userEventSchema);
export default userEventRegistration;