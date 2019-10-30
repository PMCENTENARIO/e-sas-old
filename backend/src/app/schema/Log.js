import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Log', LogSchema);
