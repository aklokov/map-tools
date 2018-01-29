import { sanitize } from "./sanitize";

export function parse<T>(input: string): T {
  return sanitize(JSON.parse(input));
}
