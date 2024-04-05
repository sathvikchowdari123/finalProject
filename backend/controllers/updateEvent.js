import bcrypt from 'bcrypt';
import events from '../models/event.js';
import userEventRegistration from "../models/userEventRegistration.js";
import nodemailer from 'nodemailer';
export const eventUpdateHandler = async (req, res) => {
    const updatedEvent = req.body;
    try {
        const event = await events.findOne({ _id: updatedEvent._id });
         if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        event.name = updatedEvent.name;
        event.location = updatedEvent.location;
        event.date = updatedEvent.date;
        event.seats = updatedEvent.seats;
        event.starttime = updatedEvent.endtime;
        event.endtime = updatedEvent.endtime;
        event.description = updatedEvent.description;
        await event.save();
        console.log(event)
        const allregistered = await userEventRegistration.find({ eventId: updatedEvent._id })
        
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
                subject: 'Event updated',
                text: `${event.name} updated`
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