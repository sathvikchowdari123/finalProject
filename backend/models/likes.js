import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "events", require: true },
  name: {
        type :String
      }
});

const likes = mongoose.model('likes', likeSchema);
export default likes;