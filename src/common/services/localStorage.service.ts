import { LocalStorageKey } from '../interface/localStorage.types';

interface LocalStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

class LocalStore<T extends string> {
  private readonly localstorage: LocalStorage;

  constructor(getStorage = (): LocalStorage => window.localStorage) {
    this.localstorage = getStorage();
  }

  get(key: T): string | null {
    return this.localstorage.getItem(key);
  }

  set(key: T, value: string): void {
    this.localstorage.setItem(key, value);
  }

  delete(key: T): void {
    this.localstorage.removeItem(key);
  }

  clearAll(keys: T[]): void {
    keys.forEach(key => this.delete(key));
  }
}

export const localStorageService = new LocalStore<LocalStorageKey>();
