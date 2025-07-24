import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  contact: String,
  password: String,
  role: {
    type: String,
    enum: ['Admin', 'Employee'],
    default: 'Employee',
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
