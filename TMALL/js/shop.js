window.onload = function(){
	
	 var jianshu = document.getElementById("jianshu");
     var topsum = document.getElementById("topsum");
     var zja = document.getElementById("zja");
     
     topsum.onclick = zongjiasum;
    
   function zongjiasum(){
   	   a = parseInt(zongjia.innerHTML)+parseInt(zongjiab.innerHTML)+parseInt(zongjiac.innerHTML)+parseInt(zongjiad.innerHTML);
   	   zja.innerHTML = a
   	    /*b = checked.length;
   	   jianshu.innerHTML = b;*/
   }
	
	
	
}
