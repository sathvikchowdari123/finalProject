import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import adduserRouter from "./routes/adduser.js";
import loginRouter from "./routes/login.js";
import User from "./models/user.js";
import passwordResetRouter from "./routes/passwordreset.js";
import changePasswordRouter from "./routes/changePassword.js";
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sathupuligundla:ZJZbUMVL0w3glnuX@cluster0.ydddl.mongodb.net/finalProject?retryWrites=true&w=majority&appName=Cluster0"
)
   .then(() => {
  console.log('Connected to MongoDB Atlas');

  // Create a new user document and save it
       const newUser = new User({
           firstname: 'sathvik',
           lastname: 'chowdari',
           email: 'admin@example.com',
             username: 'admin',
           password: '1234',
           role:'admin'
  });

  
})
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/login', loginRouter);
app.use('/adduser', adduserRouter);
app.use('/reset-password', passwordResetRouter);
app.use('/change-password/:id', changePasswordRouter);
app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});