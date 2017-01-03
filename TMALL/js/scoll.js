
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			*{margin: 0;padding: 0;}
			#container{
				width: 500px;
				margin: 0 auto;
				border: 1px solid;
				position: relative;
			}
			#title{
				position: absolute;
				left: 200px;
				top: 50px;
			}
			#title a{
				width: 10px;
				height: 10px;
				border-radius: 50%;
				color: #fff;
				font-size: 10px;
				display: inline-block;
				background: black;
				text-align: center;
				padding: 5px;
				text-decoration: none;
			}
			#article div{display: none;padding: 20px;}
			#article .show{display: block;}
			.pointShow{
				background: yellow!important;
				color: #000!important;
			}
			#container b{position: absolute;padding: 5px;background: #fff;cursor: pointer;}
			#left{top: 50px;}
			#right{top: 50px;right: 0;}
		</style>
	</head>
	<body>
		<div id="container">
			<div id="title">
				<a href="#" class="pointShow">1</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">5</a>
				<a href="#">6</a>
			</div>
			<b id="left">&lt;</b>
			<b id="right">&gt;</b>
			<div id="article">
				<div class="show" style="background: lightgreen;">
					<p>小金库开白条享3万额度</p>
					<p>大促返场 笔记本低至799元</p>
					<p>每日享折扣 京东品质游</p>
				</div>
				<div style="background: lightcoral;">
					<p>你喜欢我什么</p>
					<p>一个时间点</p>
					<p>一件小事</p>
					<p>形容润色</p>
					<p>海誓山盟</p>
				</div>
				<div style="background: lightgreen;">
					<p>小金库开白条享3万额度</p>
					<p>大促返场 笔记本低至799元</p>
					<p>每日享折扣 京东品质游</p>
				</div>
				<div style="background: lightcoral;">
					<p>你喜欢我什么</p>
					<p>一个时间点</p>
					<p>一件小事</p>
					<p>形容润色</p>
					<p>海誓山盟</p>
				</div>
				<div style="background: lightgreen;">
					<p>小金库开白条享3万额度</p>
					<p>大促返场 笔记本低至799元</p>
					<p>每日享折扣 京东品质游</p>
				</div>
				<div style="background: lightcoral;">
					<p>你喜欢我什么</p>
					<p>一个时间点</p>
					<p>一件小事</p>
					<p>形容润色</p>
					<p>海誓山盟</p>
				</div>
			</div>
		</div>
		
		<script type="text/javascript">
			var num = 0;   //旧图片的下标
			var index;     //新图片的下标
			var a = document.getElementsByTagName("a");
			var div = document.getElementById("article").getElementsByTagName("div");
			var parent = document.getElementById("container");
			var left = document.getElementById("left");
			var right = document.getElementById("right");
			
			var timer = setInterval(autoMove,1000);
			function autoMove(){
				index = num+1;
				if(index==div.length){index=0;} //超出最后一张图片就返回第一张
				move();			//没有对象调用，this指向window
			}
			
			for(var i=0;i<div.length;i++){
				a[i].index = i;				//存储对应<a>的下标
				a[i].onmouseover = move;   //有对象调用，this指向调用者
			}
			
			function move(){
				a[num].className = "";
				a[this.index].className = "pointShow";
				div[num].className = "";
				div[this.index].className = "show";
				num = this.index;
			}
			
			parent.onmouseover = function(){
				clearInterval(timer);
			}
			parent.onmouseout = function(){
				timer = setInterval(autoMove,1000)
			}

			left.onclick = function(){
				index = num-1;
				if(index<0){index=div.length-1}
				move();
			}
			right.onclick = autoMove;

		</script>
	</body>
</html>
