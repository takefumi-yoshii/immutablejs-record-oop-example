//
// @flow
// _______________________________________________________

import { AbstractClass } from './abstract'

describe('AbstractClass', () => {
  let model = new AbstractClass({ value: 10 })
  test('#getValue', () => {
    expect(model.getValue()).toEqual(10)
  })
  test('#getStringValue', () => {
    expect(model.getStringValue()).toEqual('10')
  })
  test('#setValue', () => {
    model = model.setValue(100)
    expect(model.getValue()).toEqual(100)
  })
})
