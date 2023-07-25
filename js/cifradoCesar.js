function palabra (arr) {
  return arr[13];
};

function array(arr, inicio){
  const aux = [];
  for(let i = 0; i < inicio; i++){
    aux.push(arr.shift());
  }
  return arr = [...arr, ...aux]
}

function rot13(str) {
  const arr = ["A", "B" ,"C", "D" ,"E", "F", "G", "H", "I", "J", "K", "L", "M" ,"N" ,"O" ,"P", "Q" ,"R", "S", "T" ,"U" ,"V" ,"W", "X" ,"Y", "Z"]
  const regex = /[\s\p{P}]/gu;
  let cadena = "";
  for(let i = 0; i<str.length; i++){
    let aux = [...arr];
    if(!str[i].match(regex)){
      let inicio = aux.indexOf(str[i]);
      let res = array(aux, inicio);
      cadena += palabra(res);
    }else{
      cadena += str[i];
    }
  }
  return cadena;
}


console.log(rot13("SERR PBQR PNZC")); 
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
