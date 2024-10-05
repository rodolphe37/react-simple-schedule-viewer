export type TUseLocalStorage<T> = [
  () => T | undefined,
  (value: T) => void,
  () => void
];

/**
 * @description A hook that provides functions to interact with a local storage item.
 * @param key - The key of the local storage item.
 * @returns An array of functions to get, set and remove the local storage item.
 */
export function useLocalStorage<T>(key: string): TUseLocalStorage<T> {
  /**
   * @description Sets the local storage item with the provided value.
   * @param value - The value to set the local storage item to.
   * @returns {void}
   */
  const setLocalStorageItem = (value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  /**
   * @description Gets the local storage item.
   * @returns {T | undefined} The local storage item or undefined if it does not exist.
   */
  const getLocalStorageItem = (): T | undefined => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return undefined;
      return JSON.parse(item);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
  /**
   * @description Removes the local storage item.
   * @returns {void}
   */
  const removeLocalStorageItem = (): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };
  return [getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem];
}
