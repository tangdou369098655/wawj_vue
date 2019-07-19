<template>
	<div class="mountion">
    <a :href="`/#/detail?pid=12`">
		<img src="images/4.jpg" alt="">
    </a>
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
.mountion{
          width: 100%;
          height:200px;
          overflow: hidden;
          position: relative;
          }
          .mountion img{
          width: 100%;
         position:absolute;
         bottom:0;
         z-index: 0;
          }
</style>