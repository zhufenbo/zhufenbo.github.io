window.onload=function(){
	var suspend=document.getElementById("suspend");
	var H1=suspend.offsetTop;
	var leftNav=document.getElementById("left_nav");
	var a=leftNav.getElementsByTagName("li");
	window.onscroll=function(){
		var H=document.body.scrollTop||document.documentElement.scrollTop;
	console.log(H)
		if(H>H1){
			suspend.style.position="fixed";
			suspend.style.top="0";
			suspend.style.backgroundColor="#FFFFFF";
			suspend.style.borderBottom="1px solid black";

		}else{
			suspend.style.position="relative";
			suspend.style.borderBottom="none";
			suspend.style.backgroundColor="rgba(0,0,0,0)";
		}
		 
		 
		 if(H<700){
		 	leftNav.style.display="none";
		 }else if(H>700&&H<1280){
			leftNav.style.display="block";
			leftNav.style.position="fixed";
			leftNav.style.top="37px";
			leftNav.style.left="0px";
		    a[0].style.backgroundColor="#E5374D"
		    a[1].style.backgroundColor="#FFFFFF"
		    a[2].style.backgroundColor="#FFFFFF"
		    a[3].style.backgroundColor="#FFFFFF"
		    a[4].style.backgroundColor="#FFFFFF"
		}else if(H>1280&&H<1860){
			a[0].style.backgroundColor="#FFFFFF"
		    a[1].style.backgroundColor="#E5374D"
		    a[2].style.backgroundColor="#FFFFFF"
		    a[3].style.backgroundColor="#FFFFFF"
		    a[4].style.backgroundColor="#FFFFFF"
		}else if(H>1860&&H<2440){
			a[0].style.backgroundColor="#FFFFFF"
		    a[1].style.backgroundColor="#FFFFFF"
		    a[2].style.backgroundColor="#E5374D"
		    a[3].style.backgroundColor="#FFFFFF"
		    a[4].style.backgroundColor="#FFFFFF"
		}else if(H>2440&&H<3000){
			a[0].style.backgroundColor="#FFFFFF"
		    a[1].style.backgroundColor="#FFFFFF"
		    a[2].style.backgroundColor="#FFFFFF"
		    a[3].style.backgroundColor="#E5374D"
		    a[4].style.backgroundColor="#FFFFFF"
		}else if(H>3000&&H<3550){
			a[0].style.backgroundColor="#FFFFFF"
		    a[1].style.backgroundColor="#FFFFFF"
		    a[2].style.backgroundColor="#FFFFFF"
		    a[3].style.backgroundColor="#FFFFFF"
		    a[4].style.backgroundColor="#E5374D"
		}else{
			a[0].style.backgroundColor="#FFFFFF"
		    a[1].style.backgroundColor="#FFFFFF"
		    a[2].style.backgroundColor="#FFFFFF"
		    a[3].style.backgroundColor="#FFFFFF"
		    a[4].style.backgroundColor="#FFFFFF"
		}
	}
}
