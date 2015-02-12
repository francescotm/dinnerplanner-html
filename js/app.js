
 
// MVC
$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
});

// initialise selection tooggle
$(document).ready(function() {
    $('select').material_select();
 });


