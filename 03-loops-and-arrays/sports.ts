let sportsOn: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

//push method is used to append the new element in the array at the end
sportsOn.push("BaseBall");
sportsOn.push("FootBall");

for (let tempSport of sportsOn) {
  if ( tempSport == "Cricket") {
    console.log(tempSport + " << My favorite!");
  } else
  console.log(tempSport);
}