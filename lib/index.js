'use strict'

const BigNumber = require('bignumber.js')
const long = require('long')

/**
 * Converts any bu value into mo
 *
 * @param  {String} bu
 * @return {String}
 */
function buToMo (bu) {
  if (!_isAvailableBu(bu)) {
    throw new Error('invalid bu value')
  }

  const oneMo = Math.pow(10, 8)
  const mo = new BigNumber(bu).times(oneMo)
  return mo.toString()
}

/**
 * Converts any mo value into bu
 *
 * @param  {String} mo
 * @return {String}
 */
function moToBu (mo) {
  if (!_isAvailableMo(mo)) {
    throw new Error('invalid mo value')
  }

  const oneMo = Math.pow(10, 8)
  const bu = new BigNumber(mo).dividedBy(oneMo)
  return bu.toString()
}

function _isAvailableMo (value) {
  const reg = /^(0|([1-9]\d*))$/
  return (
    (typeof value === 'string') &&
    reg.test(value) &&
    long.fromValue(value).greaterThanOrEqual(0) &&
    long.fromValue(value).lessThanOrEqual(long.MAX_VALUE)
  )
}

function _isAvailableBu (value) {
  const reg = /^(([1-9]\d*)+|0)(\.\d{1,8})?$/
  return (
    (typeof value === 'string') &&
    reg.test(value) &&
    long.fromValue(value).greaterThanOrEqual(0) &&
    long.fromValue(value).lessThanOrEqual(long.MAX_VALUE.divide(Math.pow(10, 8)))
  )
}

module.exports = {
  buToMo,
  moToBu
}
