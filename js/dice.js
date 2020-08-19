 var canvasWidth = 880;
 var canvasHeight = 574;
 
 var spriteWidth = 293; 
 var spriteHeight = 287; 
 
 var rows = 2; 
 var cols = 3; 
 
 var width = spriteWidth/cols; 
 
 var height = spriteHeight/rows; 
 
 var curFrame = 0; 
 
 var frameCount = 6; 
 
 var x = 0 - (spriteWidth / frameCount);
 var y = 0 - (spriteHeight / frameCount); 
 
 var sourceX = 0; 
 var sourceY= 0; 
  
 var canvas = document.getElementById('canvas');
 
 canvas.width = canvasWidth;
 canvas.height = canvasHeight; 
 
 var ctx = canvas.getContext("2d");
 
 var character = new Image(); 
 character.src = "images/diceSpritesheet.jpg";
 
 
 function updateFrame(){
 curFrame = ++curFrame % frameCount; 
 sourceX = curFrame * width;
 sourceY = curFrame * height;
 ctx.clearRect(x-20,y,width,height); 
}

function draw(){
 updateFrame(); 
 ctx.drawImage(character,sourceX,sourceY,width,height,x,y,width,height);
}

function move(){
	if(x >= canvasWidth){	
	 x = 0 - (spriteWidth / frameCount)
	}else{x +=10;}
}

setInterval(draw,100);
setInterval(move,100);
