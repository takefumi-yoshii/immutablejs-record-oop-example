//
// @flow
// _______________________________________________________

import { AbstractModel } from './AbstractModel'

export type Props = {
  name: string;
  color: string;
}
const props: Props = {
  name: '',
  color: ''
}

export class DecorateModel extends AbstractModel(props) {
  getName (): string {
    return this.get('name')
  }
  getColor (): string {
    return this.get('color')
  }
}
