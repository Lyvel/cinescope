import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";

/**
 * A custom hook that provides a typed dispatch function from the Redux store.
 * @returns {AppDispatch} The dispatch function.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * A custom hook that provides a typed selector function from the Redux store.
 * @returns {TypedUseSelectorHook<RootState>} The selector function.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * A custom hook that provides access to the Redux store instance.
 * @returns {AppStore} The Redux store instance.
 */
export const useAppStore: () => AppStore = useStore;
