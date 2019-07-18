<template>
  <!-- 页面主体内容开始1 -->
  <div class="wid">
    <!-- 面包屑导航1 -->
    <div class="bar">
      <router-link :to="`/pro?search=${kinds}`" target="_blank">
      <span id="kinds">高端系列</span></router-link>
      <i class=" iconfont icon-dayuhao"></i>
      <span id="nav_name">{{title}}</span>
    </div>
    <!-- 面包屑导航2 -->
    <!-- 第一部分1 -->
    <div class="p-main clearfix">
      <!-- 第一部分左边主图1 -->
      <div class="p-main-left">
        <div id="lgImg"><img :src="pics[0] && pics[0].img" style="width:450px"></div>
        <div class="left-img" id="left_img">
          <!--  -->
          <img :src="`images/index/北欧家居展示${myrandom}.jpg`" style="height:100px;width:100px">
          <img :src="`images/index/北欧家居展示${myrandom1}.jpg`" style="height:100px;width:100px">
          <img :src="`images/index/北欧家居展示${myrandom2}.jpg`" style="height:100px;width:100px">
          <img :src="`images/index/北欧家居展示${myrandom3}.jpg`" style="height:100px;width:100px">
        </div>
      </div>
      <!-- 第一部分左边主图2 -->
      <!-- 第一部分右边区域1 -->
      <div class="p-main-right">
        <h1 id="cake_name">{{title}}<img src="images/index/icon-new-1.png" alt=""></h1>
        <h4 id="advertisement">潮新品闪购节，1.指定商品3件7折，2.爆款34款产品直降低于7折，3.新品特价每满500减50每满500减50配送到家。</h4>
        <h2 id="price">￥{{price}}</h2>
        <span class="f-gray">尺寸:<img src="images/index/tian2.png" alt=""></span>
        <div class="cweight" id="specss">
          <div><span>小型尺寸</span>
            <i class="iconfont icon-right-1"></i>
          </div>
          <div><span>中型尺寸</span><i></i></div>
          <div><span>大型尺寸</span><i></i></div>
          <div><span>私人定制</span><i></i></div>
        </div>
        <hr>
        <div class="details clearfix">
          <div><img src="images/le1.png" style="width:18px">&emsp;送货上门</div>
          <div><img src="images/le2.png" style="width:18px">&emsp;免费定制</div>
          <div><img src="images/le3.png" style="width:18px">&emsp;品质出众</div>
          <div><img src="images/le4.png" style="width:18px">&emsp;品牌配送</div>
        </div>
        <hr>
        <div class="count">
          <h3 class="iconfont icon-jianhaoshouqi"></h3>
          <div></div>
          <h3><input type="text" value="1" id="p_count"></h3>
          <div></div>
          <h3 class="iconfont icon-jiahaozhankai"></h3>
        </div>
        <div class="buy">
          <span>加入购物车</span>
          <span>立即购买</span>
        </div>
      </div>
      <!-- 第一部分右边区域2 -->
    </div>
    <!-- 第一部分2 -->
    <!-- 第二部分商品详情开始1 -->
    <div class="p-details">
      <div class="detail-one">
        <h5 class="pink1">商品详情</h5>
        <h5>商品评论（0条）</h5>
        <i class="xian"></i>
      </div>
      <hr>
      <div class="detail-two">
        <span>品牌：我爱我家</span>
        <span>风格：欧式</span>
        <span>适合人群：所有人群</span>
        <span>商品产地：中国大陆</span>
        <span>主色系：浅色</span>
        <span>类别：板木结合</span>
        <span>尺寸：定制尺寸</span>
        <span>特色产地：佛山</span>
        <span>内部结构：排骨架</span>
        <span>国产/进口：国产</span>
        <!-- 文本区域开始1 -->
        <div class="text-center">
          <h5>
            图片仅供参考，请以实物为准
          </h5>
          <h3>幸福就是家的味道；每一个家庭都有一个故事；</h3>
          <h3 class="pink1">生活就像一道道斑斓的光，不欣赏怎么知道哪道更适合自己?</h3>
          <h3>天黑了，让我来为您奉献一个缤纷绚烂的夜晚吧！</h3>
          <h3>风是透明的，雨是滴答的，</h3>
          <h3>云是流动的，歌是自由的，</h3>
          <h3>爱是用心的，恋是疯狂的，</h3>
          <h3>天是永恒的，</h3>
          <h3 class="pink1">我爱我家的家居体验是难忘的。</h3>
          <h4>That is the sweetest home in the world,
            That is the most delicious fell in the world.</h4>
        </div>
        <!-- 文本区域开始2 -->
      </div>
      <!-- 图片区域开始1 -->
      <div class="pro-img">
        <img src="images/banner1.jpg">
        <img src="images/banner2.jpg">
        <img src="images/banner3.jpg">
        <img src="images/banner4.jpg">
        <img src="images/xq3.jpg">
        <img src="images/xq5.jpg">
        <img src="images/xq4.jpg">
        <img src="images/xq1.jpg">
        <img src="images/xq2.jpg">
        <img src="images/xq7.jpg">
        <img src="images/xq8.jpg">
        <img src="images/xq9.jpg">
        <!-- 需要从数据库调取的图片1 -->
        <div id="lg_img">

        </div>
        <!-- 需要从数据库调取的图片2 -->
        <!-- <img src="images/index/size.jpg"> -->
      </div>
      <!-- 图片区域开始2 -->
      <!-- 配送区域开始1 -->
      <br><br><br>
      <div class="distribution">
          <div>
            <i>郑州</i>
            <span>郑州三环以内免费配送，超出区域按30元/个收取运费。</span>
          </div>
        <div>
          <i>上海</i>
          <span>上海申嘉湖高速以北，绕城高速以南，外环高速以西，沈海高速以东区域及嘉定行政区免费配送，超出区域按30元/个收取运费，迪士尼区域暂不支持配送。</span>
        </div>
        <div>
          <i>常州</i>
          <span>G42沪蓉高速以南，龙江路高架（外环高架）以东，龙城大道以南，江宜高速以东，常合高速以北，青洋路高架以西免费配送，其他区域暂不支持配送。</span>
        </div>
        <div>
          <i>苏州</i>
          <span>周湖线云龙路以北，G15W常台高速以西，S230太湖苏州湾大桥以东免费配送。苏州绕城之内除阳澄湖地区（G15W以东，G2京沪高速以北）暂不支持配送。</span>
        </div>
        <div>
            <i>苏州</i>
          <span>昆山区域：陆丰东路中环南线以北，城北路以南，沿沪大道以西，常嘉高速以东免费配送。</span>
        </div>
        <div>
          <i>杭州</i>
          <span>余杭区,拱墅区,西湖区,上城区,下城区,江干区,滨江区,萧山区(以上区域绕城内免费配送，绕城以外区域每单加收30元运费，其他区域暂不支持配送)。</span>
        </div>
        <div>
          <i>宁波</i>
          <span>宁波绕城以内免费配送，穿山疏港高速以北，甬舟高速以南，宁波绕城高速以东加收30元运费。其余地区暂不支持配送。</span>
        </div>
        <div>
          <i>无锡</i>
          <span>S19锡张高速（通锡高速）望虞河以北以西，S228（锡张线）以南，蠡湖大道（环湖路，西环路、锡西大道）以东免费配送，其他区域暂不支持配送。</span>
        </div>
        <div>
          <i>北京</i>
          <span>六环以内（不包含香山地区）免费配送，其他区域暂不支持配送。</span>
        </div>
        <div>
          <i>天津</i>
          <span>天津全市免费配送，蓟县区域暂不支持配送（绕城以外实际配送时间会±1小时，请周知。）</span>
        </div>
        <div>
          <i>绍兴</i>
          <span>绍诸高速以北，钱陶公路以南，平陶公路以西。轻纺城大道，杨绍线，福漓公路，分后线以东。其余地区暂不支持配送。</span>
        </div>
        <div>
          <i>重庆</i>
          <span>金州大道以南、嘉陵江渝黔铁路以东、轨道交通三号线内环快 速路以北以西免费配送，其他区域暂不支持配送。</span>
        </div>
        <div>
          <i>成都</i>
          <span>珠江路.大马寺路以东，天府五街以北，桃园路以西及成都绕城高速内免费配送，其它区域暂不支持配送。</span>
        </div>
        <div>
          <i>台州</i>
          <span>椒江以南，以S19以西，东方大道以北，京福线—内环南路—内环东路—内环北路—大闸路以东支持免费配送，其他区域不支持配送。</span>
        </div>
        <div>
          <i>嘉兴</i>
          <span>嘉兴三环以内免费配送，其余地区暂不支持配送。</span>
        </div>
      </div>
      <!-- 配送区域开始2 -->	
      
    </div>
    <!-- 第二部分商品详情开始2 -->
  </div>
  <!-- 页面主体内容开始1 -->
