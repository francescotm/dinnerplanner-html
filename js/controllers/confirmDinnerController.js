var ConfirmDinnerController = function(view, model ) {
//go back to pick dish
$(document).on('click', '#goBackPickDish', function() {
	$("#confirmDinnerView").addClass("hide");
	$("#totalMenuView").removeClass("hide");
	$("#pickDish").removeClass("hide");
});

//go print dish view
$(document).on('click', '#printRecipe', function() {
	$("#confirmDinnerView").addClass("hide");
	$("#recipeView").removeClass("hide");
});
//back to selected dish

}
