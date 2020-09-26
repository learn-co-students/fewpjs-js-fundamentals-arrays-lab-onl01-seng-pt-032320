// NOTE: "Append" means "add to the end" and "prepend" means "add to the beginning."

const append = ["Milo", "Otis", "Garfield"];
// Append the pet "Odie" to the end of append.
append.push('Odie');

const prepend = ["Milo", "Otis", "Garfield"]
// Prepend the pet "Odie" to the beginning of prepend.
prepend.unshift('Odie');


const removeLast = ["Milo", "Otis", "Garfield"];
// Remove the last pet from removeLast.
removeLast.pop();

const removeFirst = ["Milo", "Otis", "Garfield"];
// Remove the first pet from removeFirst.
removeFirst.shift();

