var PickDishController = function(view, model) {
	
	$(document).on('click', '.dish-detail-link', function() {
  		$("#pickDish").addClass("hide");
  		var id = $(this).data("id");
  		model.setDishId(id);
  		console.log("model dishId " + model.getDishId());
  		//$("#dishDetailView").attr("data-id", model.getDishId());
  		$("#dishDetailView").removeClass("hide");
	});
}

