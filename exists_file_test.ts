/**
 * Test script for module: exists_File.ts
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
import { existsFile } from "./exists_file.ts";

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
      "ERROR: deno requires '--allow-read' permission to run tests that check for a files existence.",
    );
    Deno.exit(1);
  }
}

//--------------------------------
// MODULE IMPORT TEST FUNCTIONS
//--------------------------------

// Check all the modules needed for the tests are imported

Deno.test("module is imported: 'assertStringIncludes()'", () => {
  if (!assertStringIncludes) {
    throw Error("missing module");
  }
});

Deno.test("module is imported: 'assertEquals()'", () => {
  if (!assertEquals) {
    throw Error("missing module");
  }
});

Deno.test("module is imported: 'existsFile()'", () => {
  if (!existsFile) {
    throw Error("missing module");
  }
});

//--------------------------------
// APPLICATION TEST FUNCTIONS
//--------------------------------

Deno.test("'existsFile()' module tests : exist file (true)", async () => {
  const actual1 = true;
  const test1: boolean = await existsFile("./exists_file.ts");
  assertEquals(test1, actual1);
});

Deno.test("'existsFile()' module tests : missing file (false)", async () => {
  const actual2 = false;
  const test2: boolean = await existsFile("./non-existant_file.ts");
  assertEquals(test2, actual2);
});

Deno.test("'existsFile()' module tests : zero length path (false)", async () => {
  const actual2 = false;
  const test2: boolean = await existsFile("");
  assertEquals(test2, actual2);
});

Deno.test("'existsFile()' module tests : empty path (false)", async () => {
  const actual2 = false;
  const test2: boolean = await existsFile(" ");
  assertEquals(test2, actual2);
});

Deno.test("'existsFile()' module tests : missing file (false)", async () => {
  const actual3 = false;
  const test3: boolean = await existsFile("./non-existant_file.ts");
  assertEquals(test3, actual3);
});

Deno.test("'existsFile()' module tests : directory not file (false)", async () => {
  const actual4 = false;
  const test4: boolean = await existsFile("./examples");
  assertEquals(test4, actual4);
});
