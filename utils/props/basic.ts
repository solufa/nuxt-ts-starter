import type { PropType } from '@nuxtjs/composition-api'

export const voidFnType = {
  type: Function as PropType<() => void>,
  required: true as const,
}

export const optionalVoidFnType = Function as PropType<() => void>

export const getOptionalBoolType = (defaltVal = false) => ({
  type: Boolean,
  required: false as const,
  default: defaltVal,
})

export const getObjType = <T>() => ({
  type: Object as PropType<T>,
  required: true as const,
})

export const getOptionalObjType = <T>() => ({
  type: Object as PropType<T>,
  required: false as const,
})

export const getArrType = <T>() => ({
  type: Array as PropType<T[]>,
  required: true as const,
})

export const getOptionalArrType = <T>() => ({
  type: Array as PropType<T[]>,
  required: false as const,
})

export const getFnType = <T>() => ({
  type: Function as PropType<(arg: T) => void>,
  required: true as const,
})

export const getOptionalFnType = <T>(): PropType<(arg: T) => void> => Function
