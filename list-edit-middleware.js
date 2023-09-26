function validateTaskData(req, res, next) {
    const tarea = req.body;
  
    if (!tarea) {
      return res.status(400).json({ error: "The request body is empty." });
    }
  
    
    if (!tarea.id || typeof tarea.isCompleted === "undefined" || !tarea.description) {
      return res.status(400).json({ error: "Task information is invalid or missing attributes." });
    }
  
    next();
  }
  
  module.exports = {
    validateTaskData,
  };