canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d");

car_width=75;
car_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x=5;
car_y=225;

function add() {
	background_img= new Image();
    background_img.onload=uploadBackground;
    background_img.src =background_image;

    car_img= new Image();
    car_img.onload=uploadgreencar;
    car_img.src=greencar_image;
}

function uploadBackground() {
		ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_img,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if (car_y>0) {
		car_y=car_y-10;
		console.log("When up key is pressed, x =" +car_x + ",y=" +car_y);
	uploadBackground();
	uploadgreencar();
	}
}

function down(){
	if (car_y<600) {
        car_y=car_y+10;
        console.log("When down key is pressed, x =" +car_x + ",y=" +car_y);
        uploadBackground();
        uploadgreencar();
    }
}
function left(){
	if (car_x>0) {
		car_x=car_x-10;
		console.log("When left key is pressed, x =" +car_x + ",y=" +car_y);
	uploadBackground();
	uploadgreencar();
	}
}

function right(){
	if (car_x < 800) {
        car_x = car_x + 10;
        console.log("When right key is pressed, x =" + car_x + ",y=" + car_y);
        uploadBackground();
        uploadgreencar();
    }	
}
