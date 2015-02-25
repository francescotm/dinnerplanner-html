//TotalMenuView Object constructor
var TotalMenuView = function (container, model) {

	// set data to test view
	// model.setNumberOfGuests(2);
	//model.addDishToMenu(2);
	//model.addDishToMenu(103);
	//model.addDishToMenu(200);
	var menu = model.getFullMenu();
	var totalPrice = model.getTotalMenuPrice();
	var guests = model.getNumberOfGuests();

	var plusButton;
 	var minusButton;



	// responsive column
	var dinnerContainer = document.createElement('div');
	//dinnerContainer.setAttribute("class", "col s12 m3 l3");
	// var dinnerHeading = document.createElement('h3');
	// dinnerHeading.setAttribute("class", "small-heading");
	// var dinnerHeadingText = document.createTextNode("My Dinner");
	// dinnerHeading.appendChild(dinnerHeadingText);
	// dinnerContainer.appendChild(dinnerHeading);
	
	// number of guests
	var peopleP = document.createElement('p');
	var peopleText = document.createTextNode("Number of guests: ");
	var numberGuests = document.createElement('span');
	numberGuests.setAttribute("id", "numberOfGuests");
	var numberGuestsText = document.createTextNode(guests);
	numberGuests.appendChild(numberGuestsText);
	peopleP.appendChild(peopleText);
	peopleP.appendChild(numberGuests);
	dinnerContainer.appendChild(peopleP);
	
	// guests minus & plus button
	// var buttonContainer = document.createElement('div');
	// buttonContainer.setAttribute("id", "guest-buttons");
	// var minusGuest = document.createElement('a');
	// minusGuest.setAttribute("id", "minusGuest");
	// minusGuest.setAttribute("class", "btn-floating btn-large waves-effect waves-light red");
	// var plusGuest = document.createElement('a');
	// plusGuest.setAttribute("id", "plusGuest");
	// plusGuest.setAttribute("class", "btn-floating btn-large waves-effect waves-light red");
	// var minusIcon = document.createElement('i');
	// minusIcon.setAttribute("class", "mdi-content-remove");
	// var plusIcon = document.createElement('i');
	// plusIcon.setAttribute("class", "mdi-content-add");
	// minusGuest.appendChild(minusIcon);
	// plusGuest.appendChild(plusIcon);
	// buttonContainer.appendChild(minusGuest);
	// buttonContainer.appendChild(plusGuest);
	// dinnerContainer.appendChild(buttonContainer);

	// this.plusButton = plusGuest;
	// this.minusButton = minusGuest;

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

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
	var headerDelete = document.createElement('th');
	headerRow.appendChild(headerDish);
	headerRow.appendChild(headerCost);
	headerRow.appendChild(headerDelete);
	tableHeader.appendChild(headerRow);
	table.appendChild(tableHeader);

	// tbody
	var tbody = document.createElement('tbody');
	tbody.setAttribute("id", "menu-table");

	// dishes in the menu with price
	var printMenu = function(menu) {
		tbody.innerHTML = "";
		for (var i = 0; i < menu.length; i++) {
			var dishRow = document.createElement('tr');
			dishRow.setAttribute("id", "dish-row-"+i);
			dishRow.setAttribute("data-id", menu[i].id);
			var dishName = document.createElement('td');
			var dishNameText = document.createTextNode(menu[i].name);
			dishName.appendChild(dishNameText);
			var price = model.getDishPrice(menu[i].id);
			var dishCost = document.createElement('td');
			dishCost.setAttribute("id", "dish-price-"+menu[i].id);
			var dishCostText = document.createTextNode(price);
			dishCost.appendChild(dishCostText);
			var dishDelete = document.createElement('td');
			var dishDeleteLink = document.createElement('a');
			dishDelete.setAttribute("class", "remove-dish-button");
			dishDelete.setAttribute("data-id", menu[i].id);
			dishDeleteLink.setAttribute("id", "remove-dish-"+i);
			dishDeleteLink.setAttribute("href", "#dish-price-"+menu[i].id);
			dishDeleteIcon = document.createElement('i');
			dishDeleteIcon.setAttribute("class", "mdi-action-highlight-remove grey-text");
			dishDeleteLink.appendChild(dishDeleteIcon);
			dishDelete.appendChild(dishDeleteLink);
			dishRow.appendChild(dishName);
			dishRow.appendChild(dishCost);
			dishRow.appendChild(dishDelete);
			tbody.appendChild(dishRow);
		}
	} // function printeMenu
	//printMenu(menu);

	// total price
	var totalRow = document.createElement('tr');
	totalRow.setAttribute("class", "totalPriceMenu");
	var totalLabel = document.createElement('td');
	var totalLabelText = document.createTextNode("Total: ");
	totalLabel.appendChild(totalLabelText);
	var totalCost = document.createElement('td');
	totalCost.setAttribute("id", "dish-total-price");
	var totalCostText = document.createTextNode(totalPrice);
	var totalCurrency = document.createElement('td');
	var totalCurrencyText = document.createTextNode("SEK");
	totalCurrency.appendChild(totalCurrencyText);
	totalCost.appendChild(totalCostText);
	totalRow.appendChild(totalLabel);
	totalRow.appendChild(totalCost);
	totalRow.appendChild(totalCurrency);

	table.appendChild(tbody);
	table.appendChild(totalRow);
	tableContainer.appendChild(table);

	// confirm dinner button
	var confirmButton = document.createElement('a');
	confirmButton.setAttribute("class", "btn confirmDinnerButton");
	var confirmText = document.createTextNode("Confirm dinner");
	confirmButton.appendChild(confirmText);

	//implement observer 
	model.addObserver(this);

	this.update = function(obj){
		var newMenu = model.getFullMenu();
		if (obj == "setNumberOfGuests") {
			numberGuests.innerHTML = model.getNumberOfGuests();
			for (var i = 0; i < newMenu.length; i++) {
				var price = model.getDishPrice(newMenu[i].id);
				var singleDishPrice = document.getElementById("dish-price-"+newMenu[i].id);
				if (singleDishPrice) {
					singleDishPrice.innerHTML = price;
				} else {
					continue;
				}
			}
			console.log("total price now " + model.getTotalMenuPrice());
			console.log("menu now " + model.getFullMenu());
			totalCost = document.getElementById("dish-total-price");
			
			// search only inside the container to avoid that you get an element with the same id
			container.find("#dish-total-price");

			totalCost.innerHTML = model.getTotalMenuPrice();
			
		} else if (obj == "addDishToMenu" || "removeDishFromMenu") {
			console.log("menu in update" + newMenu);
			printMenu(newMenu);
			totalCost = document.getElementById("dish-total-price");	
			totalCost.innerHTML = model.getTotalMenuPrice();
		}
	};


	// append stuff
	dinnerContainer.appendChild(tableContainer);
	dinnerContainer.appendChild(confirmButton);

	document.getElementById("totalMenuView").appendChild(dinnerContainer);



}


