// initialise selection tooggle
$(document).ready(function() {
    $('select').material_select();
 });

 
// MVC
$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var totalMenuView = new TotalMenuView($("#totalMenuView"), model);
	var pickDishView = new PickDishView($("#pickDishView"), model);
	// var topBarView = new TopBarView($("#topBarView"), model);
	// var dishDetailView = new DishDetailView($("#dishDetail"), model);
	// var confirmDinnerView = new ConfirmDinnerView($("#confirmDinnerView"), model);
	// var recipeView = new RecipeView($("#recipeView"), model);
});



