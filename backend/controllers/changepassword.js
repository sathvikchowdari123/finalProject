import bcrypt from 'bcrypt';

import User from '../models/user.js';

export const changePasswordHandler = async (req, res) => {

  const { id, password, confirmpassword } = req.body;
    console.log(password);
    console.log(confirmpassword)
  try {
    // Check if password and confirmPassword match
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    // Find user by ID (Assuming you have a User model)
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10); // Using bcrypt for hashing, adjust salt rounds as needed

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    // Send response
    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error occurred while changing password:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
