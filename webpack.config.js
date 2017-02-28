module.exports = {
  entry:'./public/src/entry.js',

  output:{
    path:'./public/js',
    filename: 'bundle.js'
  },
  watch: true,
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        loader:'babel-loader',
        query:{
          presets:['es2015']
        }
      },
      {
        test:/\.scss$/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ]
  }
};