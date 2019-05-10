const inky = require('.');
const terminal = new inky.terminal()

terminal.log(process.env)

/*console.log(inky.red('Console:  Hello World'))
console.log(inky.murica('murica: Hello World'))
console.log(inky.bgMurica('bgMurica: Hello World'))
terminal.murica('Terminal murica: Hello World')
terminal.bgMurica('Terminal bgMurica: Hello World')
terminal.red('Terminal: Hello World')
terminal.red.bold('Terminal: Hello World')
terminal.red.underscore('Terminal: Hello World')
terminal.rgb(0, 255, 220,'Terminal (RGB): Hello World')
terminal.bgRgb(0, 97, 83, 'Terminal (Background RGB): Hello World')
terminal.hex('#9EFF00',"Terminal (HEX): Hello world")
terminal.bgHex('#800080',"Terminal (Background HEX): Hello world")
terminal.rgbGradient([20,0,0], [255,255,255], 'Lorem ipsum dolar sit amet')
terminal.rgbBgGradient([20,0,0], [255,255,255], 'Lorem ipsum dolar sit amet')
terminal.hexGradient('#550000', '#ffffff', 'Lorem ipsum dolar sit amet')
terminal.hexBgGradient('#550000', '#ffffff', 'Lorem ipsum dolar sit amet')


testCursor()

async function testCursor() {
  inky.cursor.hide()
  let test = "abcdefghijklmnopqrstuvwxyz"
  for(var i = 0; i<test.length; i+=1){
    process.stdout.write(test[i])
    await sleep(10)
  }
  inky.cursor.show()
  inky.cursor.red()
  await sleep(1000)
  inky.clearLine()
  await sleep(1000)
  inky.clearScreen()
  terminal.write('Hello World')
  await sleep(1000)
  terminal.cursorPosition(10,10)
  terminal.write('10x10')
  await sleep(1000)
  terminal.cursorPosition(20,20)
  terminal.write('20x20')
  await sleep(1000)
  terminal.cursorPosition(30,30)
  terminal.write('30x30')
  await sleep(4000)
  inky.clearScreen()
  inky.cursor.setPosition({x:0,y:0})
  inky.beep()
}
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
*/
