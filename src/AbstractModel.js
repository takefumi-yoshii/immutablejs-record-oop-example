//
// @flow
// _______________________________________________________

import { Record, type RecordInstance, type RecordOf } from 'immutable'

export type P = {
  value: number;
}
export type IF = {
  getValue (): number;
  getStringValue (): string;
  setValue (value: number): RecordOf<P & IF>;
}
export function props<T> (arg: ?T): P & T {
  return {
    value: 0,
    ...arg
  }
}

export function AbstractModel<T: Object> (arg: ?T): Class<RecordInstance<T> & IF> {
  return class extends Record(props(arg)) {
    getValue (): number {
      return this.get('value')
    }
    getStringValue (): string {
      return `${this.get('value')}`
    }
    setValue (value: number): RecordOf<P & IF> {
      return this.set('value', value)
    }
  }
}

export class AbstractModelClass extends AbstractModel() {}
