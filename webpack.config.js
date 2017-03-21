var path = require('path');
var config = {
   context: path.join(__dirname, "src"),
   entry: './js/client.js',
  
   output: {
     path: __dirname + "/src/",
    
      filename: 'client.min.js',
   },
  
  
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
        
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;