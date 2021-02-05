const fs = require("fs")

module.exports = {
    devServer: {
        https: {
          key: process.env.VUE_APP_MODE !== ‘development’ ? '' : fs.readFileSync("./key.pem"),
          cert: process.env.VUE_APP_MODE !== ‘development’ ? '' : fs.readFileSync("./cert.pem"),
        },
        public: "https://localhost:5555/"
    }
}
