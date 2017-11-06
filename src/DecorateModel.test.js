//
// @flow
// _______________________________________________________

import { DecorateModelClass } from './DecorateModel'

describe('DecorateModel', () => {
  let model = new DecorateModelClass({ value: 10, name: 'temperature' })
  test('#getValue', () => {
    model = model.setValue(20)
    expect(model.getValue()).toEqual(20)
  })
  test('#getStringValue', () => {
    expect(model.getStringValue()).toEqual('20')
  })
  test('#getName', () => {
    expect(model.getName()).toEqual('temperature')
  })
  test('#setName', () => {
    model = model.setName('humidity')
    expect(model.getName()).toEqual('humidity')
  })
  test('#setUnit', () => {
    model = model.setUnit('%')
    expect(model.getUnit()).toEqual('%')
  })
})
