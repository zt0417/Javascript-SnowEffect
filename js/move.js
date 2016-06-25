window.onload=function(){
	init();
}

function creatDiv(){
	var snowDiv=document.createElement("div");
	document.getElementById("snow_js").appendChild(snowDiv);
	var whatName=["snow_one parent","snow_two parent","snow_three parent","snow_four oparent"];
	var index=Math.floor(Math.random()*whatName.length);
	snowDiv.className=whatName[index];
	var whatLeft=getLeft()+'px';
	snowDiv.style.left=whatLeft;
	return snowDiv;
}

function getLeft(){
	var eleParent=document.getElementById("snow_js");
	var style=window.getComputedStyle(eleParent);
	var maxWidth=parseInt(style.width)+70;
	var randomLeft=Math.floor(Math.random()*maxWidth);
	return randomLeft;
}

function moveDown(){
	var moveElem=creatDiv();
	var eleStyle=window.getComputedStyle(moveElem);
	var eleTop=parseInt(eleStyle.top);
	var t=setInterval(function(){
		eleTop++;
		moveElem.style.top=eleTop+"px";
		if(eleTop>=window.innerHeight){
			clearInterval(t);
			document.getElementById("snow_js").removeChild(moveElem);
		}
	},10);
}

function init(){
	document.body.style.height=window.innerHeight="px";
	var t=setInterval(function(){
		moveDown();
	},100);
}