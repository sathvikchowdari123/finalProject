import bcrypt from 'bcrypt';

import likes  from '../models/likes.js'
export const addlikeHandler = async (req, res) => {
    console.log('came to add like handler');
    const { email, eventId } = req.body;
    try {
        // Check if a like document with the same email and eventId already exists
        const existingLike = await likes.findOne({ email, eventId });

        if (existingLike) {
            // If the document already exists, send a message indicating it's already present
            return res.status(400).json({ message: 'Like already exists' });
        }

        // If the document doesn't exist, create a new one and save it
        const newLike = new likes({ email, eventId });
        await newLike.save();
        console.log(newLike);

        res.status(200).json({ message: 'Like added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};




export const removelikeHandler = async (req, res) => {
    const { email, eventId } = req.body;
    console.log('came to remove like handler')
     try {
        // Find and remove the like document based on both email and eventId
       const result = await likes.findOneAndDelete({ email, eventId });

        if (result) {
            res.status(200).json({ message: 'Like removed successfully' });
        } else {
            res.status(404).json({ message: 'Like not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const fetchlikesHanlder = async (req, res) => {
         const { email } = req.query;
  try {
    const data = await likes.find({ email }); 
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
