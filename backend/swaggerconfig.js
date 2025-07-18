const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for the project",
      contact: {
        name: "Your Name",
        email: "your.email@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000", // Your API base URL
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/**/*.js"], // Path to your route files
};

module.exports = swaggerJsDoc(swaggerOptions);
