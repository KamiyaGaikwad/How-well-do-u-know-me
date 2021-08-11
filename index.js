var Readlinesync = require("readline-sync")
console.log("Welcome to Quiz")
var username = Readlinesync.question("Please enter your name: ");
console.log("The Quiz")
console.log("---------")
score = 0;
var highscore1 = {
  name : "Kamiya",
  scored : "3",
}
var highscore2 = {
  name : "Diva",
  scored : "2",
}
var high = [highscore1,highscore2]
var Q1 = {
  q : "Whats my favourite anime? ",
  ans : "naruto",
}
var Q2 = {
  q : "Whats my passion? ",
  ans : "web development",
}
var Q3 = {
  q : "Whats my favourite color? ",
  ans : "blue",
}

var set = [Q1,Q2,Q3]

for(var i=0;i<set.length;i++){
  var user = Readlinesync.question(set[i].q);
  var users = user.toLowerCase();
  if(users === set[i].ans){
    console.log("You are right");
    score = score+1;

  }else{
    console.log("You are wrong");
  }
}
console.log("---------------------")
console.log("Your final score is : ",score)
console.log("---------------------------")
console.log("Our High scorer are  ")
console.log("--------------------")
for(var j=0;j<high.length;j++){
  console.log("Name : ",high[j].name)
  console.log("Score : ",high[j].scored)
  console.log("-----------")
}
console.log("If you have beaten our highscore, please send me the screenshot to update. Thank you")



