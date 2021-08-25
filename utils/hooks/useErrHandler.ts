import { useContext } from '@nuxtjs/composition-api'

export const useErrHandler = (): ((e: Error) => void) => {
  const ctx = useContext()

  return (e) => {
    ctx.error(e)
  }
}
