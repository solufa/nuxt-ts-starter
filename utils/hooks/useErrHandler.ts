import { useContext } from '@nuxtjs/composition-api'

export const useErrHandler = () => {
  const ctx = useContext()

  return (e: Error) => ctx.error(e)
}
