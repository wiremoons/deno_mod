# deno_mod

A collection of modules written in TypeScript for common Deno programming tasks.

## Why Create More Deno Modules?

The use of [Deno Standard Library](https://deno.land/std) or [Deno API Runtime](https://doc.deno.land/builtin/stable)
is preferable - but I was unable to find specific functions I needed. So I created the following as `deno_mod` modules
instead. These functions are frequently used in many of my programs. To ensure I only write them once, and maintain them
in one place as modules, made sense for many reasons.

You are welcome to use them as well if you wish.

## Import Usage

### Versions tags

Link to the `mod.ts` file in this GitHub repo using the module tag for the version that is to be used. In the example
below the version tag `0.2.0` is specified.

The recommended approach is to choose a version so you are not impacted by any furture changes unexpectedly. The example
below explicitly states the **version tag** `0.2.0` instead:

```javascript
https://raw.githubusercontent.com/wiremoons/deno_mod/0.2.0/mod.ts
```

The import url for the **current version** is always:

```javascript
https://raw.githubusercontent.com/wiremoons/deno_mod/main/mod.ts
```

### Import Specific Modules

Import the specific modules to be used. For example, to only use the modules: `existsFile`, `existsDir`, and `isString`
the follow import statement would be used:

```javascript
import {existsFile, existsDir, isString} from "https://raw.githubusercontent.com/wiremoons/deno_mod/0.2.0/mod.ts";
```

Any of the modules can then be accessed using their name as follows:

```javascript
if (existsFile("/some/file/path.txt")) {
    console.log("File exists!");
} else {
    console.error("File not found.");
}
```

### Import All Modules

Alternatively it is possible to import all the available modules:

```javascript
import * as my_deno_mod from "https://raw.githubusercontent.com/wiremoons/deno_mod/0.2.0/mod.ts";
```

Any module can then be accessed using the name you stated (ie `my_deno_mod` in the example above) as follows:

```javascript
if (my_deno_mod.existsFile("/some/file/path.txt")) {
    console.log("File exists!");
} else {
    console.error("File not found.");
}
```

## Module Overview

The current modules inclided, and a brief description of their purpose is below. For more extensive information on each
module, see the source code itself, as that includes additional comments:

- '`exists_dir.ts`' : contains the function `existDir` that checks if the provided file system path is for a directory
  that exists. The function returns a `boolean` to confirm if the directory provided exists.
- '`exists_file.ts`' : contains the function `existFile` that checks if the provided file system path is for a file that
  exists. The function returns a `boolean` to confirm if the filename provided exists.
- `type_guard.ts` contains a number of **type guard** function including: `isNumber` and `isNumber`. These checks for a
  specific TypeScript type (string, number, etc) and affirms that type if its correct.

## License

The code provided in the modules and their useage is covered by the **MIT License**. See
http://opensource.org/licenses/mit. A copy of the applications license is here
[deno_mod MIT License](https://github.com/wiremoons/deno_mod/blob/main/LICENSE.txt).
