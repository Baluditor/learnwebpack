const path = require('path');

module.exports = {
  // This is the default entry, if js file would be named
  // a.js then this should be ./src/a.js
  // The entry point to the application.
  // Can be an object if code splitting used
  entry: './src/index.js',
  // The name of the file we want to compile to
  // By default it's main JS.
  output: {
    filename: 'balus.js',
    // For path we use node.js utilities like path
    // to resolve a consistent path name
    path: path.resolve(__dirname, 'dist'),
  },
  // Loaders user to handle any filetype which is
  // not JS
  module: {
    // Add rules to match a certain filetype and
    // use the required loaders
    rules: [
      {
        // Rule will have a test attribute which uses
        // regular expression to match the filetype
        // When webpack encounters a file ending with
        // scss it will use the loaders provided in the
        // use array
        // First it will translate it to regular css then
        // JS so it can eventually can be injected to the
        // HTML
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 90,
  },
  //  Set the compile option to prod
  mode: 'production',
};
