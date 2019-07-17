<template>
 
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


export default {
  data() {
    return {
      shopList: [],
      sizes: ['1.2', '2.2', '3.2', '7.2'],
      products: [],
      pics: []
    }
  },
  methods: {
    
	},

	// 注册子组件
	components:{
"about-one":aboutOne,

	},
  created() {
    
  },
  mounted() {

  }
  }
</script>
