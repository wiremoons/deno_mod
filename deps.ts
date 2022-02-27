/**
 * @file deps.ts
 * @source https://github.com/wiremoons/deno_mod/deps.ts
 * @source https://deno.land/x/deno_mod/deps.ts
 * @brief This file contains the external dependencies that 'deno_mod' depends upon
 *
 * @link https://deno.land/x/deno_mod/mod.ts
 * @link https://raw.githubusercontent.com/wiremoons/deno_mod/mod.ts
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 *
 * @date originally created: 28 Nov 2021
 *
 * @details manage each module dependency centrally for the 'mod_dep' project.
 */

/** Deno Standard Library ('std module') dependencies */
export {
    assert,
    assertEquals,
    assertStringIncludes,
    assertThrows,
} from "https://deno.land/std@0.127.0/testing/asserts.ts";


export {
    basename,
    fromFileUrl,
} from "https://deno.land/std@0.127.0/path/mod.ts";

export { toIMF } from "https://deno.land/std@0.127.0/datetime/mod.ts";

/** Third Party dependencies */
export {
    isNumber,
    isString,
    existsDir,
    existsFile,
    getFileModTime,
    toTitleCaseFirst,
    cliVersion,
} from "https://deno.land/x/deno_mod@0.8.1/mod.ts";