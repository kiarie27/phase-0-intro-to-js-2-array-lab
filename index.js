// Write your solution here!
// Initialize the cats array with the required values
var cats = ["Milo", "Otis", "Garfield"];

// Destructive functions that modify the original array

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

// Non-destructive functions that return a new array without modifying the original

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}