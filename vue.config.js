const fs = require("fs")

module.exports = {
    devServer: {
        https: {
          key: process.env.NODE_ENV !== ‘development’ ? '' : fs.readFileSync("./key.pem"),
          cert: process.env.NODE_ENV !== ‘development’ ? '' : fs.readFileSync("./cert.pem"),
        },
        public: "https://localhost:5555/"
    }
}
