//
// @flow
// _______________________________________________________

import type { RecordInstance, RecordOf } from 'immutable'
import { DecorateModel, type IF as _IF, type P as _P, props as _props } from './DecorateModel'

export type P = _P & {
  message_prefix: string;
}
export type IF<T> = _IF<T> & {
  getMessagePrefix (): string;
  getMessage (): string;
  setMessagePrefix (message_prefix: string): RecordOf<T>;
}
export function props<T> (arg: ?T): P & T {
  return _props({
    message_prefix: 'Measurement item is',
    ...arg
  })
}

export function PresentModel<T: Object> (arg: ?T): Class<RecordInstance<T> & IF<T>> {
  return class extends DecorateModel(props(arg)) {
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
    setMessagePrefix (message_prefix: string): RecordOf<T> {
      return this.set('message_prefix', message_prefix)
    }
  }
}

export class PresentModelClass extends PresentModel() {}
