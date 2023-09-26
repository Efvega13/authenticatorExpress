function validateHTTPMethods(req, res, next) {
    const validar = ["GET", "POST", "PUT", "DELETE"];
  
    if (!validar.includes(req.method)) {
      return res.status(400).json({ error: "Invalid HTTP method." });
    }
  
    next();
  }
  
  module.exports = {
    validateHTTPMethods,
  };