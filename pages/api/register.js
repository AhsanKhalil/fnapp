import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  await dbConnect();

  const { name, email, contact, password, role } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already exists' });

  const hashed = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    contact,
    password: hashed,
    role: role || 'Employee',
  });

  res.status(201).json({ message: 'User registered successfully' });
}
