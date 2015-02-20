//PickDishView Object constructor
var PickDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	// this.price = container.find("#dish-total-price");
this.pickDish = container.find("#pickDishView");
var allDishes = model.getAllDishes("dessert", "");

var dishes = document.createElement('div');
dishes.setAttribute("class", "row");
dishes.setAttribute("id", "dishes");

for(var i=0; i<allDishes.length; i++){
	var containerDiv = document.createElement('div')
	containerDiv.setAttribute("class", "col s6 m4 l4");
	var cardDiv = document.createElement('div')
	cardDiv.setAttribute("class", "card");
	var cardImage = document.createElement('div')
	cardImage.setAttribute("class", "card-image");
	var image = document.createElement('img');
	image.setAttribute("src", "images/"+allDishes[i].image);
	cardImage.appendChild(image);
	var cardContent = document.createElement('div')
	cardContent.setAttribute("class", "card-content");
	var dishLink = document.createElement('a');
	var dishName = document.createTextNode(allDishes[i].name);
	dishLink.appendChild(dishName);
	dishLink.href = "#"
	cardContent.appendChild(dishLink);
	var cardAction = document.createElement('div')
	cardAction.setAttribute("class", "card-action");
	var p = document.createElement('p');
	var dishDescription = document.createTextNode(allDishes[i].description);
	p.appendChild(dishDescription);
	cardAction.appendChild(p);
	cardDiv.appendChild(cardImage);
	cardDiv.appendChild(cardContent);
	cardDiv.appendChild(cardAction);
	containerDiv.appendChild(cardDiv);

	//console.log(containerDiv);

	dishes.appendChild(containerDiv);
}

// this.pickDish.html(dishes);
document.getElementById("pickDishView").appendChild(dishes);

}


