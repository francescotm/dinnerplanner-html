//HomeView Object constructor
var HomeView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	// home main div row
	var homeRow = document.createElement('div');
	homeRow.setAttribute("class", "row home-cover");

	// responsive column
	var homeCol = document.createElement('div');
	homeCol.setAttribute("class", "col s12 m6");

	// pink card
	var pinkCard = document.createElement('div');
	pinkCard.setAttribute("class", "card pink lighten-1");
	// card content
	var cardContent = document.createElement('div');
	cardContent.setAttribute("class", "card-content white-text");
	// title
	var cardTitle = document.createElement('span');
	cardTitle.setAttribute("class", "card-title");
	var cardTitleText = document.createTextNode("A home dinner service");
	cardTitle.appendChild(cardTitleText);
	// description
	var description = document.createElement('p');
	var descriptionText = document.createTextNode("Create your awesome dinner now. Have fun with friends, explore new dishes, find the perfect recipe. Start now.")
	description.appendChild(descriptionText);
	// append stuff
	cardContent.appendChild(cardTitle); // title
	cardContent.appendChild(description);
	// card action
	var cardAction = document.createElement('div');
	cardAction.setAttribute("class", "card-action white-text");
	var link = document.createElement('a');
	link.setAttribute("href", "#");
	link.setAttribute("id", "create-new-dinner");
	var linkText = document.createTextNode("Create a new dinner");
	link.appendChild(linkText);
	cardAction.appendChild(link);

	// append everything
	pinkCard.appendChild(cardContent);
	pinkCard.appendChild(cardAction);
	homeCol.appendChild(pinkCard);
	homeRow.appendChild(homeCol);

	document.getElementById("homeView").appendChild(homeRow);

}


