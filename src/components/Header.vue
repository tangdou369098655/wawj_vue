<template>
 <div class="headd">
    <div class="container">
      <div class="fl logo">
        <img src="images/13.png" alt="">
        <img src="images/12.png" alt="">
      </div>
      <div class="fr container-a">
        <a href="javascript:;">首页</a>
        <a href="javascript:;">关于</a>
        <a href="javascript:;">产品</a>
        <a href="javascript:;">动态</a>
        <a href="javascript:;">联系</a>
        <a href="javascript:;" class="txt">我要订购</a>
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="hr"></div>
      <div style="clear: both"></div>
  </div>

</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
.headd {
  width: 100%;

  z-index: 15;
  /* position: fixed; */
}

.container {
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
}


.fr {
  float: right;
}

.fl {
  float: left;
}

.container-a a {
  display: inline-block;
  width: 100px;
  line-height: 40px;
  text-align: center;
}

.txt {
  border: 1px solid #000;
  transition: .3s;
}

.logo img {
  display: inline-block;
}

.logo {
  height: 40px;
  position: relative;
}

.logo img:nth-child(2) {
  position: absolute;
  top: calc(50% - 9px);
  left: 90px;
}

.txt:hover {
  background: #000;
  color: #fff
}

.hr {
  width: 90%;
  height: 1px;
  background: #e5e5e5;
  margin: 0 auto;
}
</style>