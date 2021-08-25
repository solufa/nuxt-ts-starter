import { getFnType } from './basic'

export const openedProp = { opened: { type: Boolean, required: true } }

export const openedSyncProps = {
  ...openedProp,
  updateOpened: getFnType<boolean>(),
}
