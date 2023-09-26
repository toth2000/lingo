/**
 *
 * @param {expires} cookie
 * @returns true -> if expired, false -> if valid
 */
const sessionExpired = (cookie) => {
  const expireTime = new Date(cookie.expires).getTime();
  const currentTime = new Date().getTime();

  return currentTime > expireTime;
};

module.exports = { sessionExpired };
