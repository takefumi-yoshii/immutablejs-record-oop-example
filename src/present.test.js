//
// @flow
// _______________________________________________________

import { PresentClass } from './present'

describe('PresentFactory', () => {
  let model = new PresentClass({ value: 30, name: 'temperature', unit: '℃' })
  test('#getValue', () => {
    expect(model.getValue()).toEqual(30)
  })
  test('#getMessage', () => {
    expect(model.getMessage()).toEqual('Measurement item is temperature: 30℃')
  })
  test('#setMessage', () => {
    // model = model.setValue(20).setName(10) // <- Expect Error, but not work currently.
    model = model.setValue(20).setName('humidity').setUnit('%').setMessagePrefix('Measurement')
    expect(model.getMessage()).toEqual('Measurement humidity: 20%')
  })
})
