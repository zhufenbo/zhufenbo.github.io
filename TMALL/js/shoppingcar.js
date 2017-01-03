window.onload = function(){
	    var mybaobei = document.getElementById("mybaobei");
		var abaobei = document.getElementById("abaobei");
		var resshou = document.getElementById("resshou");
		var shoucang = document.getElementById("shoucang");
		
		
		wangzhandaohang.onmouseover = show4;
		wangzhandaohang.onmouseout = showoff4;
		wangzhan.onmouseover = show4;
		wangzhan.onmouseout = showoff4;
		abaobei.onmouseover = show1;
		abaobei.onmouseout = showoff1;
		mybaobei.onmouseover = show1;
		mybaobei.onmouseout = showoff1;
		resshou.onmouseover = show2;
		resshou.onmouseout = showoff2;
		shoucang.onmouseover = show2;
		shoucang.onmouseout = showoff2;
		
		
		
		function show1(){
			mybaobei.style.display = "block";
		}
		function showoff1(){
			mybaobei.style.display = "none";
		}
		function show4(){
			wangzhan.style.display = "block";
		}
		function showoff4(){
			wangzhan.style.display = "none";
		}
		function show2(){
			shoucang.style.display = "block";
		}
		function showoff2(){
			shoucang.style.display = "none";
		}
		
    var checktwo = document.getElementById("checktwo");
     var shopa = document.getElementById("shopa");
     var sub = document.getElementById("sub");
     var ssub = document.getElementById("ssub");
     var ssum = document.getElementById("ssum");
     var zongjia = document.getElementById("zongjia");
     var youhuiquan = document.getElementById("youhuiquan");
    var shopa = document.getElementById("shopa");
    
    var checkthree = document.getElementById("checkthree");
     var shopb = document.getElementById("shopb");
     var subb = document.getElementById("subb");
     var ssubb = document.getElementById("ssubb");
     var ssumb= document.getElementById("ssumb");
     var zongjiab = document.getElementById("zongjiab");
     var youhuiquan = document.getElementById("youhuiquan");
     var shopb = document.getElementById("shopb");
     
      var checkfour = document.getElementById("checkfour");
     var shopc = document.getElementById("shopc");
     var subc = document.getElementById("subc");
     var ssubc = document.getElementById("ssubc");
     var ssumc= document.getElementById("ssumc");
     var zongjiac = document.getElementById("zongjiac");
     var youhuiquanb = document.getElementById("youhuiquanb");
     var shopc = document.getElementById("shopc");
     
     var checkfive = document.getElementById("checkfive");
     var shopd = document.getElementById("shopd");
     var subd = document.getElementById("subd");
     var ssubd = document.getElementById("ssubd");
     var ssumd= document.getElementById("ssumd");
     var zongjiad = document.getElementById("zongjiad");
     var youhuiquanb = document.getElementById("youhuiquanb");
     var shopd = document.getElementById("shopd");
    
     
    shopa.onclick = changeshopone;
    ssum.addEventListener("click",jiafa,false);
    ssum.addEventListener("click",zongjiasum,false);
    ssub.addEventListener("click",jianfa,false);
    ssub.addEventListener("click",zongjiasum,false);
    
    shopb.onclick = changeshoptwo;
     ssumb.addEventListener("click",jiafab,false);
    ssumb.addEventListener("click",zongjiasum,false);
    ssubb.addEventListener("click",jianfab,false);
    ssubb.addEventListener("click",zongjiasum,false);
   /* ssubb.onclick = jianfab;
    ssumb.onclick = jiafab;*/
    
    shopc.onclick = changeshopthree;
     ssumc.addEventListener("click",jiafac,false);
    ssumc.addEventListener("click",zongjiasum,false);
    ssubc.addEventListener("click",jianfac,false);
    ssubc.addEventListener("click",zongjiasum,false);
    /*ssubc.onclick = jianfac;
    ssumc.onclick = jiafac;*/
    
    shopd.onclick = changeshopfour;
     ssumd.addEventListener("click",jiafad,false);
    ssumd.addEventListener("click",zongjiasum,false);
    ssubd.addEventListener("click",jianfad,false);
    ssubd.addEventListener("click",zongjiasum,false);
   /* ssubd.onclick = jianfad;
    ssumd.onclick = jiafad;*/
   
   
   
    function jiafa(){
    	sub.value = parseInt(sub.value)+1;	
    	zongjia.innerHTML = parseInt(sub.value)*158-parseInt(youhuiquan.value);	
    	 
    }
    function jianfa(){
    	if(sub.value == 0){
    		zongjia.innerHTML = 0;
    	}else if(sub.value>1){
    		sub.value = parseInt(sub.value)-1;
    		 zongjia.innerHTML = parseInt(sub.value)*158-parseInt(youhuiquan.value);
    	}else if(sub.value == 1){
    		sub.value = parseInt(sub.value)-1;
    		if(youhuiquan.value!=0){
    			zongjia.innerHTML = 0;
    		}else{
    			zongjia.innerHTML = parseInt(sub.value)*158;
    		}
    	}
    }
    
    function changeshopone(){
    	if(checktwo.checked){
    		shopa.style.background = "#eee";
    	}else{
    		shopa.style.background = "none";
    	}
    	
    }
    
     function jiafab(){
    	subb.value = parseInt(subb.value)+1;	
    	zongjiab.innerHTML = parseInt(subb.value)*200-parseInt(youhuiquan.value);	
    	 
    }
    function jianfab(){
    	if(subb.value == 0){
    		zongjiab.innerHTML = 0;
    	}else if(subb.value>1){
    		subb.value = parseInt(subb.value)-1;
    		 zongjiab.innerHTML = parseInt(subb.value)*200-parseInt(youhuiquan.value);
    	}else if(subb.value == 1){
    		subb.value = parseInt(subb.value)-1;
    		if(youhuiquan.value!=0){
    			zongjiab.innerHTML = 0;
    		}else{
    			zongjiab.innerHTML = parseInt(subb.value)*200;
    		}
    	}
    }
    
    function changeshoptwo(){
    	if(checkthree.checked){
    		shopb.style.background = "#eee";
    	}else{
    		shopb.style.background = "none";
    	}
    	
    }
    
    function jiafac(){
    	subc.value = parseInt(subc.value)+1;	
    	zongjiac.innerHTML = parseInt(subc.value)*500-parseInt(youhuiquanb.value);	
    	 
    }
    function jianfac(){
    	if(subc.value == 0){
    		zongjiac.innerHTML = 0;
    	}else if(subc.value>1){
    		subc.value = parseInt(subc.value)-1;
    		 zongjiac.innerHTML = parseInt(subc.value)*500-parseInt(youhuiquanb.value);
    	}else if(subc.value == 1){
    		subc.value = parseInt(subc.value)-1;
    		if(youhuiquan.value!=0){
    			zongjiac.innerHTML = 0;
    		}else{
    			zongjiac.innerHTML = parseInt(subc.value)*500;
    		}
    	}
    }
    
    function changeshopthree(){
    	if(checkfour.checked){
    		shopc.style.background = "#eee";
    	}else{
    		shopc.style.background = "none";
    	}
    	
    }
    
    function jiafad(){
    	subd.value = parseInt(subd.value)+1;	
    	zongjiad.innerHTML = parseInt(subd.value)*900-parseInt(youhuiquanb.value);	
    	 
    }
    function jianfad(){
    	if(subd.value == 0){
    		zongjiad.innerHTML = 0;
    	}else if(subd.value>1){
    		subd.value = parseInt(subd.value)-1;
    		 zongjiad.innerHTML = parseInt(subd.value)*900-parseInt(youhuiquanb.value);
    	}else if(subd.value == 1){
    		subd.value = parseInt(subd.value)-1;
    		if(youhuiquan.value!=0){
    			zongjiad.innerHTML = 0;
    		}else{
    			zongjiad.innerHTML = parseInt(subd.value)*900;
    		}
    	}
    }
    
    function changeshopfour(){
    	if(checkfive.checked){
    		shopd.style.background = "#eee";
    	}else{
    		shopd.style.background = "none";
    	}
    	
    }
    
    var shanchua = document.getElementById("shanchua");
    var shanchub = document.getElementById("shanchub");
    var shanchuc = document.getElementById("shanchuc");
    var shanchud = document.getElementById("shanchud");
    
    shanchua.onclick = function(){
    	shopa.parentNode.removeChild(shopa); 
    }
    shanchub.onclick = function(){
    	shopb.parentNode.removeChild(shopb); 
    }
    shanchuc.onclick = function(){
    	shopc.parentNode.removeChild(shopc); 
    }
    shanchud.onclick = function(){
    	shopd.parentNode.removeChild(shopd); 
    }
    
    var cb = document.getElementById("cb");
    var cbc = document.getElementById("cbc");
    var checkone = document.getElementById("checkone");
     var chec = document.getElementById("chec");
    
    
    checkone.onclick = quan;
  
   
    
    function quan(){
    	if(checkone.checked){
    		checktwo.checked = "checked";
    		cb.checked = "checked";
    		cbc.checked = "checked";
    		checkthree.checked = "checked";
    		shopa.style.background = "#eee";
    		shopb.style.background = "#eee";
    		checkfour.checked = "checked";
    		checkfive.checked = "checked";
    		shopc.style.background = "#eee";
    		shopd.style.background = "#eee";
    	}else{
    		checktwo.checked = "";
    		cb.checked = "";
    		cbc.checked = "";
    		checkthree.checked = "";
    		shopa.style.background = "none";
    		shopb.style.background = "none";
    		checkfive.checked = "";
    		checkfour.checked = "";
    		shopc.style.background = "none";
    		shopd.style.background = "none";
    	}
    }
    cb.onclick = function(){
    	if(cb.checked){
    		checktwo.checked = "checked";
    		checkthree.checked = "checked";
    		shopa.style.background = "#eee";
    		shopb.style.background = "#eee";
    	}else{
    		checktwo.checked = "";
    		checkthree.checked = "";
    		shopa.style.background = "none";
    		shopb.style.background = "none";
    	}
    	
    }
     cbc.onclick = function(){
    	if(cbc.checked){
    		checkfour.checked = "checked";
    		checkfive.checked = "checked";
    		shopc.style.background = "#eee";
    		shopd.style.background = "#eee";
    	}else{
    		checkfive.checked = "";
    		checkfour.checked = "";
    		shopc.style.background = "none";
    		shopd.style.background = "none";
    	}
    	
    }  
    
     var jianshu = document.getElementById("jianshu");
     var topsum = document.getElementById("topsum");
     var zja = document.getElementById("zja");
     var b = document.getElementById("b");
     var s = document.getElementById("s");
     var o = document.getElementsByClassName("o")[0];
     var o1 = document.getElementsByClassName("o")[1];
     
     topsum.onclick = zongjiasum;
     b.onclick = zongjiasum;
     
    function chan(a,b){
    	if(a == true){
    		return a = b.value;
    	}else if(a == false){
    		return a = 0;
    	}
    }
    
    function channgeo(a,b){
    	if(a.checked == true){
    		return a = b.innerHTML;
    	}else if(a.checked == false){
    		return a = 0;
    	}
    }
    
   function zongjiasum(){
   	 o.innerHTML = parseInt(chan(checktwo.checked,sub))+parseInt(chan(checkthree.checked,subb))+parseInt(chan(checkfour.checked,subc))+parseInt(chan(checkfive.checked,subd));
   	 o1.innerHTML =  o.innerHTML;
   
   	a = parseInt(channgeo(checktwo,zongjia))+parseInt(channgeo(checkthree,zongjiab))+parseInt(channgeo(checkfour,zongjiac))+parseInt(channgeo(checkfive,zongjiad));
   	zja.innerHTML = a
   	s.innerHTML = a;
    }
   
   var js = document.getElementsByClassName("sh")[0];
   window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop; 
    
    if( t >= 200 ) {
        js.style.display = "block";
    } else {
        js.style.display = "none";
    }
}
}
