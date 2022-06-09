function errorHandler(err, req, res, next) {
  if (typeof err == "string") {
    return res.sendStatus(400).json({message: err.message});
  }
  
  if (typeof err == "validationError") {
    return res.sendStatus(401).json({message: err.message});
  }

  if (typeof err == "unauthorizedError") {
    return res.sendStatus(401).json({message: err.message});
  }

  return res.sendStatus(500).json({message: err.message});;
}
module.exports = {
  errorHandler,
}