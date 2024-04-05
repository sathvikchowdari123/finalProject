import bcrypt from 'bcrypt';
import events from '../models/event.js';
import userEventRegistration from "../models/userEventRegistration.js";
import nodemailer from 'nodemailer';
export const eventDeleteHandler = async (req, res) => {
    const event = req.body.event;
    try {
        
        await events.deleteOne({ _id: event._id });
        console.log('from delete Event:', event)
        const eventId = event._id;
        console.log('type of ',typeof eventId)
        const allregistered = await userEventRegistration.find({ eventId })
        
        console.log(allregistered);
        const allEmails = allregistered.map(registered => registered.email);
         
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
                subject: 'Event deleted',
                text: `${event.name} deleted`
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
    res.status(500).json({ message: 'Server Error' });
    }
};