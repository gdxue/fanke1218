<template>
	<div class="box">
		<!-- 头部 -->
		<div class="yyc_header">
			<span class="yyc_header1"></span>
			<span class="yyc_header2">私人定制订单</span>
		</div>
		<div class="other">
			<ul>
				<li>全部</li>
				<li>待预约</li>
				<li>待上门</li>
				<li>已完成</li>
			</ul>
		</div>
		<div class="no_pTailor">
			<p class="no_p1">暂无私人定制的商品信息</p>
			<p class="no_p2">免费上门量体 高端私人定制 10天极速发货</p>
			<span>量身定制 立即体验</span>
		</div>
		<div class="yy"></div>
	</div>
</template>
<script>
	export default{
		name: "Order"
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
.other{
	width: 100%;
	height: .47rem;
}
.other ul li{
	float: left;
	width: .9375rem;
	height: .47rem;
	line-height: .47rem;
	text-align: center;
	font-size: .16rem;
	color: #a5a5a5;
}
.other ul li:hover{
	color: #000;
}
.no_pTailor{
	/*position: absolute;
	top: 50%;
	left: 50%;
	transform:translate(-50% , -50%);*/
	width: 100%;
	height: 1rem;
	text-align: center;
	margin-top: 1.8rem;
}
.no_pTailor p {
	font-size: .13rem;
	line-height: .35rem;
}
.no_p1{
	color: #333;
}
.no_p2{
	color: #5E5E5E;
}
.no_pTailor span{
	font-size: .14rem;
	width: 40%;
	padding:0 .05rem;
	margin: 0 auto;
	height: .25rem;
	border: 1px solid #b81c22;
	border-radius: .12rem;
	color: #b81c22;
	cursor: pointer;
	line-height: .25rem;
	float: left;
	margin-top: .1rem;
	margin-left: 1rem;
}









.yy{
	width: 100%;
	height: .5rem;
	margin-top: .25rem;
}

</style>
