//
// @flow
// _______________________________________________________

import { Record, type RecordOf, type RecordInstance } from 'immutable'

export type P = {
  value: number;
}
export type IF<T> = {
  getValue (): number;
  getStringValue (): string;
  setValue (value: number): RecordOf<T>;
}
export function props<T> (arg: ?T): P & T {
  return {
    value: 0,
    ...arg
  }
}

export function AbstractFactory<T: Object | P> (arg: ?T): Class<RecordInstance<T> & IF<T>> {
  return class extends Record(props(arg)) {
    getValue (): number {
      return this.get('value')
    }
    getStringValue (): string {
      return `${this.get('value')}`
    }
    setValue (value: number): RecordOf<T> {
      return this.set('value', value)
    }
  }
}

export class AbstractClass extends AbstractFactory() {}
