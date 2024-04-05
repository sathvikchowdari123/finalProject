
import userEventRegistration from '../models/userEventRegistration.js';
import events from '../models/event.js';
import nodemailer from 'nodemailer';
export const userEventRegisterHandler = async (req, res) => {
    const { email, eventId } = req.body;
    
    try {
        // Create a new user event registration record
        const newRecord = new userEventRegistration({ email, eventId });
        await newRecord.save();

        // Find the event with the given eventId
        const event = await events.findOne({ _id: eventId });

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Update the filled value of the event
        event.filled += 1; 
        await event.save();
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
            subject: 'Event Successfully Registered',
            text: `You are successfully registered for ${event.name}`
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('success')
            return res.send({status:"success"})
            }
            });
        
        res.status(200).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

    