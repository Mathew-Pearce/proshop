//Handle not found errors!
const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//Handle errors!
const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message;

  //check for mongoose validation error
  if (error.name === "CastError" && error.kind === "ObjectId") {
    message = `Resource not found`;
    statusCode = 404;
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === " production" ? "🥞" : error.stack,
  });
};
export { notFoundHandler, errorHandler };
