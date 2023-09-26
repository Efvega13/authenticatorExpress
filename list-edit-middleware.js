function valideTask(req, res, next) {
    const task = req.body;
  
    if (!task) {
      return res.status(400).json({ error: "El cuerpo de la solicitud está vacío." });
    }
  
    if (!task.id || typeof task.isCompleted === "undefined" || !task.description) {
      return res.status(400).json({ error: "La información de la tarea es inválida o faltan atributos." });
    }
  
    next();
  }
  
  module.exports = {
    valideTask,
  };