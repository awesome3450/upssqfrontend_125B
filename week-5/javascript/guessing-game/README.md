# Initial design brief
Lets imagine ur boss has given u the following brief in creating this game 
I want u to create a simple "guess the number type game".

It should choose a random number between 1 & 100, then challenge the player to guess the number in 10 turns. After each turn, the player should be told if they right or wrong, and if they are wrong, whether was too low or too high. He should also tell the players what number they previously guessed. The game will end when the player guesses correctly or when they run out of turns. When the games end the player should be given an option to start playing the game again.

Upon looking at this brief, the first thing to do is to start breaking down into simple actionable tasks, in as much of a programmer mindset as possible.

1. Generate a random number between no 1 & 100
2. Record the third number the player is on. Start it on 1.
3. Provide the player to guess what the number is.
4. Once a guess has been submitted, first record it somewhere, so the user can see their previous guesses.
5. Next, check whether is the correct number.
6. If it is the correct number:
   - Display congratulation message.
   - Stop the player from been able to enter more guesses (This will mess the game up).
   - Display control allowing the player to restart the game
7. If it is wrong and the player has turns left:
   - Tell the player they are wrong whether their guess was stoo high or too low.
   - Allow them to enter another guess.
   - Increment the turn number by one.
8. If it is wrong and the player has no turns left:
   - Tell the player it is game over.
   - Stop the player from being able to enter more guesses (This will mwess the game up).
   - Display control allowing the player to restart the game.
9. Once the game restart, make sure the game logic and UI are completely reset and go back to step 1.