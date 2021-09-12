/**
 * @file exist_dir.ts
 * @source https://github.com/wiremoons/deno_mod/exists_dir.ts
 * @source https://deno.land/x/deno_mod/exists_dir.ts
 * @brief Check if the provided path is for a directory.
 *
 * @author     simon rowe <simon@wiremoons.com>
 * @license    open-source released under "MIT License"
 *
 * @date originally created: 04 Sep 2021
 *
 * @details Checks if a directory at the provided path `dirPath` exists on the file system.
 * @requires `--allow-read`
 */

/** Checks if `dirPath` is a valid directory at the given path */
export async function existsDir(dirPath: string): Promise<boolean> {
  if (dirPath.length > 0) {
    try {
      const fileInfo = await Deno.stat(dirPath);
      return fileInfo.isDirectory;
    } catch (err) {
      console.error(
        `\nError occurred when 'existsDir()' checked for: '${dirPath}'\nERROR MESSAGE: '${err}'.\n`,
      );
      return false;
    }
  } else {
    console.error(
      `\nERROR: invalid directory name provided as: '${dirPath}'.\n`,
    );
    return false;
  }
}
