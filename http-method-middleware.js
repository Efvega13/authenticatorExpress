function validateHTTPMethods(req, res, next) {
    const validar = ["GET", "POST", "PUT", "DELETE"];
  
    if (!validar.includes(req.method)) {
      return res.status(400).json({ error: "Método HTTP no válido." });
    }
  
    next();
  }
  
  module.exports = {
    validateHTTPMethods,
  };