</template>
<script>
export default {
  data(){
    return{
      pid:1,
      title:"",
      myrandom:"",
      myrandom1:"",
      myrandom2:"",
      myrandom3:"",
      price:"",
      products:[],
      pics:[],
      kinds:{default:"蛋糕"},
      price1:"",
	    sizes: ['小型尺寸', '中型尺寸', '大型尺寸', '私人定制'],
      psizes: [1,1.5,2,3.5]
  }},
  methods:{
    changePrice(item, i, event) {
      console.log(event.target);
			$(event.target).siblings('i').show()
			$(event.target).parent().siblings('div').children("i").hide()
			
		},
		onload(){
      if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
			new WOW().init();
		};
    },
  getData() {
      this.axios.get(
        `/product`,{params:{pid:this.pid}}
      ).then(
        ({data})=>{
          // console.log(1)
          // console.log(data)
          this.products=data.product
          // console.log(this.products)
          return Promise.all(
            data.product.map(item=>{
              return this.axios.get(
                `/pics?pid=${item.car_id}`
              ).then(({data})=>data)
            })
          )
        }
      ).then(values=>{
        this.pics=values.map(_ => _.pics[0])
        console.log(this.pics)
        console.log(this.products)
      }).then(()=>{
        this.title=this.products[0].index_title;
        this.price=this.products[0].index_price.toFixed(2);
        this.myrandom=Math.floor(Math.random()*80);
        this.myrandom1=Math.floor(Math.random()*80);
        this.myrandom2=Math.floor(Math.random()*80);
        this.myrandom3=Math.floor(Math.random()*80);
        console.log(this.myrandom)
      })
    }
   
  },
  components:{},
  created(){
    this.getData()
    this.onload()
  },
  mounted(){
  
              //设置购买数量增减变动
              $(".icon-jiahaozhankai").click(
                function () {
                  var n = parseInt($("#p_count").val());
                  // console.log("jiajia1",n)
                  n++;
                  $("#p_count").val(n);
                  // console.log("jiajia2",n)

                }
              )
              $(".icon-jianhaoshouqi").click(
                function () {
                  var $btn = $(this);
                  var n = parseInt($("#p_count").val());
                  if (n > 1) {
                    n--;
                  }
                  $("#p_count").val(n);

                }
              )
               //设置当鼠标点击尺寸时候，i的属性（对号加到对应的上面）
        $("#specss>div").click(
          function(e){
            console.log(this);
            e.stopPropagation()
       e.preventDefault();
            $(this).parent().children().children().removeClass("iconfont icon-right-1")
            $(this).children("i").addClass("iconfont icon-right-1");
          
          }
        ) 
        $("#left_img>img").on("mouseenter click", function () {
          $("#lgImg").html(`<img src="${this.src}" style="width:450px; height:450px">`)
        })
        
  },
  }
