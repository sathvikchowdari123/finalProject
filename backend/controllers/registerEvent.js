import bcrypt from 'bcrypt';
import events from '../models/event.js';

export const eventRegisterHandler = async (req, res) => {
    const { name, location, date, seats, starttime, endtime, description } = req.body;
    try {
        const newEvent = new events({ name, location, date, seats, starttime, endtime, description });
        await newEvent.save();
        console.log(newEvent)
        res.status(200).json({message:'successfully event registerd'})
        
        console.log('hi fro event ')
    } catch (error) {
           console.error(error);
    res.status(500).json({ message: 'Server Error' });
    }
};