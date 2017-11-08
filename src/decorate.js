//
// @flow
// _______________________________________________________

import type { RecordOf } from 'immutable'
import { AbstractFactory, type RI as _RI, type P as _P, props as _props } from './abstract'

export type P = _P & {
  name: string;
  unit: string;
}
export type RI<T> = _RI<T> & {
  getName (): string;
  getUnit (): string;
  setName (name: string): RecordOf<T>;
  setUnit (unit: string): RecordOf<T>;
}
export function props<T> (arg: ?T): P & T {
  return _props({
    name: '',
    unit: '',
    ...arg
  })
}

export function DecorateFactory<T: Object | P> (arg: ?T): Class<RI<T>> {
  return class extends AbstractFactory(props(arg)) {
    getName (): string {
      return this.get('name')
    }
    getUnit (): string {
      return this.get('unit')
    }
    setName (name: string): RecordOf<T> {
      return this.set('name', name)
    }
    setUnit (unit: string): RecordOf<T> {
      return this.set('unit', unit)
    }
  }
}

export class DecorateClass extends DecorateFactory() {}
