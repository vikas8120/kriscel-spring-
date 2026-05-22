import { createContext, useContext } from 'react';

export type ToastFn = (msg: string) => void;

export const ToastContext = createContext<ToastFn>(() => undefined);

export const useToast = () => useContext(ToastContext);
