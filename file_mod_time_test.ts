/**
 * Test script for module: file_mod_time.ts
 * @note TEST script that can be run with Deno using the command:
 * @code deno test --allow-read
 */

//--------------------------------
// MODULE IMPORTS
//--------------------------------
import {
  assertEquals,
  assertStringIncludes,
  getFileModTime,
} from "./deps.ts";

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

Deno.test("module is imported: 'getFileModTime()'", () => {
  if (!getFileModTime) {
    throw Error("missing module");
  }
});

//--------------------------------
// APPLICATION TEST FUNCTIONS
//--------------------------------

const testModTime = await getFileModTime("./file_mod_time.ts");

Deno.test("'getFileModTime()' module tests : exist file (true)", async () => {
  const actual1 = testModTime;
  const test1: string = await getFileModTime("./file_mod_time.ts");
  assertEquals(test1, actual1);
});

Deno.test("'getFileModTime()' module tests : missing file (false)", async () => {
  const actual2 = undefined;
  const test2: string | undefined = await getFileModTime("./non-existant_file.ts");
  assertEquals(test2, actual2);
});

Deno.test("'getFileModTime()' module tests : zero length path (false)", async () => {
  const actual3 = undefined;
  const test3: string | undefined = await getFileModTime("");
  assertEquals(test3, actual3);
});

Deno.test("'getFileModTime()' module tests : empty path (false)", async () => {
  const actual4 = undefined;
  const test4: string | undefined = await getFileModTime(" ");
  assertEquals(test4, actual4);
});

Deno.test("'getFileModTime()' module tests : file: path (true)", async () => {
  const actual5 = testModTime;
  const test5: string = await getFileModTime("file:./file_mod_time.ts");
  assertEquals(test5, actual5);
});

Deno.test("'getFileModTime()' module tests : directory not file (false)", async () => {
  const actual6 = undefined;
  const test6: string | undefined = await getFileModTime("./examples");
  assertEquals(test6, actual6);
});
