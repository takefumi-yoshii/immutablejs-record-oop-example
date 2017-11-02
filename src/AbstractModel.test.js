//
// @flow
// _______________________________________________________

import { AbstractModelClass } from './AbstractModel'

describe('AbstractModelClass', () => {
  const model: AbstractModelClass = new AbstractModelClass({ value: 100 })
  test('#getValue', () => {
    expect(model.getValue()).toEqual(100)
  })
  test('#getStringValue', () => {
    expect(model.getStringValue()).toEqual('100')
  })
})
