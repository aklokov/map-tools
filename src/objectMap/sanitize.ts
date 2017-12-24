import { create } from './create';
import { forIn, isObject, nullObject } from 'object-tools-ts';

export function sanitize(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(item => sanitize(item));
  }

  if (isObject(obj)) {
    const result = nullObject();
    forIn(obj, (value, field) => result[field] = sanitize(value));
    return result;
  }

  return obj;
}
