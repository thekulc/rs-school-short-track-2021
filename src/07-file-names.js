/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} tmpNames
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  const nList = {};
  const tmpNames = names;
  for (let i = 0; i < tmpNames.length; i++) {
    if (tmpNames.slice(0, i + 1).filter((el) => el === tmpNames[i]).length > 1) {
      if (!nList[tmpNames[i]]) nList[tmpNames[i]] = 0;
      nList[tmpNames[i]] += 1;
      tmpNames[i] = `${tmpNames[i]}(${nList[tmpNames[i]]})`;
    }
    res.push(tmpNames[i]);
  }
  return res;
}

module.exports = renameFiles;
