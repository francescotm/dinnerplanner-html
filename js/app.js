$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

	//random code

	var num = model.setNumberOfGuests(3);
	var guests = model.getNumberOfGuests();

	console.log("numberOfGuests: " +JSON.stringify(guests));
	
	var dishingredient = model.getDishIngredients(1);
	var ciao = model.getAllIngredients();
	var menu = model.getFullMenu();
	console.log("all intredients " + JSON.stringify(ciao));
	var type = model.getSelectedDish('starter');
	console.log("get selected dish " + JSON.stringify(type));
	var price = model.getTotalMenuPrice();
	console.log("price= " + price);

});


// // initialise selection tooggle
// $(document).ready(function() {
//     $('select').material_select();
//  });