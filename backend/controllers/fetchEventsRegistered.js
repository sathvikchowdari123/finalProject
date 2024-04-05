
import userEventRegistration from "../models/userEventRegistration.js";

export const fetchEventsRegisteredHanlder = async (req, res) => {
         const { email } = req.query;
  try {
    const events = await userEventRegistration.find({ email }); 
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};