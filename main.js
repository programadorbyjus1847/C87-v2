
// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_image(getImage)
{
	fabric.image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		new_image("rr1.png");
		console.log("r");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image("rr2.png");
		console.log("r");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image("rr3.png");
		console.log("r");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		new_image("rr4.png");
		console.log("r");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image("rr5.png");
		console.log("r"); 
	
}

