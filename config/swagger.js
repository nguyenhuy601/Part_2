const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Session Auth API",
      version: "1.0.0",
      description: "API xác thực người dùng với Express + MongoDB (cookie-based auth)",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./routes/*.js"], // nơi chứa swagger annotation
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
