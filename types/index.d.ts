import { Dispatch, MutableRefObject } from 'react';
/**
 * 封装最新值返回
 * @param init 初始值
 */
export declare function useRefState<S>(init: S): [S, Dispatch<S>, MutableRefObject<S>];
