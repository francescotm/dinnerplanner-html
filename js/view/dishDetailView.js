//ExampleView Object constructor
var DishDetailView = function(container, model) {
    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    var id = model.getDishId();
    console.log("dishDetailId in dishDetailView" + id);
    var dish = model.getDish(id);
    console.log("dish in dishDetailView " + dish);

    var container = document.createElement('div');
    container.setAttribute("id", "container-to-empty");


 var printDish = function(id) {
    var guests = model.getNumberOfGuests();
    //var dishDetail = document.getElementById("dishDetailView");
    //console.log("dishDetail " + dishDetail);
    
    // console.log(dish);
    container.innerHTML = "";
    console.log("this is the container in printdish() " +container);
    var dish = model.getDish(id);
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
    a.setAttribute("id", "backPickDish");
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
    yellowDiv.setAttribute("class", "col s12 m7 l7 amber lighten-3");
    var heading = document.createElement('h3');
    heading.setAttribute("class", 'small-heading');
    var t = document.createTextNode('Ingredients for ' + guests + ' people');
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
        td1.setAttribute("id", "ing-quant-"+x);
        var td1t = document.createTextNode(dish.ingredients[x].quantity * guests);
        td1.appendChild(td1t);
        var td2 = document.createElement('td');
        var td2t = document.createTextNode(dish.ingredients[x].name);
        td2.appendChild(td2t);
        var td3 = document.createElement('td');
        td3.setAttribute("id", "ing-price-"+x);
        var td3t = document.createTextNode(dish.ingredients[x].price * guests + " SEK");
        td3.appendChild(td3t);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        price += dish.ingredients[x].price * guests;
        tbody.appendChild(row);
    }
	// confirm dinner button
	var confirmButton = document.createElement('a');
	confirmButton.setAttribute("class", "btn");
    confirmButton.setAttribute("id", "confirmDishButton");
    confirmButton.setAttribute("data-id", id);
	var confirmText = document.createTextNode("Add Dish");
	confirmButton.appendChild(confirmText);

    // total price
	var totalRow = document.createElement('tr');
    totalRow.setAttribute("class", "totalPriceDish");
	var totalEmpty = document.createElement('td');
    var totalCostLabel = document.createElement('td');
    var totalCostLabelText = document.createTextNode("Total");
    totalCostLabel.appendChild(totalCostLabelText);
	var totalCost = document.createElement('td');
	totalCost.setAttribute("id", "single-dish-total-price");
	var totalCostText = document.createTextNode(price + " SEK");
	totalCost.appendChild(totalCostText);

	totalRow.appendChild(totalEmpty);
    totalRow.appendChild(totalCostLabel);
	totalRow.appendChild(totalCost);
	tbody.appendChild(totalRow);
    tbody.appendChild(confirmButton);


    table.appendChild(thead);
    table.appendChild(tbody);
    yellowDiv.appendChild(heading);
    yellowDiv.appendChild(table);
    container.appendChild(containerDiv);
    container.appendChild(yellowDiv);
    document.getElementById("dishDetailView").appendChild(container);
}    



//printDish();
//implement observer 
    model.addObserver(this);

    this.update = function(obj){
        if (obj == "setNumberOfGuests") {
            guests = model.getNumberOfGuests();
            printDish(id);
            // Heading with the number of guests
            // heading.innerHTML =  "Ingredients for " + model.getNumberOfGuests() + " people";
            // //price for each ingredient
            // for (var i = 0; i < dish.ingredients.length; i++) {
            //     var singleIngredientQuant = document.getElementById( "ing-quant-"+ i) ;
            //     singleIngredientQuant.innerHTML = dish.ingredients[i].quantity * guests;
            //     var singleIngredientPrice = document.getElementById( "ing-price-"+ i) ;
            //     singleIngredientPrice.innerHTML = dish.ingredients[i].price * guests + " SEK";
            // }
        //total price
            var totalPrice = document.getElementById("single-dish-total-price") ;
            totalPrice.innerHTML = model.getDishPrice(dish.id) + " SEK"; 
        } else if (obj == "dishId") {
            id = model.getDishId();
            printDish(id);
            console.log("im in dishDetailView update with dishID");
        }

        //confirm dish 
        
        //back to pick dish        
    };
    

    
    
}