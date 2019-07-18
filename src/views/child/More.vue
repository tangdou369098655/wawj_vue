<template>
<div  class="content33">
			<p > <a href="javascript:;" class="more mt">MORE
			</a>
			<a href="javascript:;" class="more mt  fr w40">&gt;
			</a>
			<a href="javascript:;" class="more mt fr w40">&lt;
			</a></p>
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
.content33 {
  width: 95%;
  height: 60px;
  border: 1px solid #fff;
  margin: 30px auto;
  position: relative;
}

/* .content2 p:first-child {
  font-size: 20px;
  position: absolute;
  top: 15px;
  left: 10px;
} */

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
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
}

.con_sco_div div {
  width: 24%;
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

</style>