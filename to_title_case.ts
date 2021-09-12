/**
 * @file to_title_case.ts
 * @source https://github.com/wiremoons/deno_mod/to_title_case.ts
 * @source https://deno.land/x/deno_mod/to_title_case.ts
 * @brief Capitalise the first character of a string.
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 *
 * @date originally created: 24 Aug 2021
 *
 * @details Changes a provided sting to capitalise the first character.
 * @requires `none`
 */

// @todo: NEW FUNCTION BELOW: look for word boundary and capitalise each word in the string

// /** Capitalise all the first letters character of words contained in a string */
// export function toTitleCaseAll(str: string): string {
//     if (str === undefined || str.length === 0) return str;
//     return str = str.charAt(0).toUpperCase() + str.substring(1);
// }

/** Capitalise the first character of a string */
export function toTitleCaseFirst(str: string): string {
  if (str === undefined || str.length === 0) return str;
  return str = str.charAt(0).toUpperCase() + str.substring(1);
}
