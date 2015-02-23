var DishDetailController = function(view, model ) {
//confirm button

$("#confirmDishButton").click(function(){
	var id = $(this).data("id");
  	model.addDishToMenu(id);
  	$(this).addClass("disabled");
  	$(this).prop("disabled",true);
});

$(".confirmDinnerButton").click(function(){
	$("#totalMenuView").addClass("hide");
	$("#dishDetailView").addClass("hide");
	$("#confirmDinnerView").removeClass("hide");
});

$("#backPickDish").click(function(){
	$("#dishDetailView").addClass("hide");
	$("#pickDish").removeClass("hide");
});


//back to selected dish

}
