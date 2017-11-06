window.onload = function() {
	function fn(item, arrow, line) {
		for(var i = 0; i < item.length; i++) {
			item[i].index = i;
			item[i].onmouseover = function() {
				for(var j = 0; j < item.length; j++) {
					line[j].style.display = 'none';
				}
				line[this.index].style.display = 'block';
			}

			item[i].onmouseout = function() {
				for(var j = 0; j < item.length; j++) {
					arrow[j].style.backgroundPosition = 0 + 'px ' + 0 + 'px';
				}
				arrow[this.index].style.backgroundPosition = 0 + 'px ' + -10 + 'px';
			}
		}
	}
	var item = document.getElementById('hots').getElementsByClassName('item');
	var items = document.getElementById('hots1').getElementsByClassName('item');
	var line = document.getElementById('hots').getElementsByClassName('line2');
	var lines = document.getElementById('hots1').getElementsByClassName('line2');
	var arrow = document.getElementById('hots').getElementsByClassName('arrow');
	var arrows = document.getElementById('hots1').getElementsByClassName('arrow');
	fn(item, arrow, line);
	fn(items, arrows, lines);

	var inner = document.getElementsByClassName('inner')[0];
	var mask = document.getElementsByClassName('mask')[0];
	inner.onmouseover = function() {
		mask.style.visibility = 'visible';
	}
	inner.onmouseout = function() {
		mask.style.visibility = 'hidden';
	}

	var icon3 = document.getElementsByClassName('icon3');
	for(var i = 0; i < icon3.length; i++) {
		icon3[i].style.backgroundPosition = -220 + 'px ' + -(60 + i * 30) + 'px';
	}

	var toparea = document.getElementById("backarea")
	var obtn = document.getElementById('backtop'); //获取回到顶部按钮的ID
	var clientHeight = document.documentElement.clientHeight; //获取可视区域的高度
	var timer = null; //定义一个定时器
	var isTop = true; //定义一个布尔值，用于判断是否到达顶部

	window.onscroll = function() { //滚动条滚动事件

		//获取滚动条的滚动高度
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;

		if(osTop >= 50) { //如果滚动高度大于可视区域高度，则显示回到顶部按钮
			toparea.style.display = 'block';
		} else { //否则隐藏
			toparea.style.display = 'none';
		}

		//主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
		if(!isTop) {

			clearInterval(timer);
		}
		isTop = false;

	}

	obtn.onclick = function() { //回到顶部按钮点击事件
		//设置一个定时器
		timer = setInterval(function() {
			//获取滚动条的滚动高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			//用于设置速度差，产生缓动的效果
			var speed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
			isTop = true; //用于阻止滚动事件清除定时器
			if(osTop == 0) {
				clearInterval(timer);
			}
		}, 30);
	}
}