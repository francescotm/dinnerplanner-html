
var TotalMenuController = function(view, model ) {
 
 //console.log(view);

 //console.log(view.plusButton);

 //console.log("controller guests" + model.getNumberOfGuests());
 //console.log(model.setNumberOfGuests(3));
 //console.log("controller guests after" + model.getNumberOfGuests());


 view.plusButton.click(function(){
 	console.log("clicking clicking");
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 console.log("number of guests plus" + model.getNumberOfGuests());

 });
 
 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });
}
