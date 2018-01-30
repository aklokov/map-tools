import { nullObject } from "@vlr/object-tools/build/src";

export function create<T>(): T {
  return nullObject<T>();
}
