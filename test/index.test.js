'use strict'

const unit = require('../lib')

/* eslint-env jest */
test('unit.buToMo()', () => {
  expect(unit.buToMo('123')).toBe('12300000000')
  expect(unit.buToMo('0')).toBe('0')
  expect(() => {
    unit.buToMo('-1')
  }).toThrow('invalid bu value')
})

test('unit.moToBu()', () => {
  expect(unit.moToBu('123')).toBe('0.00000123')
  expect(unit.moToBu('0')).toBe('0')
  expect(() => {
    unit.moToBu('-1')
  }).toThrow('invalid mo value')
  expect(() => {
    unit.moToBu('1.0')
  }).toThrow('invalid mo value')
  expect(() => {
    unit.moToBu('1.2')
  }).toThrow('invalid mo value')
})
