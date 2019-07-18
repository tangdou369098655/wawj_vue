<template>
<div class="content3">
		<div class="con3-sco wow bounceInLeft animated" data-wow-delay="0.5s">
			<img src="images/2.jpg"  >
		</div>
		<div class="con-new">
			<ul>
				<li>
					<div class="fl w-30">
						<p class="p-25 wow bounceInRight animated conimg-two" data-wow-delay="0.3s">2018</p>
						<p class="p-20 wow bounceInRight animated conimg-two" data-wow-delay="0.5s">05/28</p>
					</div>
					<div class="fr w-70">
						<p class="p-16 wow bounceInRight animated conimg-two" data-wow-delay="0.6s">家居电商首部送装标准将出台 树立行业服务标杆</p>
						<p class="p-12 wow bounceInRight animated conimg-two" data-wow-delay="0.8s">
							2018年5月24日，《家居电商送货与安装服务标准》专家终审会在京东集团举行，由住建部、国标委、环保部环境认证中心......
						</p>
					</div>
				</li>
				<li>
					<div class="fl w-30">
						<p class="p-25 wow bounceInRight animated conimg-two" data-wow-delay="0.4s">2018</p>
						<p class="p-20 wow bounceInRight animated conimg-two" data-wow-delay="0.6s">05/26</p>
					</div>
					<div class="fr w-70">
						<p class="p-16 wow bounceInRight animated conimg-two" data-wow-delay="0.8s" >整木家居发展潜力无限，为地板业带来了哪些商机？</p>
						<p class="p-12 wow bounceInRight animated conimg-two" data-wow-delay="1s" >
							整木家装早已不是陌生词汇，与发达国家相比，我国的整木家居似乎只在极少数的家庭中存在。但最近几年，整木家居似乎......
						</p>
						</div>
				</li>
				<li>
					<div class="fl w-30">
						<p class="p-25 wow bounceInRight animated conimg-two" data-wow-delay="0.6s">2018</p>
						<p class="p-20 wow bounceInRight animated conimg-two" data-wow-delay="0.8s">05/24</p>
					</div>
					<div class="fr w-70">
						<p class="p-16 wow bounceInRight animated conimg-two" data-wow-delay="1s">工业4.0五大产业链打造出智能工厂</p>
						<p class="p-12 wow bounceInRight animated conimg-two" data-wow-delay="1.2s" >
							在智能工厂里，机器和设备将具有提升的自我优化和自主决策的能力。这与今日运行固定程序操作的情况形成了鲜明的对比......
						</p>
						</div>
				</li>
			</ul>
		</div>
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
  }
}
</script>
<style scoped>

.content3 {

  width: 95%;
  height: 420px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}



.content3>div:first-child p:first-child {
  font-size: 20px;
  position: absolute;

  left: 200px;
  top: 20px;
  /* border:1px solid red; */
}

.content3>div:first-child p:last-child {
  font-size: 14px;
  color: #666;
  position: absolute;
  left: 200px;
  top: 45px;
}

.con3-sco {
  width: 50%;
  overflow: hidden;
  display:flex;
  align-items: center;
}

.con3-sco img {
  height:400px;
  /* vertical-align: middle; */
}

.content3>div:nth-child(3) {
  width: 33%;
}
.con-new{
  width:40%;
  padding:0 50px;
}

ul li {
  width: 100%;
  height: 120px;
  border-bottom: 1px solid #666;
  margin-top: 0.5rem;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.w-30 {
  width: 30%;
}

.w-70 {
  width: 70%;
}

.p-25 {
  font-size: 30px;
  font-weight: bolder;
}

.p-20 {
  font-size: 20px;
}

.p-16 {
  font-size: 18px;
}

.p-12 {
  font-size: 14px;
  margin-top: 10px;
  color:#666;
}

</style>