//
// @flow
// _______________________________________________________

import { DecorateModelClass } from './DecorateModel'

describe('DecorateModel', () => {
  let model = new DecorateModelClass({ value: 20, name: 'temperature' })
  test('#getValue', () => {
    expect(model.getValue()).toEqual(20)
  })
  test('#getStringValue', () => {
    expect(model.getStringValue()).toEqual('20')
  })
  test('#getName', () => {
    expect(model.getName()).toEqual('temperature')
  })
})
