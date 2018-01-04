// JavaScript Document
$(document).ready(function()
	{console.log("ready!");
	
	news();
	submission();
})

var mousePressed = false;
var canvas, myContext;

window.onload = function(){
	init();
	console.log("ready");
}

function init(){
	canvas = document.getElementById("AlbumDrawing");
	myContext = canvas.getContext("2d");
	var x, y;
	var checkboxChecked = false;
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	canvas.addEventListener("click", function(e){
		x = e.pageX - this.offsetLeft;
		y = e.pageY - this.offsetTop;
		console.log("x= ", x, "y= ", y);
	});
	
	canvas.addEventListener("mousedown", function(e){
		mousePressed = true;
	});
	
	//canvas.addEventListener("mousemove", function(e){
		//mousePressed = true;
	//});
	
	canvas.addEventListener("mouseup", function(e){
		mousePressed = false;
	});
	
	canvas.addEventListener("mouseleave", function(e){
		mousePressed = false;
	});
	
	draw(x, y);
}

function draw(x, y){
	var lastX, lastY;
	
	if(mousePressed == true){
		myContext.beginPath();
		var color = $('#line_colour').val();
		var size = $('#line_size').val();
		console.log(color);
		console.log(size);
		myContext.strokeStyle = color;
		myContext.lineWidth = size;
		myContext.lineJoin = "round";
		myContext.moveTo(lastX, lastY);
		myContext.lineTo(x,y);
		myContext.closePath();
		myContext.stroke();
		lastX = x; lastY = y;
	}
}

function news(){
	//$('#NewsStory1').hide();
	//$('#NewsStory2').hide();
	
	$('#NewsList1').click(function(){
		console.log("click");
		event.preventDefault();
		$('#NewsStory1 h1').show(500);
		$('#NewsStory1 p').show(1000);
		$('#NewsStory2').hide(500);
	})

	$('#NewsList2').click(function(){
		event.preventDefault();
		$('#NewsStory2 h1').show(500);
		$('#NewsStory2 p').show(1000);
		$('#NewsStory1').hide(500);
	})	
}

function submission(){
	$('#submitBtn').click(function(){
		console.log("Submission");
		event.preventDefault();
		$('.Submission').val('');
		myContext.clearRect(0,0,canvas.width,canvas.height);
	})
}