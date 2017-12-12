const snc = require('snc')
module.exports = (text, andarr, callback) => {
  snc.each(andarr, (el, idx, next) => {
    if (text.indexOf(` ${el} `) > -1) next(el)
    else next()
  }, res => {
    console.log("ANDFIND: " + JSON.stringify(res))
    callback(res)
  })
}
