const path = require('path');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob-all');

module.exports = {
  // ... other webpack configuration ...

  plugins: [
    // ... other plugins ...
    new PurgeCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, 'src/components/**/*.js'),  // Include JavaScript files in src/components
        path.join(__dirname, 'src/styles/**/*.css'),      // Include CSS files in src/styles
        path.join(__dirname, 'public/**/*.html'),         // Include HTML files in public
      ]),
      // You can also include additional paths or glob patterns as needed.
    }),
  ],
};