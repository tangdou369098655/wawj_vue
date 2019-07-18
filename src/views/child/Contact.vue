<template>
<div class="content4">
		<div class="fl message  wow bounceInLeft animated" data-wow-delay="0.5s" >
			<p class="p-20">留言</p>
			<p class="p-14">get in touch</p>
			<form action="">
				<input type="text" placeholder="姓名" name="myname" required>
				<input type="number" maxlength="11" minlength="11" placeholder="电话" name="myphone" required>
				<input type="email" placeholder="邮箱" name="myemail"><br>
				<input type="message-box" placeholder="请输入留言..." class="message-box" name="mymessage"><br>
				<button>提交</button>
			</form>
		</div>
		<div class="fl phone wow bounceInLeft animated" data-wow-delay="0.7s" >
			<p class="p-20">联系</p>
			<p class="p-14">contact us</p>
			<ul>
				<li>电话：400 - 000 - 000</li>
				<li>邮箱：heishui9529@163.com</li>
				<li>传真：000 - 00000000</li>
				<li>地址:德玛西亚大区</li>
			</ul>
		</div>
		<div class="fl follow ">
			<p class="p-20">关注</p>
			<p class="p-14">follow us</p>
			<div class="qq wow bounceInLeft animated" data-wow-delay="0.9s" >
				<img src="images/9.png" alt="" class="qq_1">
				<img src="images/10.png" alt="" class="qq_1">
				<img src="images/11.png" alt="" class="qq_1">
			</div>
		</div>

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

.content4 {
  width: 95%;
  margin: 0 auto;
  height: 300px;
  /* border-top:1px solid rgb(168, 166, 166); */
  padding: 30px 80px;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.message {
  width: 50%;
}

.phone {
  width: 25%;
}

.follow {
  width: 25%;
}

.p-14 {
  font-size: 14px;
  color: #666;
  margin-bottom: 80px;
}

.message input {
  border-bottom: 1px solid #666
}

.message-box {
  width: 70%;
  height: 86px;
}

.message button {
  width: 100px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border: 1px solid #000;
  margin-top: 1rem;
}

.phone ul li {
  width: 100%;
  height: 25px;
  border: none;
  font-size: 16px;
  color: #666;

}
</style>