<template>
<div>
  <carousel></carousel>
  <title-one
  title="产品展示"
  title_english="Product"
  ></title-one>
  <pro-four></pro-four>
  <pro-five
  state=14
  ></pro-five>
  <more></more>
  <pro-hot
  state=15
	msg="尊享尚品推荐"
	kinds="尊享"
  ></pro-hot>
  <pro-one></pro-one>
  <title-one
  title="产品展示"
  title_english="Product"
  ></title-one>
  <pro-five
  state=12
  ></pro-five>
  <pro-hot
  state=5
	msg="VIP精品推荐"
	kinds="高端"
  ></pro-hot>
  <pro-hot
  state=4
	msg="精选推荐"
	kinds="精选"
  ></pro-hot>
  <pro-two></pro-two>
  <title-one
  title="关于我们"
  title_english="About"
  ></title-one>
  <pro-three></pro-three>
  <title-one
  title="新闻动态"
  title_english="News"
  ></title-one>
  <new-one></new-one>
  <title-one
  title="联系我们"
  title_english="Contact"
  ></title-one>
  <contact></contact>
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
import more from './child/More'
import titleOne from './child/Title_one'
import proHot from './child/pro_hot'


export default {
  data() {
    return {
     
    }
  },
  methods: {
    
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
"more":more,
"title-one":titleOne,
"pro-hot":proHot

	},
  created() {
    
  },
  mounted() {

  }
  }
</script>
