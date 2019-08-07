


var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

​

module.exports = {

entry:"./src/index.js",

output:{

    path: path.resolve(__dirname,"dist"),

    filename:"main.js",

    publicPath:"/dist"

},

module:{

    rules:[

        {

          test:/\.(scss$|css$)/,

          use:["style-loader",//load last

          "css-loader",//load second

          "sass-loader" //load first

        ]

​

      },

      {

        test: /\.(html)$/,

        use: {

          loader: 'html-loader',

          options: {

            attrs: [':data-src']

          }

        }

      },

        {

            test: /\.(png|jpg|gif)$/,

            use: [

              {

                loader: "file-loader",

                options: {

                  name: "[name].[ext]",

                  outputPath: "src/img/",

                  publicPath: '../img/'

                }

              }

            ]

          }

         

    ]

},

​

/* plugins: [new HtmlWebpackPlugin({

  title: 'Custom template',

  // Load a custom template (lodash by default)

  template: 'index.html'

})]
 */
};

 