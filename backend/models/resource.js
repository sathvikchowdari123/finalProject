import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['blog', 'video', 'external'],
    required: true
  },
  externalLink: {
    type: String,
    
  },
  blogContent: {
    type: String,
    
  }
});

// Create and export the Resource model
const resource = mongoose.model('Resource', resourceSchema);
export default resource;
