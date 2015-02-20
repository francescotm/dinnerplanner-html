// initialise selection tooggle
$(document).ready(function() {
    $('select').material_select();
 });

 
// MVC
$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	window.stage = "starter";

	//And create the needed controllers and views
	//var homeView = new HomeView($("#homeView"), model);
	//var totalMenuView = new TotalMenuView($("#totalMenuView"), model);
	//var totalMenuController =  new TotalMenuController(totalMenuView, model);
	//var pickDishView = new PickDishView($("#pickDishView"), model);
	//var pickDishController =  new PickDishController(pickDishView, model);
	//var dishDetailView = new DishDetailView($("#dishDetail"), model);
	//var dishDetailController =  new DishDetailController(dishDetailView, model);
	// var confirmDinnerView = new ConfirmDinnerView($("#confirmDinnerView"), model);
	 var recipeView = new RecipeView($("#recipeView"), model);
});



