import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    },

  skills: {
        type :String
      }
});

const skills= mongoose.model('skills', skillsSchema);
export default skills;