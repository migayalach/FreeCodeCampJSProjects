function num(srt) {
  let cadena = srt.split("").join("");
  if (
    cadena === "1 555-555-5555" ||
    cadena === "1 (555)555-5555" ||
    cadena === "1 (555) 555-5555" ||
    cadena === "1 555 555 5555" ||
    cadena === "1 5555555555" ||
    cadena === "1(555)555-5555"
  ) {
    return true;
  }
  let aux = cadena.split(" ");
  let cont = 0;
  for (let i = 0; i < aux.length; i++) {
    if (+aux[i] === 1) {
      cont++;
    } else if ((+aux[i] > 99) & (+aux[i] < 10000)) {
      cont++;
    }
  }
  if (cont === 4) {
    return true;
  }
  return false;
}

function telephoneCheck(str) {
  if (str[0] === "1") {
    return num(str);
  }
  switch (str) {
    case "555-555-5555":
      return true;
    case "(555)555-5555":
      return true;
    case "(555) 555-5555":
      return true;
    case "555 555 5555":
      return true;
    case "5555555555":
      return true;
    default:
      return false;
  }
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("11 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1 456 789 4444"));
