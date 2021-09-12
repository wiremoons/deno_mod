/**
 * @file type_guard.ts
 * @source https://github.com/wiremoons/deno_mod/type_guard.ts
 * @source https://deno.land/x/deno_mod/type_guard.ts
 * @brief Provide type guards for narrowing with TypeScript code.
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 *
 * @date originally created: 04 Sep 2021
 *
 * @details Checks for a specific TypeScript type (string, number, etc) and affirms that type if its correct.
 * @requires `none`
 */

/** Type Guard for number */
// deno-lint-ignore no-explicit-any
export function isNumber(arg: any): arg is number {
  return arg !== undefined && typeof arg === "number";
}

/** Type guard for string */
// deno-lint-ignore no-explicit-any
export function isString(arg: any): arg is string {
  return arg !== undefined && typeof arg === "string";
}
