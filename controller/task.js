
import { Task } from "../modals/task.model.js";
export const addTask=async(req,res)=>{
    try {
        const { tittle, description } = req.body;
        if (!req.user || !req.user._id) {
           
            return res.status(400).json({
                success: false,
                message: "User is not authenticated or missing from the request."
            });
        }
        // Create the task
        const task = await Task.create({
            tittle, 
            description,
            user: req.user._id 
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task // Optionally return the created task
        });
    } catch (error) {
       next(error)
    }
}
//my task
export const myTask=async(req,res)=>{
 try {
  const id=req.user._id;
  const tasks=await Task.find({user:id});
  if(!tasks){
    return next(new Error("Task does't exits"))
  }
  res.status(201).json({
    success:true,
    tasks
  })
 } catch (error) {
  next(error);
 }
}
//update task
export const updateStatus = async (req, res, next) => {
    try {
      const id = req.params.id;
      const task = await Task.findById(id); // Await the asynchronous operation
  
      if (!task) {
        return res.status(404).json({
          success: false,
          message: "Task not found",
        });
      }
      task.status = !task.status; // Toggle the status
      await task.save(); // Correctly call save() with parentheses
  
      res.status(201).json({
        success: true,
        message: "Status updated",
      });
    } catch (error) {
      next(error); // Pass error to error-handling middleware
    }
  };
  
  //delete task
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        return next(new Error("Task doesn't exist")); // Pass the error to middleware
    }
    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
    });
} catch (err) {
    next(err); // Pass any unexpected errors
}
  };
  