import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import adduserRouter from "./routes/adduser.js";
import loginRouter from "./routes/login.js";
import User from "./models/user.js";
import skills from "./models/skills.js";
import passwordResetRouter from "./routes/passwordreset.js";
import changePasswordRouter from "./routes/changePassword.js";
import eventRegisterRouter from "./routes/registerEvent.js";
import fetchEventRouter from "./routes/fetchEvents.js";
import userEventRegisterRouter from "./routes/userEventRegistration.js";
import fetchEventRegisteredRouter from "./routes/fetchEventsRegistered.js";
import addresourceRouter from "./routes/addResource.js";
import fetchResourceRouter from "./routes/fetchReources.js";
import eventUpdateRouter from "./routes/updateEvent.js";
import likeRouter from "./routes/likesRouter.js";
import fetchlikesRouter from "./routes/fetchLikes.js";
import interestedNotificationRouter from "./routes/interestedNotification.js";
import eventDeleteRouter from "./routes/deleteEvent.js";
import addskillsRouter from "./routes/userSkills.js";
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
app.use('/event-register', eventRegisterRouter);
app.use('/fetch-events', fetchEventRouter);
app.use('/user/event-register', userEventRegisterRouter)
app.use('/fetch-events-registered', fetchEventRegisteredRouter)
app.use('/add-resource', addresourceRouter)
app.use('/fetch-resources', fetchResourceRouter)
app.use('/event-update', eventUpdateRouter);
app.use('/event-liked', likeRouter)
app.use('/fetch-events-liked', fetchlikesRouter);
app.use('/liked-notification-interested', interestedNotificationRouter);
app.use('/event-delete', eventDeleteRouter);
app.use('/add-skills', addskillsRouter);
app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});