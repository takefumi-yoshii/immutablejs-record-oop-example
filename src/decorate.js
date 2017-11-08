//
// @flow
// _______________________________________________________

import { AbstractFactory, RI as _RI, type P as _P, props as _props } from './abstract'

type P = _P & {
  name: string;
  unit: string;
}
function props<T> (arg: ?T): P & T {
  return _props({
    name: '',
    unit: '',
    ...arg
  })
}

declare class RI<T: Object | P> extends _RI<T> {
  getName (): string;
  getUnit (): string;
  setName (name: string): T | this;
  setUnit (unit: string): T | this;
}
function DecorateFactory<T: Object | P> (arg: ?T): Class<RI<T> | *> {
  return class extends AbstractFactory(props(arg)) {
    getName (): string {
      return this.get('name')
    }
    getUnit (): string {
      return this.get('unit')
    }
    setName (name: string): T | this {
      return this.set('name', name)
    }
    setUnit (unit: string): T | this {
      return this.set('unit', unit)
    }
  }
}

class DecorateClass extends DecorateFactory() {}

export type { P, RI }
export {
  props,
  DecorateFactory,
  DecorateClass
}
