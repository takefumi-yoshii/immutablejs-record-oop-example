//
// @flow
// _______________________________________________________

import { AbstractModel } from './AbstractModel'

export type Props = {
  id: string;
  type: number;
}
const props: Props = {
  id: 'xxxx',
  type: 0
}

export class PresentModel extends AbstractModel(props) {
  getID (): string {
    return this.get('id')
  }
  getType (): number {
    return this.get('type')
  }
}
