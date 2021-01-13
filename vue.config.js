const fs = require("fs")

module.exports = {
    devServer: {
        https: {
          key: fs.readFileSync("./key.pem"),
          cert: fs.readFileSync("./cert.pem"),
        },
        public: "https://localhost:5555/"
    }
}