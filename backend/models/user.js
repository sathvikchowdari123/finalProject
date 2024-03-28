

import mongoose from 'mongoose';

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim:true
    },
    lastname: {
        type: String,
    },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    },
    username: {
      type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    },
    role: {
        type: String,
        required:true,
  }
  
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
export default User;
