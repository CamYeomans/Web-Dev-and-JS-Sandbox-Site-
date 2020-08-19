 var canvasWidth = 840;
 var canvasHeight = 944;
 
 var spriteWidth = 168; 
 var spriteHeight = 189; 
 
 var rows = 5; 
 var cols = 5; 
 
 var width = spriteWidth/cols; 
 
 var height = spriteHeight/rows; 
 
 var curFrame = 0; 
 
 var frameCount = 25; 
 
 var x = 0;
 var y = 0; 
 
 var srcX = 0; 
 var srcY= 0; 
  
 var canvas = document.getElementById("canvas");
 
 canvas.width = canvasWidth;
 canvas.height = canvasHeight; 
 
 var ctx = canvas.getContext("2d");
 
 var character = new Image(); 
 character.src = "../images/diceSpritesheet.jpg";
 
 
 function updateFrame(){
 curFrame = ++curFrame % frameCount; 
 srcX = curFrame * width;
 ctx.clearRect(x-10,y,width,height); 
}

function draw(){
 updateFrame(); 
 ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
}

function move(){
	if(x >= canvasWidth){	
	 x = 0 - (spriteWidth / frameCount)
	}else{x +=10;}
}

setInterval(draw,100);
setInterval(move,100);
