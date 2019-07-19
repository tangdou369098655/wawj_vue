<template>
<div>
  <title-one
  title="新闻动态"
  title_english="News"
  ></title-one>
  <new-one></new-one>
  <big-img></big-img>
  </div>
</template>
<script>
 //引入子组件
import aboutOne from './child/About_one'
import bigImg from './child/Big_img'
import carousel from './child/Carousel'
import contact from './child/Contact'
import newOne from './child/New_one'
import proOne from './child/Pro_one'
import proTwo from './child/Pro_two'
import proThree from './child/Pro_three'
import proFour from './child/Pro_four'
import proFive from './child/Pro_five'
import proSix from './child/Pro_six'
import more from './child/More'
import titleOne from './child/Title_one'
import proHot from './child/pro_hot'


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

	// 注册子组件
	components:{
"about-one":aboutOne,
"big-img":bigImg,
"carousel":carousel,
"contact":contact,
"new-one":newOne,
"pro-one":proOne,
"pro-two":proTwo,
"pro-three":proThree,
"pro-four":proFour,
"pro-five":proFive,
"pro-six":proSix,
"more":more,
"title-one":titleOne,
"pro-hot":proHot

	},
  created(){
    this.onload()
  }
}
</script>
<style scoped>

</style>