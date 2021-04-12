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
  if (domains.length <= 0) return {};
  const arr = [...domains];
  const res = {};
  arr.push(domains[0].split('.')[domains[0].split('.').length - 1]);
  const tarr = arr.sort((a, b) => a.length - b.length)
    .map((el) => el.split('.').reverse().join('.'));

  tarr.forEach((el, idx) => {
    res[`.${el}`] = idx > 0 ? tarr.filter((e) => e.startsWith(el)).length : tarr.filter((e) => e.startsWith(el)).length - 1;
  });
  return res;
}

module.exports = getDNSStats;
