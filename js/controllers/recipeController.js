var RecipeController = function(view, model ) {
//go back to pick dish
$(document).on('click', '#goBackFromRecipe', function() {
	$("#recipeView").addClass("hide");
	$("#totalMenuView").removeClass("hide");
	$("#pickDish").removeClass("hide");
});


}
