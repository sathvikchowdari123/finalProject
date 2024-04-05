import events from "../models/event.js";
import resource from "../models/resource.js";
export const fetchResourcesHanlder = async (req, res) => {
        try {
        // Fetch all resources from the database
            const allresources = await resource.find();
            console.log('from resource fetching')
            console.log(allresources);
            console.log('object id',allresources[0]._id)
        return res.status(200).json(allresources);
    } catch (error) {
        // Handle errors
        console.error('Error fetching events:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};