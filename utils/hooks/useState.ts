import type { ComputedRef, UnwrapRef } from '@nuxtjs/composition-api'
import { computed, ref } from '@nuxtjs/composition-api'

function useState<T>(): [ComputedRef<UnwrapRef<T | undefined>>, (value: T | undefined) => void]
function useState<T>(initialState: T): [ComputedRef<UnwrapRef<T>>, (value: T) => void]
function useState<T>(initialState?: T) {
  const state = ref(initialState)
  const setState = (value: T) => {
    state.value = value as UnwrapRef<T>
  }

  return [computed(() => state.value), setState]
}

export { useState }
