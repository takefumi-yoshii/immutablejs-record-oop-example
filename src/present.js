//
// @flow
// _______________________________________________________

import { DecorateFactory, RI as _RI, type P as _P, props as _props } from './decorate'

type P = _P & {
  message_prefix: string;
}
function props<T> (arg: ?T): P & T {
  return _props({
    message_prefix: 'Measurement item is',
    ...arg
  })
}

declare class RI<T: Object | P> extends _RI<T> {
  getMessagePrefix (): string;
  getMessage (): string;
  setMessagePrefix (message_prefix: string): T | this;
}
function PresentFactory<T: Object | P> (arg: ?T): Class<RI<T> | *> {
  return class extends DecorateFactory(props(arg)) {
    getMessagePrefix (): string {
      return this.get('message_prefix')
    }
    getMessage (): string {
      const prefix = this.getMessagePrefix()
      const name = this.getName()
      const value = this.getValue()
      const unit = this.getUnit()
      return `${prefix} ${name}: ${value}${unit}`
    }
    setMessagePrefix (message_prefix: string): T | this {
      return this.set('message_prefix', message_prefix)
    }
  }
}

class PresentClass extends PresentFactory() {}

export type { P, RI }
export {
  props,
  PresentFactory,
  PresentClass
}
