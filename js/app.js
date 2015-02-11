'use strict';

/*main module definition*/
var dinnerPlanner = angular.module("dinnerPlanner", []);


$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

});


// initialise selection tooggle
$(document).ready(function() {
    $('select').material_select();
 });