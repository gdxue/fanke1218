<template>
	<div id="wrap_hj">
		<div class="topTitle">
			<a href="index.html"><span class="topBack"></span></a>
			<span class="curTitle">手机获奖名单</span>
		</div>
		<div class="topiclist-1 clearfix">
			<div class="topic">
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_11_3_15_34_40_2956.jpg">
				</a>
			</div>
			<div class="topic">
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_11_3_15_48_3_5164.jpg">
				</a>
			</div>
			<div class="topic">
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_11_3_15_35_13_1848.jpg">
				</a>
			</div>
			<div class="topic">
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_11_3_15_36_18_8859.jpg">
				</a>
			</div>
			<div class="topic">
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_11_3_15_36_1_4952.jpg">
				</a>
			</div>
			<div class="topic">
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_11_3_15_36_27_7661.jpg">
				</a>
			</div>
			<div class="blank"></div>
		</div>
		

		
		<!-- 底部 -->
		<div class="footer">
			<router-link to="/index">
			<a href="javascript:void(0)">
				<span class="footer-home-active"></span>
			</a>
			</router-link>
			<router-link to="/classify">
			<a href="javascript:void(0)">
				<span class="footer-search"></span>
			</a>
			</router-link>
			<router-link to="/fanke">
			<a href="javascript:void(0)">
				<span class="footer-Tshirt"></span>
			</a>
			</router-link>
			<router-link to="/car">
			<a href="javascript:void(0)">
				<span class="footer-car"></span>
			</a>
			</router-link>
			<router-link to="/geren">
			<a href="javascript:void(0)">
				<span class="footer-mine"></span>
			</a>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Hjiang'
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
#wrap_hj{
	width: 100%;
	min-height: 100%;
	background: #fff;
}
#wrap_hj .topTitle{
	width: 100%;
	height: .48rem;
	background: #b81c22;
	text-align: center;
	line-height: .48rem;
	color: #fff;
	font-size: .15rem;
	position: relative;
}
#wrap_hj img{
	width: 100%;
}
#wrap_hj .topBack{
	top: 50%;
	left: .2rem;
	position: absolute;
	width: .14rem;
	height: .14rem;
	border-bottom: 2px solid #fff;
	border-left: 2px solid #fff;
	cursor: pointer;
	transform: translateY(-50%) rotate(45deg);
}

#wrap_hj .topiclist-1{
	width: 100%;
	overflow: hidden;
	font-size: .14rem;
	color: #4C4C4C;
}
#wrap_hj .blank{
	width: 100%;
	height: .52rem;
}
#wrap_hj .footer{
	width: 100%;
	height: .52rem;
	position: fixed;
	z-index: 2;
	bottom: -.01rem;
	left: 0;
	background: #fff;
	border-top: 1px solid #999;
}
#wrap_hj .footer a{
	display: inline-block;
	width: 19%;
	height: 100%;
	text-align: center;
}
#wrap_hj .footer span{
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
#wrap_hj .footer-home-active{
	background-position: 0rem -2.5rem;
}
#wrap_hj .footer-search{
	background-position: 0rem -.5rem;
}
#wrap_hj .footer-Tshirt{
	background-position: 0rem -1rem;
}
#wrap_hj .footer-car{
	background-position: 0rem -1.5rem;
}
#wrap_hj .footer-mine{
	background-position: 0rem -2rem;
}
</style>