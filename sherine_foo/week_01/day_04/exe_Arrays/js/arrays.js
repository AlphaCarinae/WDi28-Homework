
// Starting with an empty array called rainbowColors:
//
// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
// Log out the length of the array
// Log out the second item
// Log out the last item (make this flexible/dynamic!)
// Log out the index of the string "blue"
// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out"
// Print "third" by using a dynamic index
// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third
//
//
//



console.log("Im here");

let rainbowColors = [];
rainbowColors.unshift("red");
rainbowColors.push("orange");
rainbowColors.push("yellow");
rainbowColors.push("green", "blue", "indigo", "violet");

console.log(rainbowColors)
console.log(rainbowColors.length);
console.log(rainbowColors[2]);
console.log(rainbowColors[rainbowColors.length-1]);
console.log(rainbowColors.indexOf("blue")); //not sure index = 2 is correct?

let twoColors = [rainbowColors[1], rainbowColors[3]];
console.log(twoColors);

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(3, 3);
console.log(nums);

var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0]);
console.log(arrOfArrs[1]);

console.log((arrOfArrs[0])[0]);

console.log("tell" + (arrOfArrs[arrOfArrs.length - 1])[arrOfArrs.length]);
//console.log((arrOfArrs[arrOfArrs.length - 1])[arrOfArrs[arrOfArrs.length - 1][(arrOfArrs.length - 1)])
//console.log(arrOfArrs.length)

for (i = 0; i < arrOfArrs[1].length ; i++) {
  console.log((arrOfArrs[1])[i]);
}


const top5 = ["puppy", "books", "flowers", "movies", "food"];
for (i = 0; i < top5.length; i++) {
  console.log(`My #${i+1} choice is ${top5[i]}`);
}
