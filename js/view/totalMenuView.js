//TotalMenuView Object constructor
var TotalMenuView = function (container, model) {

	// set data to test view
	model.setNumberOfGuests(2);
	model.addDishToMenu(2);
	model.addDishToMenu(103);
	model.addDishToMenu(200);
	var menu = model.getFullMenu();
	var totalPrice = model.getTotalMenuPrice();
	var guests = model.getNumberOfGuests();

	// responsive column
	var dinnerContainer = document.createElement('div');
	//dinnerContainer.setAttribute("class", "col s12 m3 l3");
	var dinnerHeading = document.createElement('h3');
	dinnerHeading.setAttribute("class", "small-heading");
	var dinnerHeadingText = document.createTextNode("My Dinner");
	dinnerHeading.appendChild(dinnerHeadingText);
	dinnerContainer.appendChild(dinnerHeading);
	
	// number of guests
	var peopleP = document.createElement('p');
	var peopleText = document.createTextNode("People: ");
	var numberGuests = document.createElement('span');
	numberGuests.setAttribute("id", "numberOfGuests");
	var numberGuestsText = document.createTextNode(guests);
	numberGuests.appendChild(numberGuestsText);
	peopleP.appendChild(peopleText);
	peopleP.appendChild(numberGuests);
	dinnerContainer.appendChild(peopleP);
	
	// guests minus & plus button
	var buttonContainer = document.createElement('div');
	buttonContainer.setAttribute("id", "guest-buttons");
	var minusGuest = document.createElement('a');
	minusGuest.setAttribute("id", "minusGuest");
	minusGuest.setAttribute("class", "btn-floating btn-large waves-effect waves-light red");
	var plusGuest = document.createElement('a');
	plusGuest.setAttribute("id", "plusGuest");
	plusGuest.setAttribute("class", "btn-floating btn-large waves-effect waves-light red");
	var minusIcon = document.createElement('i');
	minusIcon.setAttribute("class", "mdi-content-remove");
	var plusIcon = document.createElement('i');
	plusIcon.setAttribute("class", "mdi-content-add");
	minusGuest.appendChild(minusIcon);
	plusGuest.appendChild(plusIcon);
	buttonContainer.appendChild(minusGuest);
	buttonContainer.appendChild(plusGuest);
	dinnerContainer.appendChild(buttonContainer);

	// table
	var tableContainer = document.createElement('div');
	var table = document.createElement('table');
	table.setAttribute("class", "responsive-table");
	
	// table header
	var tableHeader = document.createElement('thead');
	var headerRow = document.createElement('tr');
	var headerDish = document.createElement('th');
	var headerDishText = document.createTextNode("Dish name");
	headerDish.appendChild(headerDishText);
	var headerCost = document.createElement('th');
	var headerCostText = document.createTextNode("Cost");
	headerCost.appendChild(headerCostText);
	headerRow.appendChild(headerDish);
	headerRow.appendChild(headerCost);
	tableHeader.appendChild(headerRow);
	table.appendChild(tableHeader);

	// tbody
	var tbody = document.createElement('tbody');

	// dishes in the menu with price
	for (var i = 0; i < menu.length; i++) {
		var dishRow = document.createElement('tr');
		var dishName = document.createElement('td');
		var dishNameText = document.createTextNode(menu[i].name);
		dishName.appendChild(dishNameText);
		var price = model.getDishPrice(menu[i].id);
		var dishCost = document.createElement('td');
		var dishCostText = document.createTextNode(price);
		dishCost.appendChild(dishCostText);
		dishRow.appendChild(dishName);
		dishRow.appendChild(dishCost);
		tbody.appendChild(dishRow);
	}

	// total price
	var totalRow = document.createElement('tr');
	var totalEmpty = document.createElement('td');
	var totalCost = document.createElement('td');
	totalCost.setAttribute("id", "dish-total-price");
	var totalCostText = document.createTextNode("SEK " + totalPrice);
	totalCost.appendChild(totalCostText);
	totalRow.appendChild(totalEmpty);
	totalRow.appendChild(totalCost);
	tbody.appendChild(totalRow);

	table.appendChild(tbody);
	tableContainer.appendChild(table);

	// confirm dinner button
	var confirmButton = document.createElement('a');
	confirmButton.setAttribute("class", "btn");
	var confirmText = document.createTextNode("Confirm dinner");
	confirmButton.appendChild(confirmText);

	// append stuff
	dinnerContainer.appendChild(tableContainer);
	dinnerContainer.appendChild(confirmButton);

	document.getElementById("totalMenuView").appendChild(dinnerContainer);
	
}


