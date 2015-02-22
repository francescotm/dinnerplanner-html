var TotalMenuController = function(view, model ) {
 
 //console.log(view);

 //console.log(view.plusButton);

 //console.log("controller guests" + model.getNumberOfGuests());
 //console.log(model.setNumberOfGuests(3));
 //console.log("controller guests after" + model.getNumberOfGuests());

 view.plusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });

 $(document).on('click', '.remove-dish-button', function(){
	var removeid = $(this).data("id");
	console.log("id to remove " + removeid);
   	model.removeDishFromMenu(removeid);           
});

}
