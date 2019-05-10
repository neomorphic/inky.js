const level = require('supports-color').stdout.level
module.exports = (text) => {
  if(level === 0){
    process.stdout.write(text+'\n')
  } else {
    process.stdout.write("\x1b[31m"+text+"\x1b[0m\n")
  }
}
module.exports.bold = (text) => {
  if(level === 0){
    process.stdout.write(text+'\n')
  } else {
    process.stdout.write("\x1b[1m\x1b[31m"+text+"\x1b[0m\n")
  }
}

module.exports.underscore = (text) => {
  if(level === 0){
    process.stdout.write(text+'\n')
  } else {
    process.stdout.write("\x1b[4m\x1b[31m"+text+"\x1b[0m\n")
  }
}
