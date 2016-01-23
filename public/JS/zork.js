// Your assignment is to create a simple text adventure game to reinforce what you’ve learned so far about javascript.


"use strict"

function game () {
	var currentLocation = "forest";
	var winLocation = "insideHouse";
	var response;
	var answer = ["enter the house", "go inside", "go inside the house", "open the door"];
	alert("Use directional commands to get Mortilly home such as 'go + direction'");

	//LOCATION MESSAGES
	var forestMessage = "Mortilly has awoken is in a forest of evil spirits!  Confused and a bit scared, he is in a hurry to find out how to get home!";

	var clearingMessage = "You have taken Mortilly to a clearing and he is starting to FREAK OUT...he's heard stories before of others never returning home due to being directionally challenged!  Aggg! He fears it would take far too long to walk south or east across the clearing.  There's a smell coming from a forest to his north and a pond to his west.";

	var pondMessage = "Now Mortilly has arrived at pond though suddenly realizes it's the pond of Bottemless Stench!  Dun na NAAA!  But, oh is he so very thirsty.  He is perplexed, to drink the water or not?  The water looks cool and refreshing but knows the longer he dilly-dallies, the longer before he gets home!  Mortilly sure would like a drink.  He wonders if the water is safe to drink being as stinky as it is.  He and gazes across the pond.  It extends far to the south and west.  To his north, Mortilly can see a house.  To his east, there\'s a large clearing.";

	var houseMessage = "Ohh la la - Mortilly finally reaches a house.  But he wonders, 'Is it his house?' His memory is hazy and scared to open the door.  The house is fenced in to the north and west.  He can see a forest to his east and a pond to his south.";

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


	var locationArray = [winLocation, "wrongWay"];
	while(locationArray.indexOf(currentLocation) == -1){
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

			case "wrongWayEast":
				alert(wrongWayEast);
				response = response.toLowerCase();
				currentLocation = "wrongWay";

			break;

			case "wrongWayNorth":
				alert(wrongWayNorth);
				response = response.toLowerCase();
				currentLocation = "wrongWay";

			break;

			case "wrongWayWest":
				alert(wrongWayWest);
				response = response.toLowerCase();
				currentLocation = "wrongWay";

			break;

			case "wrongWaySouth":
				alert(wrongWaySouth);
				response = response.toLowerCase();
				currentLocation = "wrongWay";

			break;

			case "die":
				alert(die);
				response = response.toLowerCase();
				currentLocation = "wrongWay";

			break;

		}
	}
	return currentLocation;
}
		var endingLocation = game();
		var winLocation = "insideHouse";
		var winMessage = "Mortilly collapses on the couch inside the door.  He\'s still not sure this is his house but he feels a sense of accomplishment.  If life were a game, he\'d surely be winning.";


		if(endingLocation == winLocation) {
			alert(winMessage);
		}
		while (endingLocation != winLocation) {
			var playAgain = prompt("Awww, nuts! You LOST :( Want to try again?");
		if (playAgain.toLowerCase() == "yes") {
			endingLocation = game();
		}else if (playAgain.toLowerCase() == "no") {
			break;
		}
		}










