//TopBarView Object constructor
var TopBarView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.topBar = container.find("#topBarView");

	// set data to test view
	model.setNumberOfGuests(2);
	model.addDishToMenu(2);
	model.addDishToMenu(103);
	model.addDishToMenu(200);
	var menu = model.getFullMenu();
	var totalPrice = model.getTotalMenuPrice();
	var guests = model.getNumberOfGuests();

	// top bar
	var topBar = document.createElement('div');
	topBar.setAttribute("id", "top-bar");
	topBar.setAttribute("class", "row amber lighten-3");

	// My Dinner with number of guests
	var dinnerLeft = document.createElement('div');
	dinnerLeft.setAttribute("class", "col s12 m4 l4");
	var dinnerHeading = document.createElement('h3');
	dinnerHeading.setAttribute("class", "small-heading");
	var dinnerHeadingText = document.createTextNode("My Dinner: " + guests + " people");
	dinnerHeading.appendChild(dinnerHeadingText);
	dinnerLeft.appendChild(dinnerHeading);

	// back button
	var dinnerRight = document.createElement('div');
	dinnerRight.setAttribute("class", "col s12 m4 l4 offset-m4 offset-l4");

	var buttonContainer = document.createElement('p');
	var buttonLink = document.createElement('a');
	buttonLink.setAttribute("class", "waves-effect waves-light btn");
	var buttonIcon = document.createElement('i');
	buttonIcon.setAttribute("class", "mdi-navigation-arrow-back left");
	var buttonText = document.createTextNode("Go back and edit dinner");
	buttonLink.appendChild(buttonIcon);
	buttonLink.appendChild(buttonText);
	buttonContainer.appendChild(buttonLink);
	dinnerRight.appendChild(buttonContainer);

	topBar.appendChild(dinnerLeft);
	topBar.appendChild(dinnerRight);
	document.getElementById("topBarView").appendChild(topBar);
}


