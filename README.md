### React Sandbox
### [Lydia Minehan-Tubic](https://github.com/LydiaMT)
#
### About
#### Website to practice common React use cases
#
### How to create a React App if you DO NOT enjoy pain and misery

1. In terminal run: `npx create-react-app YOUR-APP-NAME`
1. Clean up the installed items by deleting anything that is not needed for your application. 

#
### How to create a React App if you DO enjoy pain and misery

1. `npm init -y` to initialize a packagelock.json
1. `npm i react react-dom` to install react and react-dom dependencies
1. Add Babel Dependencies: `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader`
    - `@babel/core`: basic react package
    - `@babel/preset-env`: Allows you to use modern JavaScript and transpiles it down to older JavaScript as to work in all browsers
    - `@babel/preset-react`: Turns JSX code into Vanilla React. Transpiles our JSX code
    - `babel-loader`: Connects Babel to webpack. Webpack takes dependencies, bundles it with React, and combines it so you can use it on the web. 
1. Since we are using babel, we need to add a bable file to the project `touch .babelrc`. Add the following JSON to your bable file:
    ```JSON
    {
      "presets": ["@babel/preset-react", "@babel/preset-env"]
    }
    ```
1. Next, install webpack dependencies: `npm i webpack webpack-cli webpack-dev-server`
1. Now create a webpack file `touch webpack.config.js`. Add the following code to your webpack config file (note that you will need to create a `src` folder and an `index.html` file based on the rules in you webpack config. I also added jpeg as a test to the config for image file-loader):
    ```JS
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const path = require("path");

    module.exports = {
      mode: 'development',
      entry: "./src/index.jsx",
      output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
      ],
      resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.png|svg|jpg|jpeg|gif$/,
            use: ["file-loader"],
          },
        ],
      },
    };
    ```
1. Install one more dependency for your webpack config file: `npm i html-webpack-plugin`. This will find your html file and links the generated App.js file.
1. Create a src folder, App.jsx file, and index.jsx file: 
    - `mkdir src` 
    - `touch App.jsx index.jsx`
1. App.jsx: Import React, add a simple component to your App.jsx file for proof of life, and export App
1. index.jsx: Import React & ReactDOM, Import App, and render App by adding a query selector for an element in your index.html file with the id of 'root'
    - `ReactDOM.render(<App/>, document.querySelector('#root')`
1. NOTE: I have decided to name my files .jsx. If you prefer to name your React files, .js you must update the configuration in your webpack.config file to reflect that i.e. `entry: ./src/index.js`
1. Create an index.html file in your src folder: `touch index.html`. Set up the file, and add a div with the id root.
1. To run your app, you will need to add a start script to your package.json file. Might as well add a build script while we're at it too:
    ``` JSON
    "start": "webpack-dev-server --hot --open",
    "build": "webpack --config webpack.config.js --mode production"
    ```
    - 'hot' is to hot reload anything you make an edit
1. Run `npm start` and check for proof of life! Your webpage should render whatever markup you added to your App.jsx file.
1. To add styles to your React App run: `npm i style-loader css-loader` 
    - You can add a sass loader if you want to work with sass instead
    - In src, you will now need to add a css file, like `touch App.css` and import that into your App.jsx file so it can read the styles
1. If you want to add images to your App, you will need to install ANOTHER dependency: `npm i file-loader`. To add images you will need to import the file into your react component, then use the name you gave it from the import as the src
    ```JS
    import example from './img/example.png'

    <img src={example} alt="picture of example">
    ```
1. Congratulations! You have set up a basic React app. Now add more components and make the app as dynamic as you'd like. 
1. Because of the way this has been configured, when you are finished with your app run `npm build`. This will bundle all of the code you just wrote into a `.dist` folder and will make it readable by a browser. 

Thank you so much [Dev Ed](https://github.com/developedbyed) for taking the time to create [this tutorial](https://www.youtube.com/watch?v=EUM78cxo0i8) on how to set up a React app manually. The steps I captured above are taken from your YouTube video. 

### Manual Build: Dependencies & Packages 
```
  @babel/core
  @babel/preset-env
  @babel/preset-react
  babel-loader
  css-loader
  file-loader
  html-webpack-plugin
  react
  react-dom
  style-loader
  webpack
  webpack-cli
  webpack-dev-server
```
