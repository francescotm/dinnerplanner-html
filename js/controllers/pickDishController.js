var PickDishController = function(view, model) {
	
	$(document).on('click', '.dish-detail-link', function() {
  		$("#pickDish").addClass("hide");
  		var id = $(this).data("id");
  		console.log("PickDishController id " + id);
  		$("#dishDetailView").attr("data-id", id);
  		$("#dishDetailView").removeClass("hide");
	});
}

