/**
 * @file exist_file.ts
 * @source https://github.com/wiremoons/deno_mod/exists_file.ts
 * @source https://deno.land/x/deno_mod/exists_file.ts
 * @brief Check if the provided path is for a file.
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 *
 * @date originally created: 04 Sep 2021
 *
 * @details Checks if a file at the provided path `filePath` exists on the file system.
 * @requires `--allow-read`
 */

import {fromFileUrl} from "./deps.ts";

/** Checks if `filePath` is a valid path to a file */
export async function existsFile(filePath: string): Promise<boolean> {
  if (filePath.length < 1) {
    console.error(
      `\nERROR: zero length file name provided: '${filePath}'.\n`,
    );
    return false;
  }

  // check for URL path instead of OS path
  if (filePath.startsWith("file:")) {
    filePath = fromFileUrl(filePath);
  }

  try {
    const fileInfo = await Deno.stat(filePath);
    return fileInfo.isFile;
  } catch (err) {
    console.error(
      `\nError occurred when 'existsFile()' checked for: '${filePath}'\nERROR MESSAGE: '${err}'.\n`,
    );
    return false;
  }
}
