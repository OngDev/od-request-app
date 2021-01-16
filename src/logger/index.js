import { createLogger } from "vue-logger-plugin"
 
// create logger with options
const logger = createLogger({
  enabled: true,
  beforeHooks: [],
  afterHooks: []
})
 
export default logger