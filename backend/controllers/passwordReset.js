import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import nodemailer from 'nodemailer';


// POST /api/login
// Authenticate user
export const forgotPasswordHandler = async (req, res) => {
    
    console.log('hiiii')
  const { email} = req.body;
  console.log(email)
  try {
    // Check if user exists
      const user = await User.findOne({ email });
      console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

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
   
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};