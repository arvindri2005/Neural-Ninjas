const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
    // Sometimes the error doesn't have a status code, so we set it to 500
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    // Send the error message
    res.json({
        message: err.message,
        // Show the stack trace if we're in development mode
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
    }

export { notFound, errorHandler };