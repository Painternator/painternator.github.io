// JavaScript Document
var canvas, context;

window.onload = function(){
	init();
	submission();
	console.log("ready");
}

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function init(){
	//calls canvas element
	canvas = document.getElementById("AlbumDrawing");
	context = canvas.getContext("2d");
	
	//Function to test if the mouse button is down
	$('#AlbumDrawing').mousedown(function(e){
		//variables find where the mouse is on the canvas
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		
		//sets the drawing boolean to true
		paint = true;
		//runs function to add the positions of the mouse to the arrays declared earlier
		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		//runs redraw function
		redraw();	
	});
	
	//Function to test if the mouse is moving or not
	$('#AlbumDrawing').mousemove(function(e){
		//tests if the boolean is true or not
		if(paint == true){
			//runs function to add the positions of the mouse to the arrays declared earlier
			addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
			//runs redraw function
			redraw();	
		}
	});
	
	//Function to test if the mouse button is up
	$('#AlbumDrawing').mouseup(function(e){
		paint = false;
	});
	
	//Function to test if the mouse leaves the canvas
	$('#AlbumDrawing').mouseleave(function(e){
		paint = false;
	});
}

function addClick(x, y, dragging){
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}

function redraw(){
	var colour = $('#line_colour').val();
	var size = $('#line_size').val();
  	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  
  	context.strokeStyle = colour;
	console.log($('#line_colour').val());
  	context.lineJoin = "round";
  	context.lineWidth = size;
	console.log($('#line_size').val());
			
  	for(var i=0; i < clickX.length; i++){		
		context.beginPath();
		if(clickDrag[i] && i)
		{
		  context.moveTo(clickX[i-1], clickY[i-1]);
		}
		else
		{
		   context.moveTo(clickX[i]-1, clickY[i]);
		}
		 
		 context.lineTo(clickX[i], clickY[i]);
		 context.closePath();
		 context.stroke();
	}
}

function submission(){
	$('#submitBtn').click(function(){
		console.log("Submission");
		event.preventDefault();
		$('.Submission').val('');
		myContext.clearRect(0,0,canvas.width,canvas.height);
	})
}