</script>
<style socped>
  /* 通用1 */
  /*通用粉色字体*/
.pink1 {
  color: #0f0e0e !important;
}

/*通用粉色背景*/
.bacpink {
  background: #0a0a0a !important;
}

/*通用白色字体*/
.white1 {
  color: white;
}

/*通用黑色字体*/
.imcolor-black {
  color: #4D4143;
}
/* 通用灰色字体 */
.f-gray{
  color: #878787;
}
/*版心*/
.wid {
  width: 1200px;
  margin: auto;
}
i{
  font-style:normal;
}
.fr {
  float: right;
}

.fl {
  float: left;
}

.font16 {
  font-size: 16px;
}


.clearfix:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}

.w-100 {
  width: 100%;
}

.text-center {
  text-align: center;
}
.cursor{
  cursor: pointer;
}
/* 导航栏设置1 */
header {
  position: fixed;
  width: 100%;
  background-color: #fff;
  line-height: 44px;
  z-index: 100;
}

header div.main {
  margin: 25px auto 0px auto;

}

/* 导航栏设置2 */
/* 面包屑导航1 */
.bar{
  padding-top:30px;
  padding-bottom: 10px;
}
.bar span{
  display:inline-block;
  margin-right: 10px;
  padding:2px 6px;
  border:1px solid #ccc;
  border-radius:5px;
  font-size:14px;
}
.bar>span~span{
margin-left:10px;
}
.icon-dayuhao{
  color:black;
  font-size:15px;
}
/* 面包屑导航2 */
/* 页面底部结束 */
/* 左边距10px1 */
.ml-10{
  margin-left:10px;
}
/* 左边距10px2 */
.dn{
  display:none;
}
.text-gray{
  color:gray;
}
.font-w6{
  font-weight: 600;
}
.bgcy{
  background-color: #f5f5f5;
}
.btn-pink{
  cursor: pointer;
  border: 1px solid #131212;
  background-color: #110d0e;
  color:white;
  display: inline-block;
  text-align: center;
  padding: 8px  20px;
  margin: 10px 20px 0 0;
  border-radius: 5px;
}
.btn-white{
  cursor: pointer;
  border: 1px solid #161515;
  display: inline-block;
  text-align: center;
  padding: 8px 20px;
  margin: 10px 20px 0 0;
  border-radius: 5px;
}
*{
  padding:0;
  margin:0;
}
  /* 通用2 */
