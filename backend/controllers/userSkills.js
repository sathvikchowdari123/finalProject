
import skills from '../models/skills.js';
export const addSkillsHandler = async (req, res) => {
    const { newSkills,email } = req.body;
  try {
        // Iterate over each skill in newSkills array
        for (const skill of newSkills) {
            // Create a new document for each skill
            const newSkill = new skills({ email: email, skills: skill });

            // Save the new document
            await newSkill.save();
        }

        // Send a success response
        res.status(200).json({ message: 'Skills added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};