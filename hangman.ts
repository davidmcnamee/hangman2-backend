import { Room } from "./types";

// returns true if the game is won
function checkIfWin(room: Room) {
  return true;
}

// checks that the current letter hasn't been guessed yet and 
// that it's a part of the english alphabet
function checkIfValid(letter: string, room: Room) {
  return true;
}

// checks if the letter occurs once in completeWord
function checkIfOccursOnce(letter: string, room: Room) {
  return true;
}

// returns a new room with the room.currentLetters updated
function updateWord(letter: string, room: Room): Room {
  
  return room;
}

export {
  checkIfWin,
  checkIfValid,
  checkIfOccursOnce,
  updateWord,
};
