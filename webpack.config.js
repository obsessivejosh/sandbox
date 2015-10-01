module.exports ={
  entry:"./app/components/Main.js",
  output:{
    filename:"public/js/app/app.js"
  },
  module:{
    loaders:[
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
}
