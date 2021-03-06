const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
let userName = []
/*Create an array using forEach that contains all the usernames 
from the gameInfo array, add an exclamation point (ie. “!”) 
to the end of every username.*/

gameInfo.forEach((element) => userName.push(`${element.username}!`))
console.log(userName)

/*2. Create an array using forEach that contains the usernames of 
all players with a score bigger than 5. Use the ternary operator
The new array should look like this :*/

let userScore = []

gameInfo.forEach((element) => {
  if (element.score>5) {
    userScore.push(`${element.username}`)
  }
})
console.log(userScore)

/*3. Find and display the total score of the users. (Hint: The total score is 71)*/

let totalScore = []

gameInfo.forEach((element) => totalScore.push(element.score))

console.log(totalScore)
let helpNumb = 0

totalScore.forEach((element) => helpNumb+=element)

console.log(helpNumb)









