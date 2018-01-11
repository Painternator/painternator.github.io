// JavaScript Document
names = [];
qtyAlbums = [0,0,0,0,0];
price = [];

function buyAlbum1(){
	names.push($("#Album1Name").value);
	qtyAlbums[0] = qtyAlbums + 1;
	price.push($("#Album1Price").value);
	
	console.log("Buy Button Pressed");
	
	displayCart();
}

function buyAlbum2(){
	names.push($("#Album2Name").value);
	qtyAlbums[1] = qtyAlbums + 1;
	price.push($("#Album2Price").value);
	
	displayCart();
}

function buyAlbum3(){
	names.push($("#Album3Name").value);
	qtyAlbums[2] = qtyAlbums + 1;
	price.push($("#Album3Price").value);
	
	displayCart();
}

function buyAlbum4(){
	names.push($("#Album4Name").value);
	qtyAlbums[3] = qtyAlbums + 1;
	price.push($("#Album4Price").value);
	
	displayCart();
}

function buyAlbum5(){
	names.push($("#Album5Name").value);
	qtyAlbums[4] = qtyAlbums + 1;
	price.push($("#Album5Price").value);
	
	displayCart();
}

function displayCart(){
	cartdata = "<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr></table>";
	
	total = 0;
	
	for(i=0; i<names.length; i++){
		total += qtyAlbums[i]*price[i];
		cartdata += "<tr><td>" + names[i] + "</td><td>" + qtyAlbums[i] + "</td><td>" + price[i] + "</td><td>" + qtyAlbums[i]*price[i] + "</td><td><button onclick='delElement(" + i + ")'>Remove</button></td></tr>";
	}
	document.getElementById('cart_body').innerHTML = cartdata;
}

function delElement(a){
	names.splice(a,1);
	qtyAlbums(a,1);
	price(a,1);
	displayCart();	
}