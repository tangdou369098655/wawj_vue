<template>
<div class="content2">
		<div class="con_sco_div">
			<div class="  pro-four"  >
        <a :href="`/#/detail?pid=36`">
				<img src="images/22.jpg" class=" wow flipInX animated" data-wow-delay="0.2s"  style="width:100%;"></a>
				<p>拉丝小台灯</p>
			</div>
			<div class="  pro-four"> <a :href="`/#/detail?pid=44`">
				<img src="images/28.jpg" class=" wow flipInX animated" data-wow-delay="0.4s"   style="width:100%;"></a>
				<p>银色金属圆桌</p>
			</div>
			<div class="  pro-four"> <a :href="`/#/detail?pid=66`">
				<img src="images/19.jpg" class=" wow flipInX animated" data-wow-delay="0.6s"   style="width:100%;"></a>
				<p>深灰木纹台灯</p>
			</div>
			<div class="  pro-four"> <a :href="`/#/detail?pid=88`">
				<img src="images/30.jpg" alt="" class=" wow  flipInX animated" data-wow-delay="0.8s"   style="width:100%;"></a>
				<p>居家立式台灯</p>
			</div>
		</div>
		
	</div>
</template>
<script>
import axios from 'axios'
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
  }
}
</script>
<style scoped>

.more {
  display: inline-block;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #000;
  position: relative;
  transition: all .3s linear;
}

.more hr {
  position: absolute;
  left: 71%;
  top: 13px;
}

.more:hover {
  background: #000;
  color: #fff
}
.content2 {
  width: 95%;
  height: 400px;
  border: 1px solid #fff;
  margin: 20px auto 0;
  position: relative;
}

.content2 p:first-child {
  font-size: 20px;
  position: absolute;
  top: 15px;
  left: 10px;
}

.content2>div>p:nth-child(2) {
  font-size: 16px;
  color: #666;
  margin-top: 5px;
  position: absolute;
  top: 35px;
  left: 10px;
  margin-bottom: 20px;
}

.fr {
  float: right;
}

.content2 div:first-child span {
  margin-top: 20px;
  font-size: 14px;
}

.con_sco_div {
  /* margin-top: 5rem; */
  display: flex;
  width:100%;
  justify-content: space-between;
}

.con_sco_div div {
  /* width: 24%; */
  text-align: center;
}

.con_sco_div div p {
  font-size: 20px;
}

.mt {
  margin-top: 25px;
}

.w40 {
  width: 40px;
  margin-left: 10px;
}
.content2 .con_sco_div .pro-four{
  width:23%;
}
</style>