/* 第一部分1 */
.p-main{
  padding-bottom: 20px;
  margin-top:30px;
}
.p-main-left,.p-main-right{
  /* display:inline-block; */
  float: left;
}
.p-main-left{
  width:520px;
  margin-left:30px;
}
.left-img>img{
  cursor:pointer;
}
.p-main-right{
  width: 435px;
  text-align: left;
  margin-left: 40px;
}
.p-main-left>div:nth-child(2)>img{
  width:164px;
  display:inline-block;
  margin-top: 15px;
}
.p-main-left>div>img+img{
  margin-left: 15px;
}
/* 第一部分右边1 */
.p-main-right h1{
font-size:35px;
color:#161313;
font-weight:560;
position: relative;
margin-bottom: 20px;
margin-top: 10px;
}
.p-main-right h1 img{
  position: absolute;
  width: 20px;
  }

  .p-main-right h4{
    font-weight: 400;
    line-height:1.5;
    color:#333;
    margin-bottom: 20px;
  }
  .p-main-right h2{
    font-size:30px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .p-main-right>span:nth-child(1){
    color:#ccc;
  }
  .p-main-right .cweight>div{
    display: inline-block;
    position: relative;
    margin-top:20px;
    margin-bottom:10px;
    margin-right:15px;
    padding:3px 7px;
    border-radius:5px;
    color:white;
    cursor: pointer;
    background-color: #080607;
  }
  .cweight{
    margin-bottom:15px;
  }
  .p-main-right .cweight>div>i{
    position:absolute;
    color:white;
    background-color: #131212;
    /* border:2px solid white; */
    border-radius:50%;
    left:-6px;
    top:-6px;
  }
  .p-main-right .details>div{
    display: inline-block;
    width:213px;
    line-height:22px;
    /* float:left; */
    margin-bottom:18px;
  }
  .details{
    margin-top: 20px;
    
  }
  .count{
    margin-top:20px;
  }
  .count>h3{
    display:inline-block;
    padding:5px 10px;
    font-size: 30px;
    padding:0;
    margin-bottom:20px;

  }
  .count>h3.iconfont:before{
    cursor: pointer;
    color:#050505;
  }
  .count>div{
    display: inline-block;
    width:20px;
    height:30px;
  }
  .count{
    /*双击文字、input等，出现的蓝色底色，如何去除*/
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    /*-khtml-user-select:none;!*早期浏览器*!*/
    user-select:none;
  }
  .count>h3>input{
    padding:0;
    font-size: 27px;
    font-weight: 500;
    /* margin:0 15px; */
    color:#0f0e0e;
    text-align:center;
    width:65px;
  }
 .buy>span{
  cursor: pointer;
  border:1px solid #131212;
  display: inline-block;
  text-align: center;
  padding:6px;
  width:130px;
  margin: 10px 20px 0 0;
  border-radius:5px;
 }
 .buy>span:nth-child(2){
  background-color: #111011;
  color:white;
 }
/* 第一部分右边2 */
/* 第一部分2 */
hr{
  border:0.5px solid #ccc;
}
/* 第二部分商品详情开始1 */
.p-details{
  padding-top:30px;
}
.p-details .detail-one>h5{
  display:inline-block;
  color:#878787;
  margin-left:50px;
  line-height:30px;
  font-size:14px;
  cursor:pointer;
}
.detail-one{
  position: relative;
}
.p-details .detail-one .xian{
border:1.5px solid #0c0c0c;
width:50px;
position: absolute;
left: 50px;
top: 36px;
transition:all .6s linear;
/* height:50px; */
display:inline-block;
}
.p-details .detail-one>h5:nth-child(2):hover +.xian{
  left:180px;
}
.detail-two{
  margin-top:40px;
  display:block;
  margin-left:100px;
}
.detail-two>span{
  display: inline-block;
  width:200px;
  color:#878787;
  font-size:14px;
  margin-bottom:15px;
}
.detail-two h5{
  color:red;
  /* text-align: center; */
  margin:20px;
  font-size:15px;
  letter-spacing:5px;
}
.detail-two h3{
  color:#333;
  line-height:3;
  /* text-align: center; */
  font-size:15px;
  letter-spacing:5px;
}
/* 图片区域开始1 */
.pro-img{
  margin-top:50px;
}
.pro-img>img,#lg_img>img{
  width: 100%;
}

/* 图片区域开始2 */
/* 配送区域开始1 */
.distribution{
  font-size:14px;
  padding-bottom:20px;
  border-bottom:1px solid #080808;
}
.distribution>div>i{
  display:inline-block;
  background-color: #070707;
  color:white;
  padding:2px 8px;
  border-radius:5px;
  margin-right:10px;
  /* line-height:1.6; */
  margin-bottom:15px;
}
/* 配送区域开始2 */
/* 第二部分商品详情开始2 */
</style>