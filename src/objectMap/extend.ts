import { create } from './create';
export function extend<T>(src: T, extend?: T): T {
  return Object.assign(create(), src, extend);
}
