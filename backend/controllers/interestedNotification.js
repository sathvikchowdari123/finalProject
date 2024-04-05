
import likes from "../models/likes.js";
import events from "../models/event.js";
import nodemailer from 'nodemailer';

export const interestedNotificationHanlder = async (req, res) => {
    const { eventId } = req.body;
  console.log(eventId);
  console.log("Type of eventId:", typeof eventId);
  try {
      
    
    const alllikes = await likes.find({ eventId: eventId })
 
    const event = await events.findOne({ _id: eventId });
  
  const allEmails = alllikes.map(like => like.email);
  var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'sathvikchowdari@jmangroup.com',
    pass: 'Jman@600113'
  }
});

var mailOptions = {
  from: 'sathvikchowdari@jmangroup.com',
  to: allEmails.join(','),
  subject: 'Event filled',
  text: `${event.name} completely filled`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
      console.log('successfully sent')
   return res.send({status:"success"})
  }
});
} catch (error) {
  console.error(error);
  // Handle error
}
};