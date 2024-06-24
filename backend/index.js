const app = require("./src/server");
const conDb = require("./src/config/conDb");
conDb()
  .then(() => {
    // Start the Express server and listen on the dynamically assigned port
    const server = app.listen(process.env.PORT || 3000, () => {
      console.log(`Server listening on port ${server.address().port}`);
    });
  })
  .catch((error) => {
    // Log an error message if there is an issue connecting to the database
    console.error("Error connecting to the database:", error);
  });
