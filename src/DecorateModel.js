//
// @flow
// _______________________________________________________

import type { RecordInstance } from 'immutable'
import { AbstractModel, type IF as _IF, type P as _P, props as _props } from './AbstractModel'

export type P = _P & {
  name: string;
  unit: string;
}
export type IF = _IF & {
  getName (): string;
  getUnit (): string;
}
export function props<T> (arg: T): P & T {
  return _props({
    name: '',
    unit: '',
    ...arg
  })
}

export function DecorateModel<T> (arg: T): Class<RecordInstance<P & T> & IF> {
  return class extends AbstractModel(props(arg)) {
    getName (): string {
      return this.get('name')
    }
    getUnit (): string {
      return this.get('unit')
    }
  }
}

export class DecorateModelClass extends DecorateModel() {}
