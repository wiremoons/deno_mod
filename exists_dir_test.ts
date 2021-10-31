/**
 * Test script for module: exists_dir.ts
 * @note TEST script that can be run with Deno using the command:
 * @code deno test --allow-read
 */

//--------------------------------
// MODULE IMPORTS
//--------------------------------
import {
  assertEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { existsDir } from "./exists_dir.ts";

//--------------------------------
// PERMISSIONS CHECK
//--------------------------------
// request '--allow-read' permission if not granted with: deno test --allow-read
const permCheck = await Deno.permissions.query({ name: "read" });
if (permCheck.state === "prompt") {
  console.log(
    "\nTo avoid the permission prompt, run tests with:  deno test --allow-read\n",
  );
  const status = await Deno.permissions.request({ name: "read" });
  if (status.state !== "granted") {
    console.error(
      "ERROR: deno requires '--allow-read' permission to run tests that check for a directories existence.",
    );
    Deno.exit(1);
  }
}

//--------------------------------
// MODULE IMPORT TEST FUNCTIONS
//--------------------------------

// Check all the modules needed for the tests are imported

Deno.test("'existsDir()' module is imported: 'assertStringIncludes()'", () => {
  if (!assertStringIncludes) {
    throw Error("missing module");
  }
});

Deno.test("existsDir()' module is imported: 'assertEquals()'", () => {
  if (!assertEquals) {
    throw Error("missing module");
  }
});

Deno.test("existsDir()' module is imported: 'existsDir()'", () => {
  if (!existsDir) {
    throw Error("missing module");
  }
});

//--------------------------------
// APPLICATION TEST FUNCTIONS
//--------------------------------

Deno.test("'existsDir()' module tests : exists directory (true)", async () => {
  const actual1 = true;
  const test1: boolean = await existsDir("./examples");
  assertEquals(test1, actual1);
});

Deno.test("'existsDir()' module tests : missing directory (false)", async () => {
  const actual2 = false;
  const test2: boolean = await existsDir("./non-existant");
  assertEquals(test2, actual2);
});

Deno.test("'existsDir()' module tests : file not directory (false)", async () => {
  const actual3 = false;
  const test3: boolean = await existsDir("./exists_dir.ts");
  assertEquals(test3, actual3);
});

Deno.test("'existsDir()' module tests : zero length path (false)", async () => {
  const actual2 = false;
  const test2: boolean = await existsDir("");
  assertEquals(test2, actual2);
});

Deno.test("'existsDir()' module tests : empty path (false)", async () => {
  const actual2 = false;
  const test2: boolean = await existsDir(" ");
  assertEquals(test2, actual2);
});
