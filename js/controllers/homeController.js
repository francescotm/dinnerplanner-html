var HomeController = function(view, model ) {
console.log("HomeController");

$(document).on('click', '#create-new-dinner', function(){
	console.log("test");
  	$("#totalMenuView").removeClass("hide");
  	$("#pickDish").removeClass("hide");
  	$("#homeView").addClass("hide");
});


//back to selected dish

}
