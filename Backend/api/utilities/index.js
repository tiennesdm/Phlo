const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const allowedMethods = ["GET", "POST", "PUT", "DELETE", "HEAD"];

// Environment Vars
const mongoURL = process.env.MONGO_DB_URL;

// MongoDB
const mongoose = require("mongoose");
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const mongoCon = mongoose.connection;
mongoCon.on("open", () => {
  console.log("Connected to MongoDB");
});

/**
 * This method helps to validate the Joi schema of the request
 * validateRequestSchema
 *
 * ********/

const validateRequestSchema = function (schemas) {
  return function (req, res, next) {
    let routeSchemas =
      schemas[`${req.method.toUpperCase()}>>${req.route.path}`];
    if (routeSchemas) {
      let additional_info = [];
      Object.keys(routeSchemas).forEach((section) => {
        var validation = routeSchemas[section].validate(req[section], {
          abortEarly: false,
        });
        if (validation.error) {
          additional_info.push({
            message: `${section.toUpperCase()} parameter(s) failed validation`,
            validation_results: validation.error.details.map((details) => {
              return { field: details.path[0], reason: details.message };
            }),
          });
        }
      });
      if (additional_info.length > 0) {
        return res.status(400).send({
          success: false,
          errno: 400,
          message: "VALIDATION_ERROR",
          additional_info: additional_info,
        });
      }
    }
    next();
  };
};
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ");
    if (token[0] !== "Bearer") {
      return res.status(404).json({ status: false, message: " Invalid Auth " });
    }
    if (!token[1]) {
      return res
        .status(401)
        .json({ status: false, message: "Access token Not Found" });
    }
    const decodedToken = jwt.verify(token[1], process.env.JWT_KEY);
    req.auth = decodedToken;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ status: false, message: "You are not authenticated!" });
  }
};


function btoa(str) {
  return Buffer.from(str).toString("base64");
}
function atob(str) {
  return Buffer.from(str, "base64").toString();
}

/**
 * Verify the request method.
 *
 * This function will ensure only allowed HTTP methods are accepted by the server.
 */

const validateRequestMethod = (req, res, next) => {
  if (!allowedMethods.includes(req.method)) {
    return res.status(405).send({ code: 3000, message: "INVALID_METHOD" });
  }
  next();
};

module.exports = {
  validateRequestSchema,
  validateRequestMethod,
  verifyToken,
  btoa,
  atob
};
