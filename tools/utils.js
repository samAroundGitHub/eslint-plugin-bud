exports.transferNameToCamel = (name, splitSymbol = '-') => {
  return name.split(splitSymbol).reduce((t, c) => {
    if (t === '') return c;
    return `${t}${c.slice(0, 1).toUpperCase()}${c.slice(1)}`;
  }, '');
};

exports.getActualValue = (value) => {
  let val;
  try {
    val = eval(value);
  } catch (err) {
    val = value;
  }
  return val;
};
