export const validateObject = (object, keys = Object.keys(object)) => {
  try {
    const valid = keys.every((item) => (object[item] ? true : false));
    return valid;
  } catch (error) {
    console.error(error);
    return false;
  }
};
