const path = require('path');

module.exports = {
  mode:'development',
  entry: {index:'./src/index.js', newDiv:'/src/newDiv.js'},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
