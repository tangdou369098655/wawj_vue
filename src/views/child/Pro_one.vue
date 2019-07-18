<template>
		<div class="bgimg"  data-wow-duration="0.8s">
		<div class="conimg">
			<img src="images/17.png" alt="" class=" wow bounceInLeft animated" data-wow-delay="0.6s" ><br><br>
			<img src="images/118.png"  class=" wow bounceInRight animated conimg-two" data-wow-delay="0.8s" ><img src="images/32.png"  class=" wow bounceInLeft animated  conimg-three" data-wow-delay="0.8s" >
		</div>
	</div>
</template>
<script>
export default {
	name:"pro-one",
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
  .bgimg {
  width: 100%;
  background: url('../../assets/images/download.jpg') no-repeat;
  background-position: center;
  height: 600px;
  position: relative;
  text-align: center;
  margin-top:20px;
}

.conimg {
  width: 456px;
  position: absolute;
  top: 40%;
  left: calc( 50% - 228px);
  position: relative;
}
.conimg  .conimg-two,.conimg  .conimg-three{
  position:absolute;
  top:110px;
  left:0;
}
.conimg  .conimg-two{
  left:27px;
  top:143px;
}

</style>