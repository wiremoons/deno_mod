// deno run --allow-read cli_version.ts
//
import { cliVersion } from "https://raw.githubusercontent.com/wiremoons/deno_mod/0.4.0/mod.ts";

console.log("Example outputs for: 'cli_version.ts' module.\n");

///////////////////////////////////////////////////////////////////////////////////////////////////
// first call - just uses the defaults specified in the module

console.log("Program 'DEFAULT' version information is:");
const versionData = await cliVersion();
console.log(`${versionData}\nDone.\n`);

///////////////////////////////////////////////////////////////////////////////////////////////////
// second call - sets the individual version option fields as part of the function call.
// If any are not specified, the default values will be used instead.

console.log("\nProgram 'CUSTOMISED' version information is:");
const versionData2 = await cliVersion({
  version: "1.0.5",
  copyrightName: "Simon Rowe <wiremoons.com>",
  licenseUrl: "https://github.com/wiremoons/cli_version/",
  crYear: "2021",
});
console.log(`${versionData2}\nDone.\n`);

///////////////////////////////////////////////////////////////////////////////////////////////////
// third call - uses a predefined 'versionOptions' object that is passed to the function call
// If any are not specified, the default values will be used instead.

const versionOptions = {
  version: "1.0.6",
  copyrightName: "Mr S. Rowe <wiremoons.com>",
  licenseUrl: "https://github.com/wiremoons/cli_version/",
  crYear: "2022",
};

console.log(
  "Program 'CUSTOMISE with all pre set object fields' version information is:",
);
const versionData3 = await cliVersion(versionOptions);
console.log(`${versionData3}\nDone.\n`);

///////////////////////////////////////////////////////////////////////////////////////////////////
// forth call - uses a predefined 'versionOptions' object that is passed to the function call
// Two values are not specified, so the default values will be used instead.
//
// NB : below does not work fully as the undefined options are not using the defaults - but instead
//      get set to 'undefined'

// const versionOptions2 = {
//   copyrightName: "Mr S. Rowe <wiremoons.com>",
//   licenseUrl: "https://github.com/wiremoons/cli_version/",
// };

// console.log(
//   "Program 'CUSTOMISE with limited pre set object fields' version information is:",
// );
// const versionData4 = await cliVersion(versionOptions2);
// console.log(`${versionData4}\nDone.\n`);

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // fifth call - sets the individual version option fields as part of the function call.
// // If any are not specified, the default values will be used instead.
// //
// // NB : below does not work fully as the undefined options are not using the defaults - but instead
// //      get set to 'undefined'

// console.log(
//   "\nProgram 'CUSTOMISED with missing fields' version information is:",
// );
// const versionData5 = await cliVersion({
//   version: "2.0.5",
//   licenseUrl: "https://github.com/wiremoons/cli_version/",
// });
// console.log(`${versionData4}\nDone.\n`);
