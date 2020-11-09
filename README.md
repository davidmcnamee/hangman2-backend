


## Each room has:
completeWord: string;
users: User[];
currentLetters: string;
numGuesses: int;
isDone: boolean;


## When someone guesses a letter:
1. Check if that letter is valid (has it already been guessed?)
2. If it's valid and it's wrong, increment numGuesses
3. If it's valid and it's occurs at least once, update currentLetters
4. If someone wins, update isDone




