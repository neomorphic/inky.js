#!/usr/bin/env node
const level = require('supports-color').stdout.level
const [ bin, a, ...args ] = process.argv;
const Inky = require('.')
console = new Inky.terminal()
if(args.join(' ').toLowerCase() === '-version'){
  console.green('Inky.js Version'+require('./package.json').version+'')
} else {
  console.red('[INKY.js] ERROR: Command ('+args.join(' ')+') is not recognised')
}
