## bujs-account

A simple module for handling BU units.

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Install

```bash
$ npm install --save bujs-unit
```



## Test

The tests can be run with Node.js 

```bash
$ npm test
```



## Usage

> Converts mo value into bu
```js
const moToBu = require('bujs-unit').moToBu

console.log(moToBu('123'))

// result: '0.00000123'

```

> Converts bu value into mo
```js
const buToMo = require('bujs-unit').buToMo

console.log(buToMo('123'))

// result: '12300000000'

```

