
let cowGif;

function preload()
{
	cowGif = loadImage("cow.gif");
}

function setup()
{
createCanvas(400,800);

}

function draw()
{
background(255,0,0);    
image(cowGif,0,0);

fill(255);
ellipse(100, 100, 200, 200);


}