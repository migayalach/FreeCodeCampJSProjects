function clear(str) {
  const regex = /[^a-zA-Z0-9]/g;
  let cadena = "";
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(regex)) {
      cadena += str[i].toLowerCase();
    }
  }
  return cadena;
}

function palindrome(str) {
  const cadena = clear(str);
  const newStr = cadena.split("").reverse().join("");
  if (cadena === newStr) {
    return true;
  }
  return false;
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /- :) 0-0"));
console.log(palindrome("five|_/|four"));

// recursos:
// https://www.techiedelight.com/es/reverse-string-javascript/
// https://www.freecodecamp.org/espanol/news/tres-formas-de-invertir-una-cadena-en-javascript/
