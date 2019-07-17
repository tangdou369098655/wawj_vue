<template>
  <div id="footer">
    <div >COPYRIGHT&emsp;
      &emsp;
      ©&emsp;
      &emsp;
      2009-2011,
      WWW.XXXXXX.COMALL&emsp;
      RIGHTS&emsp;
      &emsp;
      RESERVED&emsp;
      &emsp;
      版权所有&emsp;
      沪ICP备04654号​ 
      <div>

      </div>
      <a href="#"><img  src="images/11.png" alt=""></a><a href="#"><img
          src="images/10.png" alt=""></a><a href="#"><img src="images/9.png" alt=""></a></div>
          <div style="clear:both"></div>
  </div>
</template>
<style scoped>
  #footer {
    width: 900px;
    margin: 0 auto;
    /* clear:both; */
    display:flex;
    justify-content: center;
    justify-items: center;
  }

  #footer>div {
    border-top: 1px solid #ddd;
    font-size: 4px;
    color: #999;
    text-align: center;
    /* float: right; */
  }
  #footer>div:nth-child(1){
    margin-top:30px;
    padding:30px;
  }
  #footer>div>a>img {
    width: 40px;
    margin-left: 5px;
    transition: all .2s linear;
    position: relative;
    top: 10px;
  }

  #footer>div>a>img:hover {
    transform: scale(1.3)
  }
</style>