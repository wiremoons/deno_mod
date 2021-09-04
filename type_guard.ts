/**
 * @file type_guard.ts
 * @module https://github.com/wiremoons/deno_mod/type_guard.ts
 * @brief Provide type guards for narrowing with TyepScript code.
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 *
 * @date originally created: 04 Sep 2021
 *
 * @details Checks for for a specific TypeScript type (string, number, etc) and affirms that type if its correct.
 * @requires `none`
 */

/** Type Guard for number */
// deno-lint-ignore no-explicit-any
export function _isNumber(arg: any): arg is number {
    return arg !== undefined;
}

/** Type guard for string */
// deno-lint-ignore no-explicit-any
export function isString(arg: any): arg is string {
    return arg !== undefined;
}