var DishDetailController = function(view, model ) {
//confirm button

$("#confirmDishButton").click(function(){
	var id = $(this).data("id");
  	model.addDishToMenu(id);
  	$(this).addClass("disabled");
});


//back to selected dish

}
