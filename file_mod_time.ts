/**
 * @file file_mod_time.ts
 * @source https://github.com/wiremoons/deno_mod/file_mod_time.ts
 * @source https://deno.land/x/deno_mod/file_mod_time.ts
 * @brief Returns a string containing the date and time the provided file was last modified.
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 *
 * @date originally created: 27 Feb 2022
 *
 * @details Returns an IMF date RFC: https://tools.ietf.org/html/rfc7231#section-7.1.1.1 string.
 * IMF is the time format to use when generating times in HTTP headers. The string containing the
 * IMF date and time is foe when the file was last modified, or `undefined` on failure.
 * @requires `--allow-read`
 */

import {fromFileUrl, toIMF} from "./deps.ts";

/** Obtain `filePath` modification date and time */
export async function getFileModTime(filePath: string): Promise<string | undefined> {
    if (filePath.length < 1) {
        return Promise.reject(new Error("Zero length file name provided to function 'getFileModTime'"));
    }
    // check for URL path instead of OS path - convert to an OS path
    if (filePath.startsWith("file:")) {
        filePath = fromFileUrl(filePath);
    }
    // get file stat and extract modified time value
    try {
        const fileInfo = await Deno.lstat(filePath);
        if (fileInfo.isFile) {
            const result = fileInfo.mtime;
            return result ? toIMF(result) : undefined;
        }
    } catch {
        return Promise.reject(new Error("Unable to 'Deno.lstat' file in function 'getFileModTime'"));
    }
}