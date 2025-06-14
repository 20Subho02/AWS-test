import express from 'express';
import Message from '../model/Message.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

router.post('/', async (req, res) => {
  const message = new Message({ text: req.body.text });
  await message.save();
  res.json(message);
});

export default router;
