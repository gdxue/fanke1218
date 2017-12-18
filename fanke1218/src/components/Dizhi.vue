<template>
	<div id="box">
		<div class="header">
		<span class="header1"></span>
		<span class="header2">收货地址管理</span>
	</div>
	<div class="deal">
		<div class="deal_tao">
			<div class="div1">
				<p class="p1">*收货人 :</p>
				<p class="p2">姓名</p>
			</div>
			<div class="div1">
				<p class="p1">*电话号码 :</p>
				<p class="p2">请填写真实的号码</p>
			</div>
			<div class="div1">
				<p class="p1">*所在地区 :</p>
				<p class="p2">请选择</p>
			</div>
			<div class="div1">
				<p class="p1">*详细地址 :</p>
				<p class="p2">街道门牌信息</p>
			</div>
			<div class="div1">
				<p class="p1">*邮政编码 :</p>
				<p class="p2">填写邮编</p>
			</div>
			<div class="lable">
				<span></span>
				<p>设为默认地址</p>
			</div>
			<div class="bottom">
				<p class="b_p1">取消</p>
				<p class="b_p2">保存</p>
			</div>
		</div>
	</div>

	<!-- 底部导航栏 -->
	<div class="footer">
			<a href="javascript:void(0)">
				<span class="footer-home-active"></span>
			</a>
			<a href="javascript:void(0)">
				<span class="footer-search"></span>
			</a>
			<a href="javascript:void(0)">
				<span class="footer-Tshirt"></span>
			</a>
			<a href="javascript:void(0)">
				<span class="footer-car"></span>
			</a>
			<a href="javascript:void(0)">
				<span class="footer-mine"></span>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Dizhi'
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
html{
	font-size: 100px;
}
body{
	/*background: #f4f4f4;*/
	font-size: .14rem;
	color: #333;
	font-family: 微软雅黑;
}
ol,ul{
	list-style: none;
}
img{
	outline: 0;
	resize: none;
	vertical-align: middle;
}
a{
	color: #999;
	text-decoration: none;
}
a:hover{
	color: #999;
}
	.header{
	width: 100%;
	height: 0.48rem;
	background-color: #b81c22;
}
.header1{
	width: .18rem;
	height: .18rem;
	line-height: .18rem;
	text-align: center;
	position: absolute;
	top: .14rem;
	left: .35rem;
	border-bottom: 2px solid #fff;
	border-left: 2px solid #fff;
	-webkit-transform: translate(-50%) rotate(45deg);
	cursor: pointer;
}
.header2{
	height: 0.48rem;
	line-height: 0.48rem;
	font-size: .18rem;
	margin: 35%;
	color: #fff;
}
.deal{
	width: 100%;
	height: 4.8rem;
	
}
.deal_tao{
	width: 3.51rem;
	height: 4.8rem;
	margin: 0 auto;
}

.div1{
	width: 100%;
	height: .4rem;
	border-bottom: 1px solid #e3e3e3;
	font-size: .13rem;
}
.div1 .p1{
	width: 25%;
	font-size: .14rem;
	float: left;
	line-height: .42rem;
	color: #868686;
}
.div1 .p2{
	width: 75%;
	font-size: .14rem;
	float: left;
	line-height: .42rem;
	color: #868686;
}

.lable{
	width: 100%;
	height: .4rem;
	margin-top: .15rem;
}
.lable span{
	display: inline-block;
	width: .15rem;
	height: .15rem;
	background-image: url(../assets/img/yuan.png);
	background-size: .15rem;
	float: left;
	margin-right: .15rem;
}
.lable p{
	color: #868686;
}
.bottom{
	width: 100%;
	height: .39rem;
	margin-top: .5rem;
}
.b_p1{
	background: #fff;
	border: 1px solid #cdcdcd;
	width: 35%;
	height: 98%;
	float: left;
	margin-left: 10%;
	font-size: .15rem;
	text-align: center;
	line-height: .39rem;
	border-radius: .03rem;
	font-weight: 700;
}
.b_p2{
	background: #b81b22;
	border: 1px solid #b81b22;
	width: 35%;
	height: 98%;
	float: left;
	color: #fff;
	margin-left: 10%;
	font-size: .15rem;
	text-align: center;
	line-height: .39rem;
	border-radius: .03rem;
	font-weight: 700;
}
/*-----------底部导航栏--------*/
.footer{
	width: 100%;
	height: .52rem;
	position: fixed;
	z-index: 2;
	bottom: -.01rem;
	left: 0;
	background: #fff;
	border-top: 1px solid #999;
}
.footer a{
	display: inline-block;
	width: 19%;
	height: 100%;
	text-align: center;
}
.footer span{
	width: .36rem;
	height: .48rem;
	display: inline-block;
	background-image: url(../assets/img/navBgimgNew.png);
	background-repeat: no-repeat;
	overflow: hidden;
	background-size: .36rem 5rem;
	-webkit-transform: transform(-50%, -50%);
	margin-top: .04rem;
}
.footer-home-active{
	background-position: 0rem -2.5rem;
}
.footer-search{
	background-position: 0rem -.5rem;
}
.footer-Tshirt{
	background-position: 0rem -1rem;
}
.footer-car{
	background-position: 0rem -1.5rem;
}
.footer-mine{
	background-position: 0rem -2rem;
}

</style>