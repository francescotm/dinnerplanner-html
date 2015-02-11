$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

	//random code

	var num = model.setNumberOfGuests(numberOfGuests);
	var guests = model.getNumberOfGuests();

	console.log("numberOfGuests: " + guests);
	
	var dishingredient = model.getDishIngredients(1);
	var ciao = model.getAllIngredients();
	var menu = model.getFullMenu();
	console.log("full menu " + JSON.stringify(menu));
	var type = model.getSelectedDish('starter');
	console.log("get selected dish " + JSON.stringify(type));

});


// // initialise selection tooggle
// $(document).ready(function() {
//     $('select').material_select();
//  });