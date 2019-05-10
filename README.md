# Inky.js
![alt text](https://raw.githubusercontent.com/fatalcenturion/inky.js/master/inky.js.png.png "inky.js")

## About:
Inky.js is a small terminal styling library with big dreams.

it is still in early development and may be unstable on some devices


## feature set:
| Name | Implemented | release version |
|-|-|-|
|inky.`<color>`(`<text>`) | true | 0.0.1 +|
|inky.terminal | true | 0.0.2 +|
|String.`<color>`()| false | Cancelled |
|inky.hex|partial (inky.terminal only)| 0.1.0 +|
|inky.rgb| partial (inky.terminal only)| 0.1.0 +|
|TrueColor|partial (inky.terminal only)| 0.1.0 +|
|gradient| partial (inky.terminal only) | 0.1.1 +|


## Docs:

### index:
[intro](#intro)<br>
[installation](#installation)<br>
[usage](#usage)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[console.log](#console.log)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[inky.terminal](#inky.terminal)
<br>
[Support List](#support-list)

## intro:

Inky.js is an early stage competitor to the likes of [chalk](https://npmjs.com/package/chalk) and [colors]([https://www.npmjs.com/package/colors](https://www.npmjs.com/package/colors))


## installation:
### npm:
``npm install inky.js``
### yarn:
``yarn add inky.js``

## usage:
### console.log:
```js
console.log(inky.red.bold('Hello World'))
```
### inky.terminal:

Inky.terminal is an extemded featureset of the default gloal conole, supporting all of the documented features of the console and extending them to include color features:

```js
const terminal = new inky.terminal()
terminal.<color>.<style>()
//or you can use the console-log method
terminal.log(inky.<color>('Hello World'))
```

## Support List

### default colors (no styles)

| Name | terminal | foreground | background |
|-|-|-|-|
Black|yes|yes|yes
Blue|yes|yes|yes
Cyan| yes|yes|yes
Green| yes|yes|yes
Magenta| yes|yes|yes
Red| yes|yes|yes
White| yes|yes|yes
Yellow| yes|yes|yes

##

### default colors (styled)

|Name| style| terminal|foreground|background|
|-|-|-|-|-|
|Black|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|
|Blue|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|
|Cyan|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|
|Green|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|
|Magenta|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|
|Red|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|
|White|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|
|Yellow|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|

|BONUS FEATURES| Note|
|--|-|
|murica| alternate colors of text to make an american themed output


>all bonus features have full support in all output modes



found a problem? open an issue on our [GitHub page](https://github.com/fatalcenturion/inky.js/issues)
