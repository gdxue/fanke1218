<template>
	<div class="box">
		<!-- 头部 -->
		<div class="yyc_header">
			<span class="yyc_header1"></span>
			<span class="yyc_header2">物流查询</span>
		</div>
		
		<div class="main">
			<p>暂时没有配送中的订单!</p>
		</div>
		<div class="yy"></div>
		<!-- 底部导航栏 -->
		<div class="footer">
			<a href="javascript:void(0)">
				<span class="footer-home-active"></span>
			</a>
			<a href="classify.html">
				<span class="footer-search"></span>
			</a>
			<a href="fanke.html">
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
		name: 'Wuliu'
	}
</script>
<style>
	@charset "utf-8";
*{
	padding: 0;
	margin: 0;
}
html{
	font-size: 100px;
	height: 100%;
}
ul,li{
	list-style: none;
}
a{
	text-decoration: none;
}
.yyc_header{
	width: 100%;
	height: 0.48rem;
	background-color:#b81c22;
	border-bottom: 1px solid #fff;
}
.yyc_header1{
	width: .17rem;
	height: .17rem;
	text-align: center;
	position: absolute;
	left: .3rem;
	top: .15rem;
	border-bottom: 2px solid #fff;
	border-left: 2px solid #fff;
	-webkit-transform: translate(-50%) rotate(45deg);
	cursor: pointer;
}
.yyc_header2{
	height: 0.48rem;
	float: left;
	width: 100%;
	text-align: center;
	line-height: 0.48rem;
	font-size: .17rem;
	color: #fff;
}
.main{
	width: 100%;
	margin-top: .3rem;
}
.main p {
	font-size: .14rem;
	color: #333;
	text-align: center;
}






.yy{
	width: 100%;
	height: .5rem;
	margin-top: .25rem;
}
/*-----------底部导航栏--------*/
.footer{
	width: 100%;
	height: .52rem;
	position: fixed;
	z-index: 2;
	bottom: -.01rem;
	line-height: .2rem;
	left: 0;
	background: #fff;
	display: flex;
	border-top: 1px solid #999;
}
.footer a{
	flex:1;
	width: 13%;
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