// Import necessary modules

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import nodemailer from 'nodemailer';

// POST /api/login
// Authenticate user
export const loginHandler = async (req, res) => {
 
    
  const { email, password } = req.body;

  try {
    // Check if user exists
      const user = await User.findOne({ email });
      console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('password not verified')
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
     
    // Return token and user data
    res.status(200).json({ token, user: { id: user._id, email: user.email,role:user.role,firstname:user.firstname,lastname:user.lastname,username:user.username} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const registerHandler = async (req, res) => {
  const { firstname, lastname, email, password, username, role } = req.body;
console.log(req.body)
  try {
    // Check if user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword,firstname, lastname, username, role});
    await newUser.save();
     const user = await User.findOne({ email });
    var transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: 'sathvikchowdari@jmangroup.com',
        pass: 'Jman@600113'
      }
    });

var mailOptions = {
  from: 'sathvikchowdari@jmangroup.com',
  to: 'sathvikchowdari@jmangroup.com',
  subject: 'Password reset',
  text: `http://localhost:3000/password-reset/${user._id}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
      console.log('success')
   return res.send({status:"success"})
  }
});
    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', { expiresIn: '1h' });

    // Return token and user data
    res.status(201).json({ token, user: { id: newUser._id, email: newUser.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

