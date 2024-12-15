import { Task } from "../modals/task.model.js";
export const addTask=async(req,res)=>{
    try {
        const { title, description } = req.body; // Fix typo in "title"
        
        // Ensure `req.user` contains the user ID
        if (!req.user || !req.user._id) {
            return res.status(400).json({
                success: false,
                message: "User is not authenticated or missing from the request."
            });
        }

        // Create the task
        const task = await Task.create({
            title, // Use "title" instead of "tittle"
            description,
            user: req.user._id // Ensure user ID is passed
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task // Optionally return the created task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create task",
            error: error.message
        });
    }
}