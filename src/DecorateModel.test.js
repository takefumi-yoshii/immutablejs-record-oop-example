//
// @flow
// _______________________________________________________

import { DecorateModel } from './DecorateModel'

describe('DecorateModel', () => {
  const model: DecorateModel = new DecorateModel({ name: 'jhon', color: '#F00' })
  test('#getValue', () => {
    expect(model.getValue()).toEqual(0)
  })
  test('#getStringValue', () => {
    expect(model.getStringValue()).toEqual('0')
  })
  test('#getName', () => {
    expect(model.getName()).toEqual('jhon')
  })
  test('#getColor', () => {
    expect(model.getColor()).toEqual('#F00')
  })
})
