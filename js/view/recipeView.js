//RecipeView Object constructor
var RecipeView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	// this.price = container.find("#dish-total-price");
	this.recipe = container.find("#recipeView");

	// set data to test view
	model.setNumberOfGuests(2);
	model.addDishToMenu(2);
	model.addDishToMenu(103);
	model.addDishToMenu(200);
	var menu = model.getFullMenu();
	var guests = model.getNumberOfGuests();

	// dishes
	var dishes = document.createElement('div');
	dishes.setAttribute("class", "row");
	dishes.setAttribute("id", "dishes");

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

	this.recipe.html(dishes);
	document.getElementById("recipeView").appendChild(dishes);
}


