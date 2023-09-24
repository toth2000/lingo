const validateKeys = (keys, data) => {
  const result = keys.every((item) =>
    data[item] !== undefined ? true : false
  );
  return result;
};

module.exports = { validateKeys };
