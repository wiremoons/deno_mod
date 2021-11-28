/**
 * @file mod.ts
 * @source https://github.com/wiremoons/deno_mod/mod.ts
 * @source https://deno.land/x/deno_mod/mod.ts
 * @brief A collection of modules written in TypeScript for common Deno programming tasks.
 *
 * @link https://deno.land/x/deno_mod/mod.ts
 * @link https://raw.githubusercontent.com/wiremoons/deno_mod/mod.ts
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 *
 * @date originally created: 04 Sep 2021
 *
 * @details See each included module listed below for specific purpose and usage details.
 */
import {toTitleCaseFirst} from "./to_title_case.ts";

export { cliVersion } from "./cli_version.ts";
export { existsDir } from "./exists_dir.ts";
export { existsFile } from "./exists_file.ts";
export { toTitleCaseFirst } from "./to_title_case.ts";
export { isNumber, isString } from "./type_guard.ts";
