
exports.getElementValue = function (element) {
    console.log(element);
    let val = document.querySelector(element).value;
    console.log(val);
    if (val) return val;
    return "";
  };

  val = function (raw) {
    if (raw) return raw;
    else return "";
  };
  
  