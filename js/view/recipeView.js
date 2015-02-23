//RecipeView Object constructor
var RecipeView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	// this.price = container.find("#dish-total-price");
	this.recipe = container.find("#recipeView");

	// set data to test view
	//model.setNumberOfGuests(2);
	//model.addDishToMenu(2);
	//model.addDishToMenu(103);
	//model.addDishToMenu(200);
	var menu = model.getFullMenu();
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
	buttonLink.setAttribute("id", "goBackFromRecipe");
	var buttonIcon = document.createElement('i');
	buttonIcon.setAttribute("class", "mdi-navigation-arrow-back left");
	var buttonText = document.createTextNode("Go back and edit dinner");
	buttonLink.appendChild(buttonIcon);
	buttonLink.appendChild(buttonText);
	buttonContainer.appendChild(buttonLink);
	dinnerRight.appendChild(buttonContainer);

	topBar.appendChild(dinnerLeft);
	topBar.appendChild(dinnerRight);


	// dishes
	var dishes = document.createElement('div');
	dishes.setAttribute("class", "row");
	dishes.setAttribute("id", "dishes");

var printDishes = function(menu){

	dishes.innerHTML = "";

	for (var i = 0; i < menu.length; i++) {

		// container
		var containerDiv = document.createElement('div');
		containerDiv.setAttribute("class", "row");

		// responsive column
		var imageDiv = document.createElement('div')
		imageDiv.setAttribute("class", "col s12 m6 l2");
		
		// image
		var image = document.createElement('img');
		image.setAttribute("class", "responsive-img card-panel");
		image.setAttribute("src", "images/" + menu[i].image);		
		imageDiv.appendChild(image);

		// responsive column
		var descriptionDiv = document.createElement('div')
		descriptionDiv.setAttribute("class", "col s12 m12 l5");

		// dish name
		var dishHeading = document.createElement('h4');
		var dishName = document.createTextNode(menu[i].name);
		dishHeading.appendChild(dishName);

		// dish description
		var descriptionP = document.createElement('p');
		var descriptionText = document.createTextNode(menu[i].description);
		descriptionP.appendChild(descriptionText);

		// append dish name & description
		descriptionDiv.appendChild(dishHeading);
		descriptionDiv.appendChild(descriptionP);

		// responsive column
		var recipeDiv = document.createElement('div')
		recipeDiv.setAttribute("class", "col s12 m12 l5");

		// recipe heading
		var recipeHeading = document.createElement('h3');
		recipeHeading.setAttribute("class", "small-heading");
		var recipeHeadingText = document.createTextNode("Preparation");
		recipeHeading.appendChild(recipeHeadingText);

		// recipe description
		var recipeDescP = document.createElement('p');
		var recipeDescText = document.createTextNode(menu[i].description);
		recipeDescP.appendChild(recipeDescText);

		// append everything in recipeDiv
		recipeDiv.appendChild(recipeHeading);
		recipeDiv.appendChild(recipeDescP);

		// append everything

		containerDiv.appendChild(imageDiv);
		containerDiv.appendChild(descriptionDiv);
		containerDiv.appendChild(recipeDiv);
		dishes.appendChild(containerDiv);
	}
}//end printDishes
	//implement observer 
    model.addObserver(this);
    this.update = function(obj){
    	if (obj == "addDishToMenu" || "removeDishFromMenu") {
    		var menu = model.getFullMenu();
			printDishes(menu);

    	}  else if (obj == "setNumberOfGuests"){
    		var guests = model.getNumberOfGuests();
    		dinnerHeading.innerHTML = "My Dinner: " + guests + " people";

    	}
    };


	this.recipe.html(dishes);
	document.getElementById("recipeView").appendChild(topBar);
	document.getElementById("recipeView").appendChild(dishes);
}


