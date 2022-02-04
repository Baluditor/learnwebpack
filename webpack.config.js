const path = require("path");

module.exports = {
  // This is the default entry, if js file would be named
  // a.js then this should be ./src/a.js
  // The entry point to the application.
  // Can be an object if code splitting used
  entry: "./src/index.js",
  // The name of the file we want to compile to
  // By default it's main JS.
  output: {
    fileName: "balus.js",
    // For path we use node.js utilities like path
    // to resolve a consistent path name
    path: path.resolve(__dirname, "dist"),
  },
};
