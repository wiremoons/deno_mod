#!/usr/bin/env -S deno run --quiet --allow-read
/**
 * @file cli_version.ts
 * @brief Display version information for a Deno program.
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 * @source     https://github.com/wiremoons/cli_version.ts
 * @module     https://deno.land/x/deno_mod/mod.ts
 *
 * @date originally created: 24 Aug 2021
 * @date updated significantly: 31 Aug 2021
 *
 * @details Display version information for a Deno program. The output fields to display can be customised
 * using the `interface` named: `VersionOptions`.
 *
 * @note The program should be used as a module, but can be run also with Deno using the command:
 * @code deno run --quiet ---allow-read ./cli_version.ts
 */

//--------------------------------
// MODULE IMPORTS
//--------------------------------
import {
  basename,
  fromFileUrl,
} from "https://deno.land/std@0.106.0/path/mod.ts";
import { toIMF } from "https://deno.land/std@0.106.0/datetime/mod.ts";
import {
  isString,
  toTitleCaseFirst,
} from "https://raw.githubusercontent.com/wiremoons/deno_mod/0.5.0/mod.ts";

/** Options for the function `cliVersion()` */
export interface VersionOptions {
  version: string;
  copyrightName: string;
  licenseUrl: string;
  crYear: string;
}

//--------------------------------
// UTILITY FUNCTIONS
//--------------------------------

/**
 * Type Guard for VersionOptions object
 */
// deno-lint-ignore no-explicit-any
function isObject(arg: any): arg is VersionOptions {
  return arg !== undefined;
}

/** Obtain `filePath` modification date and time */
async function getFileModTime(filePath: string) {
  // check for URL path instead of OS path
  if (filePath.startsWith("file:")) {
    filePath = fromFileUrl(filePath);
  }
  try {
    const fileInfo = await Deno.lstat(filePath);
    if (fileInfo.isFile) {
      const result = fileInfo.mtime;
      return result ? toIMF(result) : "UNKNOWN";
    }
  } catch {
    return "UNKNOWN";
  }
}

//--------------------------------
// APPLICATION FUNCTIONS
//--------------------------------

/** Display version information for `Deno.mainModule` program.
 * Pass in the four (4) *VersionOptions* object parameters to modify the version text output:
 * @param version : string The version of the program the output is to represent. Example: '0.0.1'
 * @param copyrightName : string Copyright holder for the program. Example: 'Deno Dinosaur <deno@deno.land>'
 * @param licenseUrl : string Program web site where the license can be found. Example: 'https://github.com/<username_here>/'
 * @param crYear : string The year the copyright applies from. Example: '2021'
 */
export async function cliVersion(
  verData?: VersionOptions,
): Promise<string> {
  // create object verData - so defaults can be provided if required:
  if (!isObject(verData)) {
    verData = <VersionOptions> {};
  }

  if ((isObject(verData) && (!isString(verData.version)))) {
    verData.version = "0.0.1 [DEFAULT]";
  }

  if ((isObject(verData) && (!isString(verData.copyrightName)))) {
    verData.copyrightName = "Deno Dinosaur <deno@deno.land> [DEFAULT]";
  }

  if ((isObject(verData) && (!isString(verData.licenseUrl)))) {
    verData.licenseUrl = "https://github.com/<username_here>/ [DEFAULT]";
  }

  if ((isObject(verData) && (!isString(verData.crYear)))) {
    verData.crYear = "2021 [DEFAULT]";
  }

  return (`
Application '${basename(Deno.mainModule)}' is version '${verData?.version}'.
Last modified on: ${await getFileModTime(Deno.mainModule)}
Running Deno version '${Deno.version.deno}' on '${
    toTitleCaseFirst(Deno.build.os)
  } [${Deno.build.arch} with ${navigator.hardwareConcurrency} CPU cores]'.
Copyright (c) ${verData?.crYear} ${verData?.copyrightName}.

For licenses and further information visit:
 - ${verData?.licenseUrl}
 - https://deno.land/
 `);
}

//--------------------------------
// MAIN
//--------------------------------
if (import.meta.main) {
  const versionData = await cliVersion();
  console.log("\nDEFAULT OUTPUT:");
  console.log(versionData);

  console.log("CUSTOMISED OUTPUT:");
  // define the output options to use:
  const versionOptions = {
    version: "1.0.6",
    copyrightName: "John Doe <example.com>",
    licenseUrl: "https://github.com/example/my_application/",
    crYear: "2022",
  };
  // call the `cliVersion` module function using the options configured as `versionOptions`
  const versionData2 = await cliVersion(versionOptions);
  console.log(versionData2);
}
