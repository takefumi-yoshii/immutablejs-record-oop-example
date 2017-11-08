//
// @flow
// _______________________________________________________

import { Record, RecordInstance } from 'immutable'

type P = {
  value: number;
}
function props<T> (arg: ?T): P & T {
  return {
    value: 0,
    ...arg
  }
}

declare class RI<T: Object | P> extends RecordInstance<T> {
  getValue (): number;
  getStringValue (): string;
  setValue (value: number): T | this;
}
function AbstractFactory<T: Object | P> (arg: ?T): Class<RI<T> | *> {
  return class extends Record(props(arg)) {
    getValue (): number {
      return this.get('value')
    }
    getStringValue (): string {
      return `${this.get('value')}`
    }
    setValue (value: number): T | this {
      return this.set('value', value)
    }
  }
}

class AbstractClass extends AbstractFactory() {}

export type { P, RI }
export {
  props,
  AbstractFactory,
  AbstractClass
}
