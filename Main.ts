import inquirer from "inquirer";
type ansType ={
  userGuess:number
}
const systemGeneratedNo = Math.floor(Math.random() * 10);

const answers: ansType = await inquirer.prompt([
  {
    type: "number",
    name: "userGuess",
    message: "write your guess b/w 1 to 10"
  },
]);
const {userGuess} = answers;
if(userGuess === systemGeneratedNo){
  console.log(userGuess,"userGuess",systemGeneratedNo, "SYs")
  console.log("Yeahhh Your Answer Is Correct \n YOU WIN")
}
else{
  console.log("Better Luck Next Time")
}