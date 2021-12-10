exports.getElementValue = function (element) {
  let val = document.querySelector(element).value;
  if (val) return val;
  return "";
};

val = function (v) {
  if (v) return v;
  else return "";
};
