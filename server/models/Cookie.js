const mongoose = require('mongoose');

const cookieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter cookie name'],
    trim: true,
    maxLength: [100, 'Cookie name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please enter cookie description']
  },
  price: {
    type: Number,
    required: [true, 'Please enter cookie price'],
    maxLength: [5, 'Cookie price cannot exceed 5 characters'],
    default: 0.0
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cookie', cookieSchema);