<template>
  <div class="carousel-big">
			<!-- 第一个轮播图开始 -->
			<div id="banner">
				<div id="btn-left"></div>
				<ul id="ul-imgs">
					<li><a :href="`/#/detail?pid=5`"><img src="images/banner1.jpg"></a></li>
					<li><a :href="`/#/detail?pid=8`"><img src="images/banner2.jpg"></a></li>
					<li><a :href="`/#/detail?pid=6`"><img src="images/banner3.jpg"></a></li>
					<li><a :href="`/#/detail?pid=10`"><img src="images/banner4.jpg"></a></li>
					<li><a :href="`/#/detail?pid=40`"><img src="images/banner1.jpg"></a></li>
				</ul>
				<ul id="ul-idxs">
					<li class="active"></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div id="btn-right"></div>
			</div>
			<!-- 第一个轮播图结束 -->
      <div style="clear:both"></div>
      </div>
</template>
<script>
export default {
	name:"pro-four",
	props:{
		
	},
  data(){
    return{
     
    }
	},
	methods:{
		onload(){
      if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
			new WOW().init();
		};
    }
  },
  created(){
    this.onload()
  },
   mounted() {
    // <!-- 设置小点点的动态开始 -->
	
		var i = 0;
		var LIWIDTH = 1600;
		var DURATION = 500;
		var LICOUNT = 4;
		var ulImgs = this.$el.querySelector('#ul-imgs');
		var ulIdxs = document.getElementById("ul-idxs");
		var lis = ulIdxs.children;

		const moveTo = to => {
			if (to == undefined) {
				to = i + 1;
			}
			if (i == 0) {
				if (to > i) {
					ulImgs.className = "transition";
				} else {
					ulImgs.className = "";
					ulImgs.style.marginLeft = -LIWIDTH * LICOUNT + "px";
					setTimeout(function () {
						moveTo(LICOUNT - 1);
					}, 100);
					return;
				}
			}
			i = to;
			ulImgs.style.marginLeft = -i * LIWIDTH + "px";
			for (var li of lis) {
				li.className = ""
			}
			// console.log(i);
			if (i == LICOUNT) {
				i = 0;
				setTimeout(function () {
					ulImgs.className = "";
					ulImgs.style.marginLeft = 0;
				}, DURATION)
			}
			lis[i].className = "active";
		}

	// <!-- 轮播图设置小点点的动态结束 -->
	// <!-- 轮播图设置左右两边的箭头开始 -->
	
		var btnLeft = document.getElementById("btn-left");
		var btnRight = document.getElementById("btn-right");
		var canClick = true;
		btnLeft.onclick = function () {
			move(1)
		}

		function move(n) {
			if (canClick) {
				// console.log(i+n);
				moveTo(i + n);
				canClick = false;
				setTimeout(function () {
					canClick = true;
				}, DURATION + 100);
			}
		}
		btnRight.onclick = function () {
			move(-1);
		}
	
	// <!-- 轮播图设置左右两边的箭头结束 -->
	// <!-- 轮播图设置鼠标放到图片开始 -->

		var interval = 3000;
		var timer = setInterval(function () {
			moveTo()
		}, 3000);
		var banner = document.getElementById("banner");
		banner.onmouseover = function () {
			clearInterval(timer);
		}
		banner.onmouseout = function () {
			timer = setInterval(function () {
				moveTo()
			}, 3000);
		}

	// <!-- 轮播图设置鼠标放到图片结束 -->
		var ulIdxs = document.getElementById("ul-idxs");
		var canClick = true;
		ulIdxs.onclick = function (e) {
			if (canClick) {
				var li = e.target;
				if (li.nodeName == "LI") {
					if (li.className !== "active") {
						for (var i = 0; i < lis.length; i++) {
							if (lis[i] == li) {
								break;
							}
						}
						moveTo(i);
						setTimeout(function () {
							canClick = true;
						}, DURATION);
					}
				}
			}
		}

	// <!-- 轮播图JS结束 -->
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
			new WOW().init();
		};
	
	
  }
}
</script>
<style scoped>
.carousel-big{
  display:flex;
  justify-content: center;
  align-items: center;
  /* height:900px; */
  width:100%;
  margin:0 auto;
  padding:0 auto;
}

#banner{
    width: 1600px;
    height: 650px;
    position: relative;
    float: left; 
    overflow: hidden;
}
#ul-imgs img{
 width: 1600px;
}
#ul-imgs>li{
    width:1600px;
    float:left;
}
#ul-imgs{
list-style:none;
width:8000px;
}
#ul-imgs.transition{
    transition:all .5s linear;
  }

#ul-idxs{
    /* width:100px; */
    list-style:none;
    position:absolute;
    bottom:6%;
    left:50%;
    transform: translateX(-50%)
    
}
#ul-idxs>li{
    float:left;
    width:10px;
    height:10px;
    background-color: #fff;
    margin:0 5px;
    border-radius:50%;
    cursor:pointer;
}
#ul-idxs>li.active{
background-color: #333232;
}
#btn-left,#btn-right{
    width:60px;
    height:100%;
    position:absolute;
    top:0;
    background-repeat:no-repeat;
    background-position:center;
    cursor:pointer;
}
#btn-left{
    left:20px;
    background-image: url('../../assets/images/left_ar.png');
}
#btn-right{
    right:20px;
    background-image: url('../../assets/images/right_ar.png');
}
#btn-left:hover,#btn-right:hover{
    background-size: 40px 65px;
}
</style>