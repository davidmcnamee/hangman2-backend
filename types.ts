

export type User = {
  id: string;
  name: string;
};

export type Room = {
  completeWord: string;
  users: User[];
  currentLetters: string;
  numGuesses: number;
  isDone: boolean;
};
