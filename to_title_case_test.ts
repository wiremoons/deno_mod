/**
 * Test script for module: to_title_case.ts
 * @note TEST script that can be run with Deno using the command:
 * @code deno test --allow-read
 */

//--------------------------------
// MODULE IMPORTS
//--------------------------------
import {
  assertEquals,
  assertStringIncludes,
  toTitleCaseFirst,
} from "./deps.ts";

//--------------------------------
// MODULE IMPORT TEST FUNCTIONS
//--------------------------------

// Check all the modules needed for the tests are imported

Deno.test("'to_title_case()' module is imported: 'assertStringIncludes()'", () => {
  if (!assertStringIncludes) {
    throw Error("missing module");
  }
});

Deno.test("'to_title_case()' module is imported: 'assertEquals()'", () => {
  if (!assertEquals) {
    throw Error("missing module");
  }
});

Deno.test("'to_title_case()' module is imported: 'toTitleCaseFirst()'", () => {
  if (!toTitleCaseFirst) {
    throw Error("missing module");
  }
});

//--------------------------------
// APPLICATION TEST FUNCTIONS
//--------------------------------

Deno.test("'to_title_case()' module tests : check sentence", async () => {
  const actual1 = "Match this sentence.";
  const test1: string = await toTitleCaseFirst("match this sentence.");
  assertEquals(test1, actual1);
});

Deno.test("'to_title_case()' module tests : one letter", async () => {
  const actual2 = "M";
  const test2: string = await toTitleCaseFirst("m");
  assertEquals(test2, actual2);
});

Deno.test("'to_title_case()' module tests : check sentence - already capitalised", async () => {
  const actual3 = "Match this sentence.";
  const test3: string = await toTitleCaseFirst("Match this sentence.");
  assertEquals(test3, actual3);
});

Deno.test("'to_title_case()' module tests : empty sentence", async () => {
  const actual4 = "";
  const test4: string = await toTitleCaseFirst("");
  assertEquals(test4, actual4);
});
