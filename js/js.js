		var list = document.getElementsByTagName('li');
			// console.log(list)
			var flag = true;
			for(var i = 0; i < list.length; i++) {
				list[i].onclick = function() {	
				
			        var img = this.getElementsByTagName('img');
			        var span =this.getElementsByTagName('span');
					if(img[0].style.display === "block"){
						img[0].style.display = "none";
						img[1].style.display = "block";
						span[0].style.color="red";
					}else{
						img[1].style.display = "block";
						img[0].style.display = "none";
				       	span[0].style.color="blue";
					}
					 if(flag) {
					 	img[0].style.display = "none";
					 	img[1].style.display = "block";
					 	span[0].style.color="red";
					 	flag = false;
					 } else {
					 	img[0].style.display = "block";
					 	img[1].style.display = "none";
				        	span[0].style.color="blue";
					 	flag = true;
					 }
				}
			}
			
			
			
		