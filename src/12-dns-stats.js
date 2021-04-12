/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [...domains];
  const res = {};
  arr.push(domains[0].split('.')[domains[0].split('.').length - 1]);
  arr.sort((a, b) => a.length - b.length);
  arr.forEach((el) => {
    res[el] = arr.filter((e) => e.startWidth(el)).length;
  });
  return res;
}

module.exports = getDNSStats;
