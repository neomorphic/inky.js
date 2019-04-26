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
|inky.terminal.`<color>`(`<text>`) | true | 0.0.2 +|
|String.`<color>`()| false | TBA |
|inky.terminal.rgb(`<r>`, `<g>`, `<b>`, `<text>`)| false| TBA |
|inky.terminal.hex(#`<hex>`, `<text>`)| false | TBA|



## Docs:

### index:
[intro](#intro)<br>
[installation](#installation)<br>
[usage](#usage)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[console-log](#console-log)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[inky-color](#inky-color)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[inky-terminal](#inky-terminal)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[features](#features)
<br>
[Color List](#color-list)

## intro:

Inky.js is an early stage competitor to the likes of [chalk](https://npmjs.com/package/chalk) and [colors]([https://www.npmjs.com/package/colors](https://www.npmjs.com/package/colors))


## installation:
### npm:
``npm install inky.js``
### yarn:
``yarn add inky.js``

## usage:
### console-log;

#### inky-color:

### inky-terminal:

#### features:

## Color List

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
||bold|no|yes|no|
||underscore|no|yes|no|
|Blue|||||
||bold|no|yes|no|
||underscore|no|yes|no|
|Cyan|||||
||bold|no|yes|no|
||underscore|no|yes|no|
|Green|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|
|Magenta|||||
||bold|no|yes|no|
||underscore|no|yes|no|
|Red|||||
||bold|yes|yes|yes|
||underscore|yes|yes|yes|
|White|||||
||bold|no|yes|no|
||underscore|no|yes|no|
|Yellow|||||
||bold|no|yes|no|
||underscore|no|yes|no|

|BONUS FEATURES| Note|
|--|-|
|murica| alternate colors of text to make an american themed output


>all bonus features have full support in all output modes
