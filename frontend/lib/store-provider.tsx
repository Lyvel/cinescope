"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "../lib/store";

/**
 * A component that provides a Redux store to its children using the React Redux `Provider` component.
 * @param {Object} props - The props object containing the children to be wrapped by the `Provider`.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the `Provider`.
 * @returns {JSX.Element} JSX representing the store provider component.
 */
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a ref to store the Redux store instance
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  // Render the Provider component with the Redux store and children components
  return <Provider store={storeRef.current}>{children}</Provider>;
}
