module.exports = {
  entry:__dirname + "/app/app.js",
  output:{
    path:__dirname,
    filename:"bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.js/,
        loader:"babel",
        query:{
          presets: ['es2015','react']
        }
      },
      {
        test:/\.css/,
        loader:"style!css"
      }
    ]
  },
  devServer:{
    contentBase: __dirname,//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }
}
