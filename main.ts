let guess = 0
let value = randint(1, 5)
let secondValue = randint(1, 5)
game.splash("Answer the question!")
while (guess != value + secondValue) {
    guess = game.askForNumber("What is " + value + " + " + secondValue)
    if (guess == value + secondValue) {
        game.splash("Your a genius")
    }
}
game.splash("Correct!")
game.over(true)
