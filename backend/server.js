// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import messageRoutes from './routes/message.js';

dotenv.config(); // ✅ Load env vars first
console.log("Mongo URI:", process.env.MONGO_URL); // ✅ Should NOT be undefined

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/messages', messageRoutes);

connectDB().then(() => {
  app.listen(4000, () => console.log('Server running on port 4000'));
});
