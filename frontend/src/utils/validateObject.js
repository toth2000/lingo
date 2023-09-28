export const validateObject = (object, keys = Object.keys(object)) => {
  const valid = keys.every((item) => (object[item] ? true : false));
  return valid;
};
