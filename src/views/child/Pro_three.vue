<template>
	<div class="content"  data-wow-duration="0.8s">
		<!-- <p  class=" wow bounceInLeft animated conimg-two" data-wow-delay="0.3s">关于我们</p>
		<p  class=" wow bounceInLeft animated conimg-two" data-wow-delay="0.4s">product</p> -->
		<div class="sangediv">
			<div class=" wow bounceInUp animated conimg-two" data-wow-delay="0.5s">
				<img src="images/15.png" alt=""><br>
				<img src="images/12.png" alt="">
				<hr><br>
				<p class=" wow bounceInLeft animated conimg-two" data-wow-delay="0.7s">公司全面推进企业信息化战略，实而现了从产品研发设计、采购、生产制造、物流、销售，到顾客售后服务的全价值链信息化集成管理。</p>
				<br>
				<p class=" wow bounceInLeft animated conimg-two" data-wow-delay="0.8s">公司全面推进企业信息化战略，实而现了从产品研发设计、采购、生产制造、物流、销售，到顾客售后服务的全价值链信息化集成管理。</p>
			</div>
			<div class=" wow bounceInDown animated conimg-two" data-wow-delay="0.6s">
				<img src="images/33.jpg" alt="">
			</div>
			<div class="more wow bounceInUp animated conimg-two" data-wow-delay="0.7s">
				<a href="javascript:;" class="">MORE
				
				</a>
				<p class="f-20 wow bounceInRight animated conimg-two" data-wow-delay="0.8s" id="">企业愿景</p>
				<p class="f-14 wow bounceInRight animated conimg-two" data-wow-delay="0.9s" >成为世界级家具制造商</p>
				<p class="f-20 wow bounceInRight animated conimg-two" data-wow-delay="1s" >价值观</p>
				<p class="f-14 wow bounceInRight animated conimg-two" data-wow-delay="1.1s" >创造美好家居生活</p>
				<p class="f-20 wow bounceInRight animated conimg-two" data-wow-delay="1.2s" >企业使命</p>
				<p class="f-14 wow bounceInRight animated conimg-two" data-wow-delay="1.3s" >忠诚、责任、感恩、奉献</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:"pro-three",
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
 
.content {
  width: 95%;
  height: 430px;
  border: 1px solid #fff;
  margin: 0 auto;
  margin-top: 34px;
  position: relative;
}
.sangediv{
  display:flex;
  justify-content: center;
  align-items: center

}
.content p:first-child {
  font-size: 20px;
  position: absolute;
  top: 15px;
  left: 10px;
}

.content>p:nth-child(2) {
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  position: absolute;
  top: 35px;
  left: 10px;
  margin-bottom: 20px;
  transition:all 0.5s linear;
}
.sangediv>div{
  padding:20px 50px;

}

.sangediv>div:first-child {
  width: 250px;
  padding-left:120px;
}
.sangediv hr {
  width: 80px;
  height: 1px;
  /* color: black; */
  background-color: #000;
}

.sangediv div:first-child p {
  font-size: 14px;
  color: #666
}

.sangediv div:last-child {
  width: 20%;
}
.more {
  display: inline-block;
  width: 150px;
  /* padding-left:20px; */
  /* height: 30px; */
  /* text-align: center; */
  /* position: relative; */
  transition: all .3s linear;
}
.more a{
  display: inline-block;
  width: 150px;
  padding-left:20px;

  line-height: 30px;
  border: 1px solid #000;
}

.more hr {
  position: absolute;
  left: 71%;
  top: 13px;
}

.more a:hover {
  background: #000;
  color: #fff
}
.more p{
  color:#666;
  font-size:16px;
  margin-top:10px;
  transition:all 0.5s linear;
}
.more p:nth-child(2n){
  font-weight: 700;
  margin-top:25px;
}
</style>