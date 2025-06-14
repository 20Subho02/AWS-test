import mongoose from 'mongoose';
const messageSchema = new mongoose.Schema({ text: String });
export default mongoose.model('Message', messageSchema);
