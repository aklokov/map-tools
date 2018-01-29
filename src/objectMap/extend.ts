import { nullObject } from "@vlr/object-tools";

export function extend<T>(src: T, extend?: T): T {
  return Object.assign(nullObject(), src, extend);
}
