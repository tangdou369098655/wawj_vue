<template>
<div class="content22" style="margin-left:100px">
		<div>
			<p>{{title}}</p>
			<p>{{title_english}}</p>
			<span class="fr">
        {{m1}}
        &nbsp; &nbsp; &nbsp; &nbsp;
        {{m2}}
        &nbsp; &nbsp; &nbsp; 
        {{m3}}
        &nbsp; &nbsp; &nbsp; 
        {{m4}}
        </span>
		</div>
	
	</div>
</template>
<script>
export default {
	name:"pro-four",
	props:{
		title:{default:""},
		title_english:{default:""},
		m1:{default:""},
		m2:{default:""},
		m3:{default:""},
		m4:{default:""},
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

.content22 {
  width: 95%;
  height: 80px;
  border: 1px solid #fff;
  margin: 40px auto 20px;
  position: relative;
}

.content22 p:first-child {
  font-size: 20px;
  position: absolute;
  top: 15px;
  left: 10px;
}
.fr {
  float: right;
}
.content22>div>p:nth-child(2) {
  font-size: 16px;
  color: #666;
  margin-top: 5px;
  position: absolute;
  top: 35px;
  left: 10px;
}


.content22 div:first-child span {
  margin-top: 20px;
  font-size: 14px;
}

</style>