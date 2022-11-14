[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)
[![deno_mod](https://github.com/wiremoons/deno_mod/actions/workflows/deno_mod-build-deno.yml/badge.svg)](https://github.com/wiremoons/deno_mod/actions/workflows/deno_mod-build-deno.yml)
[![tag](https://img.shields.io/github/v/release/wiremoons/deno_mod.svg)](https://github.com/wiremoons/deno_mod/releases)
[![](https://img.shields.io/badge/deno-v1.19.1-green.svg)](https://github.com/denoland/deno)

# deno_mod

A collection of modules written in TypeScript for common Deno programming tasks.

## Modules Overview

The current modules included, and a brief description of their purpose is below.
For more extensive information on each module, see the source code itself, as
that includes additional comments. The tests for each module also provide
examples of usage. Current modules included are:

- '`exists_dir.ts`' : contains the function `existDir()` that checks if the
  provided file system path is for a directory which exists. The function returns
  a `boolean` to confirm if the directory exists.
- '`exists_file.ts`' : contains the function `existFile()` that checks if the
  provided file system path for a file exists. The function returns a
  `boolean` to confirm if the filename provided exists. This can be used as a replacement
- for the depreciated Deno `exists() ` by using the recommended replacement approach of using 
- `Stat` on the file directly and then check for errors. This function performs that task for you.
- '`file_mod_time.ts`' : contains the function `getFileModTime()` that returns a
  string with the date and time the file was last modified, or `undefined` otherwise.
- `type_guard.ts` : contains a number of type guard functions including:
  `isNumber()` and `isString()`. These check for specific TypeScript types (ie
  string, number, etc) and affirm that the type is correct.
- `to_title_case.ts` : contains function `toTitleCaseFirst()` used to capitalise
  the first character of a string.
- `cli_version.ts` : contains function `cliVersion()` used to display basic
  version information for any command line application.

## Why Create More Deno Modules?

The use of [Deno Standard Library](https://deno.land/std) or
[Deno API Runtime](https://doc.deno.land/builtin/stable) is preferable - but I
was unable to find specific functions I needed. So I created the following as
`deno_mod` modules instead. These functions are frequently used in many of my
programs. To ensure I only write them once, and maintain them in one place as
modules, made sense for many reasons.

You are welcome to use them as well if you wish.

## Import Usage

Below describes two approaches to including the `deno_mod` into a project using
`import`.

### Versions tags

Link to the `mod.ts` file using the module tag for the version that is to be
used. In the example below the version tag `0.8.1` is specified.

The recommended approach is to choose a version so you are not impacted by any
future changes unexpectedly. The example below explicitly states the **version
tag** `0.8.1` which is the current version.

### Import from Deno.Land/X

`deno.land/x` is a hosting service for _Deno_ scripts that can be access and
searched from the Deno main web site under
[Deno Third Party Modules](https://deno.land/x) link. The `deno.land/x` site
caches releases of open source modules stored on GitHub and serves them at one
easy to remember domain. Below are the names to use to access `deno_mod` modules
from the `deno.land/x` site:

```typescript
https://deno.land/x/deno_mod@0.8.1/mod.ts
```

The import url for the **current version** is always:

```typescript
https://deno.land/x/deno_mod/mod.ts
```

### Import from GitHub

Alternatively, if you prefer to import the Deno modules directly from this
GitHub repo, the following `import` syntax can be used. JUst replace the link
syntax shown below with any examples shown for `deno.land/x/deno_mod/`:

```typescript
https://raw.githubusercontent.com/wiremoons/deno_mod/0.8.1/mod.ts
```

The `import` url for the **current version** is always:

```typescript
https://raw.githubusercontent.com/wiremoons/deno_mod/main/mod.ts
```

### Import Specific Modules

Import the specific modules to be used. For example, to only use the modules:
`existsFile`, `existsDir`, and `isString` the follow import statement would be
used:

```typescript
import {
  existsDir,
  existsFile,
  isString,
} from "https://deno.land/x/deno_mod@0.8.1/mod.ts";
```

Any of the modules can then be accessed using their name as follows:

```typescript
if (existsFile("/some/file/path.txt")) {
  console.log("File exists!");
} else {
  console.error("File not found.");
}
```

### Import All Modules

Alternatively it is possible to import all the available modules:

```typescript
import * as my_deno_mod from "https://deno.land/x/deno_mod@0.8.1/mod.ts";
```

Any module can then be accessed using the name you stated (ie `my_deno_mod` in
the example above) as follows:

```typescript
if (my_deno_mod.existsFile("/some/file/path.txt")) {
  console.log("File exists!");
} else {
  console.error("File not found.");
}
```

## Tests

All modules have associated tests. These can be run with the command:
`deno test --allow-read`

## License

The code provided in the modules and their useage is covered by the **MIT
License**. See http://opensource.org/licenses/mit. A copy of the applications
license is here
[deno_mod MIT License](https://github.com/wiremoons/deno_mod/blob/main/LICENSE.txt).
