window.onload=function(){
	var sy1 =document.getElementById("sy1");
	var sy2 =document.getElementById("sy2");
	var sy3 =document.getElementById("sy3");
	var sy4 =document.getElementById("sy4");
	var sy5 =document.getElementById("sy5");
	sy1.onclick=function(){
		sy1.src="img/syy1_selected.jpg‘.png";
		sy2.src="img/sy2.png";
		sy3.src="img/sy3.png";
		sy4.src="img/sy4.png";
		sy5.src="img/sy5.png";
	}
	sy2.onclick=function(){
		sy1.src="img/sy1.png";
		sy2.src="img/syy2_selected.jpg‘.png";
		sy3.src="img/sy3.png";
		sy4.src="img/sy4.png";
		sy5.src="img/sy5.png";
	}
	sy3.onclick=function(){
		sy1.src="img/sy1.png";
		sy2.src="img/sy2.png";
		sy3.src="img/syy3_selected.jpg‘.png";
		sy4.src="img/sy4.png";
		sy5.src="img/sy5.png";
	}
	sy4.onclick=function(){
		sy1.src="img/sy1.png";
		sy2.src="img/sy2.png";
		sy3.src="img/sy3.png";
		sy4.src="img/syy4_selected.jpg‘.png";
		sy5.src="img/sy5.png";
	}
	sy5.onclick=function(){
		sy1.src="img/sy1.png";
		sy2.src="img/sy2.png";
		sy3.src="img/sy3.png";
		sy4.src="img/sy4.png";
		sy5.src="img/syy5_selected.jpg‘.png";
	}
}