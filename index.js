const level = require('supports-color').stdout.level
if(level === 0){
  console.log(`[INKY.js] WARN: Your terminal instace does not support color`)
  console.log(`[INKY.js] WARN: INKY.js will not apply styles to your logs (it will still work however)`)
}

if(process.env.term === "cygwin")
/*String.prototype.red = require('./src/string/red.js')*/

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


class Terminal {
  constructor() {
    this.red = require('./src/terminal/red.js')
    this.green = require('./src/terminal/green.js')
    this.murica = require('./src/terminal/murica.js')
    this.bgMurica = require('./src/terminal/bgMurica.js')
    //this.bg = {}
    if(level === 3){
      this.rgb = (r,g,b,text) => {
        process.stdout.write(`\x1b[38;2;${r};${g};${b}m${text}\x1b[0m\n`)
      }
      this.bgRgb = (r,g,b,text) => {
        process.stdout.write(`\x1b[48;2;${r};${g};${b}m${text}\x1b[0m\n`)
      }
      this.hex = (fghex, text) => {
        if(fghex === '#000000'){

          process.stdout.write(`\x1b[38;2;0;0;0m${text}\x1b[0m\n`)
        } else {
          var res = hexToRgb(fghex)
          process.stdout.write(`\x1b[38;2;${res.r};${res.g};${res.b}m${text}\x1b[0m\n`)
        }
      }
      this.bgHex = (fghex, text) => {
        if(fghex === '#000000'){

          process.stdout.write(`\x1b[48;2;0;0;0m${text}\x1b[0m\n`)
        } else {
          var res = hexToRgb(fghex)
          process.stdout.write(`\x1b[48;2;${res.r};${res.g};${res.b}m${text}\x1b[0m\n`)
        }
      }
      this.rgbGradient = require('./src/terminal/rgbgradient.js')
      this.rgbBgGradient = require('./src/terminal/bgrgbgradient.js')

      this.hexGradient = (hex1, hex2, str) => {
        if(str === '' || str === null || str === undefined){

        } else if(hex1 === '' || hex1 === null || hex1 === undefined){

        } else if(hex1 === '' || hex1 === null || hex1 === undefined) {

        } else {
          var rgb1 = hexToRgb(hex1)
          var rgb2 = hexToRgb(hex2)
          this.rgbGradient([rgb1.r,rgb1.g,rgb1.b],[rgb2.r,rgb2.g,rgb2.b],str)
        }
      }
      this.hexBgGradient = (hex1, hex2, str) => {
        if(str === '' || str === null || str === undefined){

        } else if(hex1 === '' || hex1 === null || hex1 === undefined){

        } else if(hex1 === '' || hex1 === null || hex1 === undefined) {

        } else {
          var rgb1 = hexToRgb(hex1)
          var rgb2 = hexToRgb(hex2)
          this.rgbBgGradient([rgb1.r,rgb1.g,rgb1.b],[rgb2.r,rgb2.g,rgb2.b],str)
        }
      }
    }
    this.log = console.log
    this.write = (text) => {
      process.stdout.write(text)
    }
    this.assert = console.assert
    this.clear = console.clear
    this.count = console.count
    this.countReset = console.countReset
    this.debug = console.debug
    this.dir = console.dir
    this.error = console.error
    this.group = console.group
    this.groupEnd = console.groupEnd
    this.goupCollapsed = console.groupCollapsed
    this.info = console.info
    this.time = console.time
    this.timeEnd = console.timeEnd
    this.trace = console.trace
    this.warn = console.warn
    this.cursorPosition = module.exports.cursor.setPosition
    this.beep = () => {
      process.stdout.write('\x07')
    }
  }
}
module.exports = {
  red: require('./src/fg/red.js'),
  green: require('./src/fg/green.js'),
  black: require('./src/fg/black.js'),
  yellow: require('./src/fg/yellow.js'),
  blue: require('./src/fg/blue.js'),
  magenta: require('./src/fg/magenta.js'),
  cyan: require('./src/fg/cyan.js'),
  white: require('./src/fg/white.js'),
  bgRed: require('./src/bg/red.js'),
  bgGreen: require('./src/bg/green.js'),
  bgBlack: require('./src/bg/black.js'),
  bgYellow: require('./src/bg/yellow.js'),
  bgBlue: require('./src/bg/blue.js'),
  bgMagenta: require('./src/bg/magenta.js'),
  bgCyan: require('./src/bg/cyan.js'),
  bgWhite: require('./src/bg/white.js'),
  murica: require('./src/fg/murica.js'),
  bgMurica: require('./src/bg/murica.js'),
  cursor: {
    hide: require('./src/cursor/hide.js'),
    show: require('./src/cursor/show.js'),
    hex: (hex) => {
      throw new Error('Hex coloring on the cursor is unavailable at this time')
    },
    red: require('./src/cursor/red.js'),
    down: require('./src/cursor/down.js'),
    up:require('./src/cursor/up.js'),
    left:require('./src/cursor/left.js'),
    right:require('./src/cursor/right.js'),
    setPosition: require('./src/cursor/setpos.js'),
    nextLine: require('./src/cursor/nextLine.js'),
    lastLine: require('./src/cursor/lastLine.js')
  },
  clearLine: require('./src/funcs/line.js'),
  clearScreen: require('./src/funcs/screen.js'),
  beep: () => {
    process.stdout.write('\007')
  },
  terminal: Terminal
}
