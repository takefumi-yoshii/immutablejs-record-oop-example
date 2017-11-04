//
// @flow
// _______________________________________________________

import { PresentModelClass } from './PresentModel'

describe('PresentModel', () => {
  let model = new PresentModelClass({ value: 30, name: 'temperature', unit: '℃' })
  test('#getValue', () => {
    expect(model.getValue()).toEqual(30)
  })
  test('#getMessage', () => {
    expect(model.getMessage()).toEqual('Measurement item is temperature: 30℃')
  })
})
