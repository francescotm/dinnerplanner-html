var DishDetailController = function(view, model ) {
//confirm button
$(document).on('click', '#confirmDishButton', function() {
	var id = $(this).data("id");
  	model.addDishToMenu(id);
  	console.log("addind dish " + id);
  	$(this).addClass("disabled");
  	$(this).prop("disabled",true);
});

$(document).on('click', '.confirmDinnerButton', function() {
	$("#totalMenuView").addClass("hide");
	$("#pickDish").addClass("hide");
	$("#dishDetailView").addClass("hide");
	$("#confirmDinnerView").removeClass("hide");
});
$(document).on('click', '#backPickDish', function() {
	$("#dishDetailView").addClass("hide");
	$("#pickDish").removeClass("hide");
});


//back to selected dish

}
