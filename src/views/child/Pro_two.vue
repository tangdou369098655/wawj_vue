<template>
		<div>
      <div class="qq wow bounceInUp animated conimg-two" data-wow-delay="0.3s"  data-wow-duration="0.45s">
		<img src="images/9.png" alt="" class="qq_1">
		<img src="images/10.png" alt="" class="qq_1">
		<img src="images/11.png" alt="" class="qq_1">
	</div>
    </div>
</template>
<script>
export default {
	name:"pro-two",
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
 
.qq {
  text-align: center;
  margin-top: 3rem;
}

.qq_1 {
  transition: all .3s linear;
  margin-left: 5px;
}

.qq_1:hover {
  transform: scale(1.2);
}
</style>