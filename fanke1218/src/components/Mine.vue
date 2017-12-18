<template>
	<div id="geren">
		<div class="main">
				<div class="header">
					<router-link to="/geren">
						<span class="header1"></span>
					</router-link>
					<span class="header2">个人中心</span>
				</div>
				<div class="main1">
					<div class="main2">
						<a  class="main3" href="#"></a>
					</div>
					<div class="clear">
						<img src="http://i10.m.vancl.com/Content/H5/img/H5-V0.jpg">
						<p class="clear1">178****4815</p>
						<a  class="clear3" href="#"></a>
					</div>
						<div class="clear4">
							<ul>
								<li>积分:0</li>
								<li>余额:0.00</li>
								<li>成长值:0</li>
							</ul>
						</div>
				</div>
				<div class="order">
					<p class="order1">
						<a href="#">
							全部订单
							<span></span>
						</a>
					</p>
					<li class="order2">
						<span></span>
						<p>进行中</p>
					</li>
					<li class="order2">
						<span class="span2"></span>
						<p>已完成</p>
					</li>
					<li class="order2">
						<span class="span3"></span>
						<p>待评价</p>
					</li>
					<li class="order2">
						<span class="span4"></span>
						<p>无效</p>
					</li>
				</div>
				<div class="section">
					<ul class="section1">
						<li class="section2">
							<router-link to="/chongzhi">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">充值返现</span>
								<p class="section5">充100返100</p>
							</a>
							</router-link>
						</li>
						<li class="section2">

							<router-link to="/order">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">我的私人定制</span>
							</a>
							</router-link>
						</li>
						<li class="section2">
							<router-link to="/wuliu">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">物流查询</span>
							</a>
							</router-link>
						</li>
						<li class="section2">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">退换货纪录</span>
							</a>
						</li>
						<li class="section2">
							<router-link to="/dizhi">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">地址管理</span>
							</a>
							</router-link>
						</li>
						<li class="section2">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">我的礼品卡</span>
							</a>
						</li>
						<li class="section2">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">我的优惠券</span>
							</a>
						</li>
						<li class="section2">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">我的积分</span>
							</a>
						</li>
						<li class="section2">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">我的评论</span>
							</a>
						</li>
						<li class="section2">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">我的提问</span>
							</a>
						</li>
						<li class="section2">
							<router-link to="/tousu">
							<a href="#" class="section3">
								<span></span>
								<span class="section4">投诉建议</span>
							</a>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="fot"></div>
			</div>

	</div>
</template>

