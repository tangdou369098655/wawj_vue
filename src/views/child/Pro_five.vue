<template>
<div class="content2">
		<div class="con_sco_div">
			<div v-for="(item,i) in products" :key="i" class=" wow bounceInLeft animated  pro-four" :data-wow-delay="`${0.3+i/10}s`" >
				<img :src="pics[i] && pics[i].img" style="width:100%;">
				<p>{{item.index_title}}</p>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name:"pro-four",
	props:{
		state:{default:10},
    msg:{default:"热销新品推荐"},
	},
  data(){
    return{
      products:[],
      pics:[],
     
    }
	},
	methods:{
		onload(){
      if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
			new WOW().init();
		};
    },
    getData() {
      axios.get(
        `http://localhost:3000/index`,{params:{status:this.state}}
      ).then(
        ({data})=>{
          this.products=data.product
          return Promise.all(
            data.product.map(item=>{
              return axios.get(
                `http://localhost:3000/pics?pid=${item.car_id}`
              ).then(({data})=>data)
            })
          )
        }
      ).then(values=>{
        this.pics=values.map(_ => _.pics[0])
        console.log(this.pics)
      })
    }

  },
  created(){
    this.onload()
    this.getData()
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
.content2 {
  width: 95%;
  height: 400px;
  border: 1px solid #fff;
  margin: 20px auto 0;
  position: relative;
}

.content2 p:first-child {
  font-size: 20px;
  position: absolute;
  top: 15px;
  left: 10px;
}

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
  /* margin-top: 5rem; */
  display: flex;
  width:100%;
  justify-content: space-between;
}

.con_sco_div div {
  /* width: 24%; */
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
.content2 .con_sco_div .pro-four{
  width:23%;
}
</style>