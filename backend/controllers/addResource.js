
import resource from '../models/resource.js';
export const addResourceHandler = async (req, res) => {
    const { name, description, type, externalLink, blogContent } = req.body;
    try {
        const newResource = new resource({ name, description, type, externalLink, blogContent });
        await newResource.save();
        console.log(newResource)
    } catch (error) {
           console.error(error);
    res.status(500).json({ message: 'Server Error' });
    }
};