<script>
	export default {
		name: "Mine"
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
	font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
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
input{
	outline: none;
}
#geren .header{
	width: 100%;
	height: 0.48rem;
	background-color: #b81c22;
}
#geren .header1{
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
#geren .header2{
	height: 0.48rem;
	line-height: 0.48rem;
	font-size: .18rem;
	margin: 40%;
	color: #fff;
}
#geren .main{
	width: 100%;
	height: 6.20rem;
	background-color: #f0eff5;
}
#geren .main1{
	width: 100%;
	height: 2.14rem;
	background: url(../assets/img/uc-topbgd.png) no-repeat center center;
	background-size: 100% 100%;
}
#geren .main2{
	width:100%;
	height: .33rem;
}
#geren .main3{
	display: block;
	width: .21rem;
	height: .26rem;
	background: url(http://i10.m.vancl.com/Content/H5/img/order-icon.png) no-repeat 0rem 0rem;
	background-size: .23rem;
	float: right;
	margin: .1rem .15rem 0 0;
}
#geren .clear{
	width: 100%;
	height: 1.33rem;
	text-align: center;
}
#geren .clear img{
	width: .78rem;
	height: .78rem;
	border-radius: 50%;
	margin-left: .37rem;
	border: 0;
}
#geren .clear1{
	text-align: center;
	color: #fff;
	height: .21rem;
	line-height: .21rem;
	font-size: .1rem;
	margin-top: .08rem;
}
#geren .clear3{
	width: .60rem;
	height: .18rem;
	display: block;
	margin: 0 auto;
	background: url(http://i10.m.vancl.com/Content/H5/img/H5-NewV0.png) no-repeat center;
	background-size: cover;
	margin-top: .05rem;
}
#geren .clear4{
	width: 100%;
	height: .21rem;
}
#geren .clear4 li{
	height: .21rem;
	line-height: .21rem;
	list-style: none;
	color: #fff;
	text-align: center;
	float: left;
	margin-left: .60rem;
	font-size: .12rem;
}
#geren .order{
	width: 100%;
	height: 1.12rem;
	margin-top: .14rem;
	background-color: #fff;
}
#geren .order1{
	width: 100%;
	height: .42rem;
	border-bottom: 1px solid #f0eff5;
}
#geren .order1 a{
	position: relative;
	text-align: left;
	display: block;
	height: .42rem;
	line-height: .42rem;
	color: #000;
	padding: 0 .1rem;
	font-size: .12rem;
}
#geren .order1 span{
	position: absolute;
	width: .12rem;
	height: .12rem;
	top: 50%;
	right: .15rem;
	border-top: 1px solid #a5a5a5;
	border-right: 1px solid #a5a5a5;
	-webkit-transform: translateY(-50%) rotate(45deg);
}
#geren .order2{
	float: left;
	width: .925rem;
	height: .7rem;
	list-style: none;
	display: list-item;
	text-align: -webkit-match-parent;
}
#geren .order2 span{
	margin: 0 auto;
	width: .21rem;
	height: .24rem;
	background: url(http://i10.m.vancl.com/Content/H5/img/uc-order-icon.png) no-repeat;
	background-size: .21rem 1.2rem;
	display: block;
	background-position: 0 -.24rem;
	margin-top: .10rem;
}
#geren .order2 p{
	width: .93rem;
	height: .18rem;
	text-align: center;
	font-size: .12rem;
	float: left;
	color: #000;
	margin-top: .04rem;

}
#geren .order2 .span2{
	background-position: 0 -.47rem;
}
#geren .order2 .span3{
	background-position: 0 -.95rem;
}
#geren .order2 .span4{
	background-position: 0 -.71rem;
}
#geren .section{
	width: 100%;
	height: 2.71rem;
	background-color: #fff;
	margin-top: .14rem;
	text-align: center;
}
#geren .section1{
	margin-left: -1px;
	border-top: 1px solid #f0eff5;
	zoom: 1;
	display: block;
	padding-top: .1rem;
	width: 100%;
	height: 2.71rem;
}
#geren .section2{
	width: .92rem;
	height: .9rem;
	float: left;
	list-style: none;
	display: list-item;
	margin-top: .05rem;
	text-align: -webkit-match-parent;
}
#geren .section3 span:first-child{
	display: inline-block;
	width: .36rem;
	height: .36rem;
	/*border-left: 1px solid #f0eff5;*/
	background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat;
	background-size:  .4rem 5.2rem;
	background-position: 0 0;
	margin-left: .24rem;
}
#geren .section1 li:nth-of-type(2) span:first-child{
	background-position: 0 -.36rem;
}
#geren .section1 li:nth-of-type(3) span:first-child{
	background-position: 0 -4.45rem;
}
#geren .section1 li:nth-of-type(4) span:first-child{
	background-position: 0 -4.8rem;
}
#geren .section1 li:nth-of-type(5) span:first-child{
	background-position: 0 -1.5rem;
}
#geren .section1 li:nth-of-type(6) span:first-child{
	background-position: 0 -.73rem;
}
#geren .section1 li:nth-of-type(7) span:first-child{
	background-position: 0 -1.14rem;
}
#geren .section1 li:nth-of-type(8) span:first-child{
	background-position: 0 -2.6rem;
}
#geren .section1 li:nth-of-type(9) span:first-child{
	background-position: 0 -1.85rem;
}
#geren .section1 li:nth-of-type(10) span:first-child{
	background-position: 0 -2.22rem;
}
#geren .section1 li:nth-of-type(11) span:first-child{
	background-position: 0 -2.97rem;
}
#geren .section4{
	width: 100%;
	height: .24rem;
	line-height: .24rem;
	text-align: center;
	color: #000;
	font-size: .13rem;
	float: left;
}
#geren .section5 {
	color: #b81c22;
	font-size: .14rem;
}
#geren .fot{
	width: 100%;
	height: .6rem;
	margin-top: .2rem;
}


</style>
