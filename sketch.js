
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
background(0);    
image(cowGif,0,0);

}