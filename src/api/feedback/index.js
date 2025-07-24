// src/api/feedback/index.js
import dbConnect from '../../../lib/dbConnect';
import Feedback from '../../../models/Feedback';

export default async function feedbackHandler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const feedback = new Feedback(req.body);
      await feedback.save();
      return res.status(201).json({ success: true, data: feedback });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  }

  if (req.method === 'GET') {
    const { search } = req.query;
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
            { message: { $regex: search, $options: 'i' } },
          ],
        }
      : {};

    try {
      const feedbacks = await Feedback.find(query).sort({ createdAt: -1 });
      return res.status(200).json({ success: true, data: feedbacks });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  }

  return res.status(405).json({ success: false, message: 'Method Not Allowed' });
}
