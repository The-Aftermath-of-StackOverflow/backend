import {model, Schema} from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: Date,
    required: true
  }
}, {timestamps: true});

export default model('User', userSchema);
