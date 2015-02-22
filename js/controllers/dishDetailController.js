var DishDetailController = function(view, model ) {
//confirm button

$("#confirmDishButton").click(function(){
	var id = $(this).data("id");
  	model.addDishToMenu(id);
  	// THIS WORKS, BUT WE NEED TO REPRINT THE NEW MENU IN THE UPDATE IN TOTALMENUVIEW
});


//back to selected dish

}
