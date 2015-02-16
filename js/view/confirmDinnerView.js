//ConfirmDishView Object constructor
var ConfirmDinnerView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	// this.price = container.find("#dish-total-price");
	this.confirmDinner = container.find("#confirmDinnerView");

	// set data to test view
	model.setNumberOfGuests(3);
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
	document.getElementById("confirmDinnerView").appendChild(topBar);

	var dishes = document.createElement('div');
	dishes.setAttribute("class", "row");
	dishes.setAttribute("id", "dishes");

	for (var i = 0; i < menu.length; i++) {

		// responsive column
		var containerDiv = document.createElement('div')
		containerDiv.setAttribute("class", "col s12 m4 l3");
		
		// card div
		var cardDiv = document.createElement('div')
		cardDiv.setAttribute("class", "card");
		var cardImage = document.createElement('div')
		
		// image 
		cardImage.setAttribute("class", "card-image");
		var image = document.createElement('img');
		image.setAttribute("class", "responsive-img");
		image.setAttribute("src", "images/" + menu[i].image);
		cardImage.appendChild(image);
		
		// card-content div
		var cardContent = document.createElement('div')
		cardContent.setAttribute("class", "card-content");
		
		// dish name
		var dishLink = document.createElement('a');
		var dishName = document.createTextNode(menu[i].name);
		dishLink.appendChild(dishName);
		
		// dish link
		dishLink.href = "#";
		cardContent.appendChild(dishLink);
		var cardAction = document.createElement('div');
		
		// card-action div
		cardAction.setAttribute("class", "card-action");
		
		// dish price
		var p = document.createElement('p');
		var price = model.getDishPrice(menu[i].id);
		var dishPrice = document.createTextNode(price + " SEK");
		p.appendChild(dishPrice);
		cardAction.appendChild(p);
		
		// append everything in containerDiv
		cardDiv.appendChild(cardImage);
		cardDiv.appendChild(cardContent);
		cardDiv.appendChild(cardAction);
		containerDiv.appendChild(cardDiv);

		dishes.appendChild(containerDiv);
	}
	
	// Total price
	var totalPriceDiv = document.createElement('div');
	totalPriceDiv.setAttribute("class", "col s12 m4 l3");
	var priceHeading = document.createElement('h3');
	priceHeading.setAttribute("class", "small-heading");
	var priceText = document.createTextNode("Total: " + totalPrice + " SEK");
	priceHeading.appendChild(priceText);
	totalPriceDiv.appendChild(priceHeading);
	dishes.appendChild(totalPriceDiv);

	this.confirmDinner.html(dishes);
	document.getElementById("confirmDinnerView").appendChild(dishes);
}


