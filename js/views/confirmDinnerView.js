//ConfirmDinnerView Object constructor
var ConfirmDinnerView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	// this.price = container.find("#dish-total-price");
	this.confirmDinner = container.find("#confirmDinnerView");

	// set data to test view
	model.setNumberOfGuests(2);
	model.addDishToMenu(2);
	model.addDishToMenu(103);
	model.addDishToMenu(200);
	var menu = model.getFullMenu();
	var totalPrice = model.getTotalMenuPrice();
	var guests = model.getNumberOfGuests();

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


