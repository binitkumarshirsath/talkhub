class CustomError extends Error {
  statusCode: number;
  isOperational: boolean;
  stackTrace: void;
  constructor(message = "Somehting went wrong", statusCode = 500) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.isOperational = process.env.NODE_ENV === "development";
    this.stackTrace = Error.captureStackTrace(this, this.constructor);
  }
}

export { CustomError };
