//
// @flow
// _______________________________________________________

import { Record, type RecordInstance } from 'immutable'

export type P = {
  value: number;
}
export type IF = {
  getValue (): number;
  getStringValue (): string;
}
export function props<T> (arg: T): P & T {
  return {
    value: 0,
    ...arg
  }
}

export function AbstractModel<T> (arg: T): Class<RecordInstance<P & T> & IF> {
  return class extends Record(props(arg)) {
    getValue (): number {
      return this.get('value')
    }
    getStringValue (): string {
      return `${this.get('value')}`
    }
  }
}

export class AbstractModelClass extends AbstractModel() {}
