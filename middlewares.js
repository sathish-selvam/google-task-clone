function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔎 - Nt Found -${req.originalUrl}}`);
  next(error);
}

// Caputure all the errors that occrus on the entire app
function errorHanlder(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "📚" : err.stack,
  });
}

module.exports = {
  notFound,
  errorHanlder,
};
