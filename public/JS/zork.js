// Your assignment is to create a simple text adventure game to reinforce what you’ve learned so far about javascript.


"use strict"

var currentLocation = "forest";
var winLocation = "insideHouse";
var response;
var answer = ["enter the house", "go inside", "go inside the house"];

//LOCATION MESSAGES
var forestMessage = "Dave is in a forest.  The smell of wet leaves and maple syrup reminds Dave of late saturday morning breakfasts at his grandma\'s house.  Dave can\'t go north or east because the trees get too dense.  To his west, Dave can see a house.  There's a clearing to his south.";

var clearingMessage = "This clearing is... surprisingly clear.  There\'s nothing here at all and after a moment Dave starts to question his motives for coming here.  Why did he come this way?  Should he leave?  More importantly, can Dave even make these choices or is he under the command of unseen forces.  Is some stranger at a keyboard somehwere controlling every move.  In any case, it would take far too long to walk south or east across the clearing.  There's a forest to his north and a pond to his west.";

var pondMessage = "Dave comes to a pond and nearly stumbles in. The water looks cool and refreshing and Dave is thirsty.  Dave sure would like a drink.  It\'s a big pond, extending far to the south and west.  To his north, Dave can see a house.  To his east, there\'s a large clearing.";

var houseMessage = "Dave finally reaches a house.  Is it his house?  His memory has been hazy since the accident.  The house is fenced in to the north and west.  He can see a forest to his east and a pond to his south.";

var winMessage = "Dave collapses on the couch inside the door.  He\'s still not sure this is his house but he feels a sense of accomplishment.  If life were a game, he\'d surely be winning.";

//My variables

var wrongWayEast = "You have just been killed by a meteor";

var wrongWayNorth = "You have just been killed by an ompa-loompa";

var wrongWayWest = "You have just been eaten by a hungry bear";

var wrongWaySouth = "You have just died by Spontaneous Combustion";

var die = "You have just drank poisenous water and are experiencing a painful death - You LOSE! *GaMe OvEr*"


//TODO: Use a while loop to determine if the player is at the win (winning) destination.  

//TODO: Use a switch to check the current location of the player.

//TODO: For each possible location, display the message about it (defined above or create your own) and then prompt for the user's next move.

//TODO: When the user is at the house and they type "Enter the house" display the winMessage.

//TODO: When the user is at the water and they type "Drink the water" end the game.



while(currentLocation != winLocation) {
	switch(currentLocation) {
		case "forest":
			alert(forestMessage);
			response = prompt("Which direction would you like to go?");
			response = response.toLowerCase();
			if (response == "go west") {
				currentLocation = "house";
			} else if (response == "go south") {
				currentLocation = "clearing";
			} else if (response == "go east") {
				currentLocation = "wrongWayEast";
			} else if (response == "go north") {
				currentLocation = "wrongWayNorth";
			} else {
				response = "That is not a valid direction";
			}

		break;
		
		case "house":
			alert(houseMessage);
			response = prompt("Where would you like to go?");
			response = response.toLowerCase();
			if(response == "go west") {
				currentLocation = "wrongWayWest";
			} else if (response == "go south") {
				currentLocation = "pond";
			} else if (response == "go east") {
				currentLocation = "forest";
			} else if (response == "go north") {
				currentLocation = "wrongWayNorth";
			} else if (answer.indexOf(response)!= -1) {
				currentLocation = winLocation;
			} else {
				response = "That is not a valid direction";
			}

		break;

		case "pond":
			alert(pondMessage);
			response = prompt("Which direction would you like to go?");
			response = response.toLowerCase();
			if(response=="go west") {
				currentLocation = "wrongWayWest";
			} else if (response == "go south") {
				currentLocation = "wrongWaySouth";
			} else if (response == "go east") {
				currentLocation = "clearing";
			} else if (response == "go north") {
				currentLocation = "house";
			} else if (response == "drink the water") {
				currentLocation = "die";
			}

		break;

		case "clearing":
			alert(clearingMessage);
			response = prompt("Which direction would you like to go?");
			response = response.toLowerCase();
			if(response == "go west") {
				currentLocation = "pond";
			} else if (response == "go south") {
				currentLocation = "wrongWaySouth";
			} else if (response == "go east") {
				currentLocation = "wrongWayEast";
			} else if (response == "go north") {
				currentLocation = "forest";
			} else {
				response="That is not a valid direction", alert(clearingMessage);
			response = prompt("Which direction would you like to go?");
			}
			
		break;

		case "wrongEast":
			alert(wrongWayEast);
			response = response.toLowerCase();

		break;

		case "wrongNorth":
			alert(wrongWayNorth);
			response = response.toLowerCase();

		break;

		case "wrongWest":
			alert(wrongWayWest);
			response = response.toLowerCase();

		break;

		case "wrongSouth":
			alert(wrongWaySouth);
			response = response.toLowerCase();
			
		break;

		case "youAreDead":
			alert(die);
			response = response.toLowerCase();
			
		break;

	}
}
		alert(winMessage);










