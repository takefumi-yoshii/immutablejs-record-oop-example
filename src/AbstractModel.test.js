//
// @flow
// _______________________________________________________

import { AbstractModelClass } from './AbstractModel'

describe('AbstractModelClass', () => {
  let model = new AbstractModelClass({ value: 10 })
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
