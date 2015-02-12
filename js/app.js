$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));
	// test fullMenu


	//random code

	var num = model.setNumberOfGuests(3);
	var guests = model.getNumberOfGuests();

	//console.log("numberOfGuests: " +JSON.stringify(guests));
	
	//ar dishingredient = model.getDishIngredients(100);
	//console.log("dishingredient " + JSON.stringify(dishingredient));
	//add to menu
	// model.addDishToMenu(201);
	// var menu = model.getFullMenu();
	// console.log("full menu before: " + JSON.stringify(menu));
	
	 model.addDishToMenu(2);
	 model.addDishToMenu(102);
	 model.addDishToMenu(1);
	// var menu = model.getFullMenu();
	// console.log("full menu after: " + JSON.stringify(menu));
	
	//var singleIngredients = model.getDishIngredients(1);
	//console.log("getDishIngredients: " + JSON.stringify(singleIngredients));
	
	var allIngredients = model.getAllIngredients();

	// var singleIngredients = model.getDishIngredients(103);
	// console.log("getDishIngredients 103: " + JSON.stringify(singleIngredients));

	// var singleIngredients = model.getDishIngredients(202);
	// console.log("getDishIngredients 202: " + JSON.stringify(singleIngredients));
	
	console.log("all ingredients " + JSON.stringify(allIngredients));

	//var type = model.getSelectedDish('starter');
	//console.log("get selected dish " + JSON.stringify(type));
	//var price = model.getTotalMenuPrice();
	//console.log("price= " + price);
	//console.log("full menu before: " + JSON.stringify(menu));
	//model.removeDishFromMenu(1);
	//console.log("full menu after: " + JSON.stringify(menu));
});


// // initialise selection tooggle
// $(document).ready(function() {
//     $('select').material_select();
//  });