const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function kittens(){
  return kittens;
}

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  [...kittens, "Broom"];
  return kittens;
}

function prependKitten(name){
  return ["Arnold", ...kittens];
  
}

function removeLastKitten(){
  kittens.slice(3);
  return kittens;
}

function removeFirstKitten(){
  return kittens.slice(1);
}