
var inputFocus = function(){
	var inputDiv = document.getElementById('search').getElementsByTagName('li')[1];
	var input = inputDiv.getElementsByTagName('input')[0];
	input.oninput = function(){
		if(input.value)
			inputDiv.style.width = "65%";
		else
			inputDiv.style.width = "78%";
	}


	var resetImg = document.getElementById("reset");
	resetImg.onclick = function(e){
		input.value = "";
		inputDiv.style.width = "78%";
	}
}


var animate = function(item,speed){

	var func = function(){
		// alert(parseInt(item.style.left));
		// console.log(parseInt(item.style.left));
		if(!item.style.left || parseInt(item.style.left) < 0)
		{
			if(item.style.left)
			{
				if(parseInt(item.style.left) > speed * -1)
					item.style.left = "0";
				else
					item.style.left = parseInt(item.style.left) + speed + "%";
			}
			else
				item.style.left = -60 + speed + "%";
			requestAnimationFrame(func);
		}
	}
	requestAnimationFrame(func);
	
}



var showBar = function(){
	var showBut = document.getElementById("showBar");
	var barL = document.getElementById("leftBar");
	var barR = document.getElementById("rightBar");
	showBut.onclick = function(e){
		// barL.style.left = "0rem";
		animate(barL,5);
		barR.style.right = "0rem";
		document.documentElement.style.overflow='hidden';
		// document.body.setAttribute("onmousewheel","return false;");
		// barL.className = "showBar";

		window.ontouchmove=function(e){
	        e.preventDefault && e.preventDefault();
	        e.returnValue=false;
	        e.stopPropagation && e.stopPropagation();
	        return false;
		}

	}
	barR.onclick = function(e){
		barL.style.left = "-60%";
		barR.style.right = "-100%";
		document.documentElement.style.overflow='';
		window.ontouchmove = function(){};
		// barL.className = "";
	}
}
















window.onload = function(){
	inputFocus();
	showBar();
}