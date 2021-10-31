/**
 * Test script for module: type_guard.ts
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
import { isNumber, isString } from "./type_guard.ts";

//--------------------------------
// MODULE IMPORT TEST FUNCTIONS
//--------------------------------

// Check all the modules needed for the tests are imported

Deno.test("'type_guard' module is imported: 'assertStringIncludes()'", () => {
  if (!assertStringIncludes) {
    throw Error("missing module");
  }
});

Deno.test("'type_guard' module is imported: 'assertEquals()'", () => {
  if (!assertEquals) {
    throw Error("missing module");
  }
});

Deno.test("'type_guard' module is imported: 'isNumber()'", () => {
  if (!isNumber) {
    throw Error("missing module");
  }
});

Deno.test("'type_guard' module is imported: 'isString()'", () => {
  if (!isString) {
    throw Error("missing module");
  }
});

//--------------------------------
// APPLICATION TEST FUNCTIONS
//--------------------------------

// Tests for 'isString()' below:

Deno.test("'type_guard' module tests : check is string (text)", () => {
  const actual1 = true;
  const test1 = isString("This is a test string.");
  assertEquals(test1, actual1);
});

Deno.test("'type_guard' module tests : check is string (variable)", () => {
  const actual2 = true;
  const testData2 = "This is a test string.";
  const test2 = isString(testData2);
  assertEquals(test2, actual2);
});

Deno.test("'type_guard' module tests : check number is string (false)", () => {
  const actual3 = false;
  const testData3 = 33;
  const test3 = isString(testData3);
  assertEquals(test3, actual3);
});

Deno.test("'type_guard' module tests : check boolean is string (false)", () => {
  const actual4 = false;
  const testData4 = true;
  const test4 = isString(testData4);
  assertEquals(test4, actual4);
});

Deno.test("'type_guard' module tests : check object is string (false)", () => {
  const actual5 = false;
  const testData5 = { "test": 123 };
  const test5 = isString(testData5);
  assertEquals(test5, actual5);
});

Deno.test("'type_guard' module tests : check undefined is string (false)", () => {
  const actual6 = false;
  const testData6 = undefined;
  const test6 = isString(testData6);
  assertEquals(test6, actual6);
});

// Tests for 'isNumber()' below:

Deno.test("'type_guard' module tests : check is Number (number)", () => {
  const actual1 = true;
  const test1 = isNumber(22);
  assertEquals(test1, actual1);
});

Deno.test("'type_guard' module tests : check is Number (variable)", () => {
  const actual2 = true;
  const testData2 = 22;
  const test2 = isNumber(testData2);
  assertEquals(test2, actual2);
});

Deno.test("'type_guard' module tests : check string is Number (false)", () => {
  const actual3 = false;
  const testData3 = "This is a string.";
  const test3 = isNumber(testData3);
  assertEquals(test3, actual3);
});

Deno.test("'type_guard' module tests : check boolean is Number (false)", () => {
  const actual4 = false;
  const testData4 = true;
  const test4 = isNumber(testData4);
  assertEquals(test4, actual4);
});

Deno.test("'type_guard' module tests : check object is Number (false)", () => {
  const actual5 = false;
  const testData5 = { "test": 123 };
  const test5 = isNumber(testData5);
  assertEquals(test5, actual5);
});

Deno.test("'type_guard' module tests : check undefined is Number (false)", () => {
  const actual6 = false;
  const testData6 = undefined;
  const test6 = isString(testData6);
  assertEquals(test6, actual6);
});
