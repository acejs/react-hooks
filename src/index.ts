import {
  useState,
  Dispatch,
  useRef,
  MutableRefObject,
  useCallback,
} from 'react'

/**
 * 封装最新值返回
 * @param init 初始值
 */
export function useRefState<S>(init: S): [S, Dispatch<S>, MutableRefObject<S>] {
  const [value, setValue] = useState(init)
  const ref: MutableRefObject<S> = useRef(init)

  const set = useCallback(
    (v: S) => {
      setValue(v)
      ref.current = v
    },
    [setValue]
  )

  return [value, set, ref]
}
