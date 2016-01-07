// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

if(color=="red") {
	console.log("red is the color of apples");
}else if (color=="orange") {
	console.log("orange is the color of oranges");
}else if (color=="yellow") {
	console.log("yellow is the color of the sun");
}else if (color=="green") {
	console.log("green is the color of chlorophyll");
}else if (color=="blue") {
	console.log("blue is the color of the sky");
}else if (color=="indigo") {
	console.log("I do not know anything by that color");
}else if (color=="violet") {
	console.log("I do not know anything by that color");
}

// or for indigo and violet

else {
	console.log("I do not know anything by that color");
}

(color=="red" || color=="orange" || color=="yellow" || color=="green" || color=="indigo" || color=="violet")?console.log("Nope, not my favorite color"):console.log("Yes! That is my favorite color!");

// another way of writing
(color != favorite)?console.log("Nope, not my favorite color"):console.log("Yes! That is my favorite color!");

//another solution--opposite of the above
(color===favorite)?console.log("Yes! That is my favorite color!"):console.log("Nope, not my favorite color");

// or -- the shortest!

console.log((color===favorite)?"favorite":"not favorite");

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

// switch Example

var newsPerson = "Troy McClure";
switch(newsPerson){  //same as IF statement
	case "Trisha Takanawa" //IF Trisha, then will write the Switch statement
		console.log("Switch says Trisha");
	break;
	case "Troy McClure":
		console.log("Switch says Troy");
	break;
	default: //This is comparable to else
		console.log("Switch doesn't know");
}



var whatAmI = "I am a String";

switch (typeof whatAmI) {
	case "boolean":
	console.log("check if I am a boolean");

}

var i = 0;

while (i < 10) {
	console.log('while loop iteration #' + i);
	i=i+1;
	console.log('My Loop is Complete');
}

//do this while this is true
var = 50;

do {
	console.log('while loop iteration #' +i); //will show EVERY loop iteration
	i++;
}while (i < 10);

