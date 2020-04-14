var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var click1 = document.getElementById("btnclr1");
var click2 = document.getElementById("btnclr2");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";


	css.textContent = body.style.background + ";";
}


function randmColor() {
	 let color = "#";
for(let i = 0; i < 6; i++){
      color += Math.floor((Math.random() * 16)).toString(16);
}
  return color;

}


function setRandomGradient1() {
	
	var random1 = randmColor();
	color1.value = random1;
	

		body.style.background = 
		"linear-gradient(to right, " 
		+ random1
		+ ", " 
		+ color2.value 
		+ ")";


	css.textContent = body.style.background + ";";
	
}

function setRandomGradient2() {
	
	var random2 = randmColor();
	color2.value = random2;
	
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value
		+ ", " 
		+ random2 
		+ ")";


	css.textContent = body.style.background + ";";
	
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

click1.onclick = setRandomGradient1;
click2.onclick = setRandomGradient2;