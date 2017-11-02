//
// @flow
// _______________________________________________________

import { PresentModel } from './PresentModel'

describe('PresentModel', () => {
  const model: PresentModel = new PresentModel({ id: 'yyyy' })
  test('#getValue', () => {
    expect(model.getValue()).toEqual(0)
  })
  test('#getStringValue', () => {
    expect(model.getStringValue()).toEqual('0')
  })
  test('#getID', () => {
    expect(model.getID()).toEqual('yyyy')
  })
  test('#getType', () => {
    expect(model.getType()).toEqual(0)
  })
})
