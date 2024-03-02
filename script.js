let x = Math.floor(Math.random() * 1000) + 0;
let y = Math.floor(Math.random() * 1000) + 0;
let colors = ["white", "black"];
let colors2 = ["black", "white"];
let indice1 = 0;
let indice2 = 0;

function cores(){
	indice1 += 1;
	if(indice1>=2){
		indice1 = 0;
	}
	document.querySelector("*").style.backgroundColor = colors[indice1];
	indice2 += 1;
	if(indice2>=2){
		indice2 = 0;
	}
	document.getElementById("text").style.color = colors2[indice2];
	document.getElementById("text").style.backgroundColor = colors[indice2];
	setTimeout(cores, 500);
}
cores();
window.onbeforeunload = function(event){
	window.open("index.html");
	alert("voce nao ira sair");
	event.preventDefault();
}
function move(){
	x = Math.floor(Math.random() * 1000) + 0;
	y = Math.floor(Math.random() * 1000) + 0;
	window.open("index.html", "width=400", "height=400").moveTo(x,y);
	setTimeout(move, 100);
}
move();
