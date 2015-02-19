//ExampleView Object constructor
var DishDetailView = function(container, model) {
    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    var id = 1;
    var num = 1;
    this.dishDetail = container.find("#dishDetail");
    var dish = model.getDish(id);
    console.log(dish);
    var container = document.createElement('div');
    //create detail view 
    var containerDiv = document.createElement('div')
    containerDiv.setAttribute("class", "col s12 m5 l5");
    var h3 = document.createElement('h3');
    var title = document.createTextNode(dish.name);
    h3.appendChild(title);
    //image
    var image = document.createElement('img');
    image.setAttribute("class", "responsive-img");
    image.setAttribute("src", "images/" + dish.image);
    //p
    var p = document.createElement('p');
    var desc = document.createTextNode(dish.description);
    p.appendChild(desc);
    var a = document.createElement('a');
    a.setAttribute('class', 'waves-effect waves-light btn');
    var i = document.createElement("i");
    i.setAttribute('class', 'mdi-navigation-arrow-back left');
    var buttonText = document.createTextNode("Back to select dish");
    a.appendChild(i)
    a.appendChild(buttonText);
    containerDiv.appendChild(h3);
    containerDiv.appendChild(image);
    containerDiv.appendChild(p);
    containerDiv.appendChild(a);
    var price = 0;
    //create ingredients table 
    var yellowDiv = document.createElement('div')
    yellowDiv.setAttribute("class", "col s12 m6 l6 amber lighten-3");
    var heading = document.createElement('h3');
    heading.setAttribute("class", 'small-heading');
    var t = document.createTextNode('Ingredients for ' + num + ' people');
    heading.appendChild(t);
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th1t = document.createTextNode('Quantity');
    th1.appendChild(th1t);
    var th2 = document.createElement('th');
    var th2t = document.createTextNode('Ingredient');
    th2.appendChild(th2t);
    var th3 = document.createElement('th');
    var th3t = document.createTextNode('Price');
    th3.appendChild(th3t);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);
    var tbody = document.createElement('tbody');
    for (var x = 0; x < dish.ingredients.length; x++) {
        var row = document.createElement('tr');
        var td1 = document.createElement('td');
        var td1t = document.createTextNode(dish.ingredients[x].quantity * num);
        td1.appendChild(td1t);
        var td2 = document.createElement('td');
        var td2t = document.createTextNode(dish.ingredients[x].name);
        td2.appendChild(td2t);
        var td3 = document.createElement('td');
        var td3t = document.createTextNode(dish.ingredients[x].price * num + " SEK");
        td3.appendChild(td3t);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        price += dish.ingredients[x].price * num;
        tbody.appendChild(row);
    }
	// confirm dinner button
	var confirmButton = document.createElement('a');
	confirmButton.setAttribute("class", "btn");
	var confirmText = document.createTextNode("Confirm Dish");
	confirmButton.appendChild(confirmText);

    // total price
	var totalRow = document.createElement('tr');
	var totalEmpty = document.createElement('td');
	var totalCost = document.createElement('td');
	totalCost.setAttribute("id", "dish-total-price");
	var totalCostText = document.createTextNode("Total: " + price + " SEK");
	
	totalCost.appendChild(totalCostText);
	totalRow.appendChild(confirmButton);
	totalRow.appendChild(totalEmpty);
	totalRow.appendChild(totalCost);
	tbody.appendChild(totalRow);





    table.appendChild(thead);
    table.appendChild(tbody);
    yellowDiv.appendChild(heading);
    yellowDiv.appendChild(table);
    container.appendChild(containerDiv);
    container.appendChild(yellowDiv);
    document.getElementById("dishDetail").appendChild(container);
}