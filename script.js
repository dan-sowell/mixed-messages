//This program is modeled after the popular board game clue and gives a random result of the solution to the game essentially
const people = ["Mrs. White", "Mrs. Peacock", "Progessor Plum", "Colonel Mustard", "Miss Scarlet", "Reverend Green", "Mr Boddy"];
const weapons = ["knife", "revolver", "rope", "wrench", "candlestick", "lead pipe"];
const rooms = ["ball room", "billiard room", "conservatory", "dining room", "hall", "kitchen", "lounge", "library", "study"];

//This function is intended to be something that you can plug any array into and return a random element from said array
function randAlgorithm(array) {
    let randNum = Math.floor(Math.random() * array.length);
    return array[randNum];
}

let randPeople = randAlgorithm(people);
let randWeapons = randAlgorithm(weapons);
let randRooms = randAlgorithm(rooms);

console.log(`It was ${randPeople} in the ${randRooms} with the ${randWeapons}`);