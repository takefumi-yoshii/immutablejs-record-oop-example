//
// @flow
// _______________________________________________________

import type { RecordInstance, RecordOf } from 'immutable'
import { AbstractModel, type IF as _IF, type P as _P, props as _props } from './AbstractModel'

export type P = _P & {
  name: string;
  unit: string;
}
export type IF = _IF & {
  getName (): string;
  getUnit (): string;
  setName (name: string): RecordOf<P & IF>;
  setUnit (unit: string): RecordOf<P & IF>;
}
export function props<T> (arg: ?T): P & T {
  return _props({
    name: '',
    unit: '',
    ...arg
  })
}

export function DecorateModel<T: Object> (arg: ?T): Class<RecordInstance<T> & IF> {
  return class extends AbstractModel(props(arg)) {
    getName (): string {
      return this.get('name')
    }
    getUnit (): string {
      return this.get('unit')
    }
    setName (name: string): RecordOf<P & IF> {
      return this.set('name', name)
    }
    setUnit (unit: string): RecordOf<P & IF> {
      return this.set('unit', unit)
    }
  }
}

export class DecorateModelClass extends DecorateModel() {}
