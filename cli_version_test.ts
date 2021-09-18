#!/usr/bin/env -S deno test --quiet --allow-read
/**
 * @file cli_version_test.ts
 * @brief TEST for module to display version information for a Deno program.
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 * @source     https://github.com/wiremoons/deno_mod/cli_version.ts
 * @source     https://deno.land/x/deno_mod/cli_version.ts
 *
 * @date originally created: 24 Aug 2021
 * @date updated significantly: 05 Sep 2021
 *
 * @details TEST script for the module to display version information for a Deno program.
 * The output fields to display can be customised using the `interface` named: `VersionOptions`.
 *
 * @note TEST script that can be run with Deno using the command:
 * @code deno test --allow-read
 */

//--------------------------------
// MODULE IMPORTS
//--------------------------------

import {
  assertEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { toIMF } from "https://deno.land/std@0.106.0/datetime/mod.ts";
import { fromFileUrl } from "https://deno.land/std@0.106.0/path/mod.ts";
import { cliVersion } from "./cli_version.ts";

//--------------------------------
// UTILITY FUNCTIONS
//--------------------------------

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
// MODULE IMPORT TEST FUNCTIONS
//--------------------------------

// Check all the modules needed for the tests are imported

Deno.test("'cliVersion()' module is imported: 'assertStringIncludes()'", () => {
  if (!assertStringIncludes) {
    throw Error("missing module");
  }
});

Deno.test("'cliVersion()' module is imported: 'assertEquals()'", () => {
  if (!assertEquals) {
    throw Error("missing module");
  }
});

Deno.test("'cliVersion()' module is imported: 'toIMF()'", () => {
  if (!toIMF) {
    throw Error("missing module");
  }
});

Deno.test("'cliVersion()' module is imported: 'fromFileUrl()'", () => {
  if (!fromFileUrl) {
    throw Error("missing module");
  }
});

Deno.test("'cliVersion()' module is imported: 'cliVersion()'", () => {
  if (!cliVersion) {
    throw Error("missing module");
  }
});

//--------------------------------
// APPLICATION TEST FUNCTIONS
//--------------------------------

// Obtain executing systems details for test output checks
const denoVer = Deno.version.deno;
const denoArch = Deno.build.arch;

// NOTE: the tests below will need to be updated if being run on different systems!

Deno.test("'cliVersion()' application test : default", async () => {
  const testModTime = await getFileModTime("./cli_version_test.ts");
  let actual = "";

  // assumes this test is running on a local macOS M1 system
  if (denoArch == "aarch64") {
    actual = `
Application 'cli_version_test.ts' is version '0.0.1 [DEFAULT]'.
Last modified on: ${testModTime}
Running Deno version '${denoVer}' on 'Darwin [aarch64 with 8 CPU cores]'.
Copyright (c) 2021 [DEFAULT] Deno Dinosaur <deno@deno.land> [DEFAULT].

For licenses and further information visit:
 - https://github.com/<username_here>/ [DEFAULT]
 - https://deno.land/
 `;
  }
  // assumes this test is running is GitHub Action default Ubuntu system
  if (denoArch == "x86_64") {
    actual = `
Application 'cli_version_test.ts' is version '0.0.1 [DEFAULT]'.
Last modified on: ${testModTime}
Running Deno version '${denoVer}' on 'Linux [x86_64 with 2 CPU cores]'.
Copyright (c) 2021 [DEFAULT] Deno Dinosaur <deno@deno.land> [DEFAULT].

For licenses and further information visit:
 - https://github.com/<username_here>/ [DEFAULT]
 - https://deno.land/
 `;
  }
  const verData: string = await cliVersion();
  assertEquals(verData, actual);
});
