export type Creator<T> = (value?: string) => T;
export function create<T>(value: T): Creator<T> {
  return () => value;
}
