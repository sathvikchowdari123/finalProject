import events from "../models/event.js";

export const fetchEventsHanlder = async (req, res) => {
        try {
        // Fetch all events from the database
        const allevents = await events.find();
            console.log(allevents);
        // Respond with the fetched events
        return res.status(200).json(allevents);
    } catch (error) {
        // Handle errors
        console.error('Error fetching events:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};