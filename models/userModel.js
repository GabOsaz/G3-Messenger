import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {required: true, type: String},
  lastname: {required: true, type: String},
  password: {required: true, type: String},
  email: {required: true, type: String},
  role: { type: String, required: false, default: 'user' },
})

export default mongoose.model("User", userSchema);