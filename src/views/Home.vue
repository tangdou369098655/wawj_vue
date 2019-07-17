<template>
 
</template>

<script>
 //引入子组件
import aboutOne from './child/About_one'


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
