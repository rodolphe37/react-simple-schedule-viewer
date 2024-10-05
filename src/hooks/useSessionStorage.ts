export type TUseSessionStorage<T> = [
  () => T | undefined,
  (value: T) => void,
  () => void
];

/**
 * @description A hook that provides functions to interact with a session storage item.
 * @param key - The key of the session storage item.
 * @returns An array of functions to get, set and remove the session storage item.
 */
export function useSessionStorage<T>(key: string): TUseSessionStorage<T> {
  /**
   * @description Sets the session storage item with the provided value.
   * @param value - The value to set the session storage item to.
   * @returns {void}
   */
  const setSessionStorageItem = (value: T): void => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  /**
   * @description Gets the session storage item.
   * @returns {T | undefined} The session storage item or undefined if it does not exist.
   */
  const getSessionStorageItem = (): T | undefined => {
    try {
      const item = sessionStorage.getItem(key);
      if (item === null) return undefined;
      return JSON.parse(item);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
  /**
   * @description Removes the session storage item.
   * @returns {void}
   */
  const removeSessionStorageItem = (): void => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };
  return [
    getSessionStorageItem,
    setSessionStorageItem,
    removeSessionStorageItem,
  ];
}
