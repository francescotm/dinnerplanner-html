$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

	//random code

	var num = model.setNumberOfGuests(numberOfGuests);
	var guests = model.getNumberOfGuests();

	console.log("numberOfGuests: " + guests);
	
	
	var ciao = model.getAllIngredients();
	console.log("test " + ciao);
	console.log("position " + ciao[1].id);
});


// // initialise selection tooggle
// $(document).ready(function() {
//     $('select').material_select();
//  });