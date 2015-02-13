//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var id=1;
	var num = 4;
	var dish = model.getDish(id);
//create detail view 
	var containerDiv = document.createElement('div')
	containerDiv.setAttribute("class", "col s12 m5 l");
	var h3 = document.createElement('h3');
	var title = document.createTextNode(dish[id].title);
	h3.appendChild(title);
	//image
	var image = document.createElement('img');
	image.setAttribute("class", "responsive-img");
	image.setAttribute("src", "images/"+dish[id].image);
	//p
	var p = document.createElement('p');
	var desc = document.createTextNode(dish[id].description);
	p.appendChild(desc);
	var a = document.createElement('a');
	a.setAttribute('class', 'waves-effect waves-light btn');
	var i = document.createElement("i");
	i.setAttribute('class', 'mdi-navigation-arrow-back left');
	var buttonText= document.createTextNode("Back to select dish");
	a.appendChild(i)
	a.appendChild(buttonText);

	containerDiv.appendChild(h3);
	containerDiv.appendChild(img);
	containerDiv.appendChild(p);
	containerDiv.appendChild(a);

	var price = 0;
//create ingredients table 
	var yellowDiv = document.createElement('div')
	containerDiv.setAttribute("class", "col s12 m6 l6 amber lighten-3");
	var heading = document.createElement('h3');
	heading.setAttribute('small-heading');
	var t = document.createTextNode('Ingredients for' + num + 'people');
	heading.appendChild(t);
	var table = document.createElement('table');
	var thead = document.createElement('thead');
	var tr = document.createElement('tr');
	var th1 = document.createElement('th');
	var th1-t = document.createTextNode('Quantity');
	th1.appendChild(th1-t);
	var th2 = document.createElement('th');
	var th2-t = document.createTextNode('Ingredient');
	th2.appendChild(th2-t);
	var th3 = document.createElement('th');
	var th3-t = document.createTextNode('Price');
	th3.appendChild(th3-t);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	thead.appendChild(tr);
	for(var x=0; x<dish[id].ingredients.length; x++){
		var row = document.createElement('tr');
		var td1 = document.createElement('td');
		var td1-t = document.createTextNode(dish[id].ingredients.quantity*num);
		td1.appendChild(td1-t);
		var td2 = document.createElement('td');
		var td2-t = document.createTextNode(dish[id].ingredients.name);
		td2.appendChild(td2-t);
		var td3 = document.createElement('td');
		var td3-t = document.createTextNode(dish[id].ingredients.price*num);
		td3.appendChild(td3-t);
		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);

		price += dish[id].ingredients.price*num;  
	}
}


                   <div class="col s12 m6 l6 amber lighten-3">
                        <h3 class="small-heading">Ingredients for 4 people</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th data-field="ingredient-qnt">Quantity</th>
                                    <th data-field="ingredient-name">Ingredient</th>
                                    <th data-field="ingredient-price">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2 tbps</td>
                                    <td>Olive oil</td>
                                    <td>0.20</td>
                                </tr>
                                <tr>
                                    <td>750 gr.</td>
                                    <td>Lean beef mince</td>
                                    <td>10.00</td>
                                </tr>
                                <tr>
                                    <td>90 gr.</td>
                                    <td>Pack prosciutto</td>
                                    <td>15.00</td>
                                </tr>
                                <tr>
                                    <td>100 ml.</td>
                                    <td>Tomato sauce</td>
                                    <td>10.00</td>
                                </tr>
                                <tr>
                                    <td>200 ml.</td>
                                    <td>Hot beef stock</td>
                                    <td>20.00</td>
                                </tr>
                                <tr>
                                    <td><a class="btn">Confirm</a></td>
                                    <td></td>
                                    <td>SEK 77.20</td>
                                </tr>
                            </tbody>
                        </table>

                    </div> <!--table end-->