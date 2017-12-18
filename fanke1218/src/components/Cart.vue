<template>
	<div id="wrap_car">
		<div class="topTitle">
			<a href="index.html"><span class="topBack"></span></a>
			<span class="curTitle">购物车</span>
		</div>
		<div class="others-content">
			<div class="shoppingCar-null">
				<div class="shoppingCar-null-pic">
					<p class="car-img">
						<img src="../assets/img/null-car.png">
					</p>
				</div>

				<p class="car-p-btn">
					<span class="s-m-btn space-btn shadow">
						<a href="javascript:void(0)">我的收藏</a>
					</span>
					<span class="s-m-btn shadow">
						<a href="javascript:void(0)">去逛逛</a>
					</span>
				</p>
			</div>

			<div class="login">
				<div class="user-info">
					<a href="javascript:void(0)">
						<span>那儿有****</span>
					</a>
					<i>|</i>
					<a href="javascript:void(0)">
						退出
					</a>
				</div>
				<div class="index_foot">
					<ul>
						<li><a href="javascript:void(0)">
							<img src="../assets/img/help1.png">
						</a></li>
						<li><a href="javascript:void(0)">
							<img src="../assets/img/download1.png">
						</a></li>
						<li><a href="javascript:void(0)">
							<img src="../assets/img/weixin1.png">
						</a></li>
						<li><a href="javascript:void(0)">
							<img src="../assets/img/pcsite1.png">
						</a></li>
					</ul>
				</div>
				<div class="nav_bottom">
					<h3>京ICP证100557号</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Cart"
	}
</script>
<style>
/******** 购物之后 ***********/
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
#wrap_car{
	width: 100%;
	min-height: 100%;
	background: #fff;
}
#wrap_car .topTitle{
	width: 100%;
	height: .48rem;
	background: #b81c22;
	text-align: center;
	line-height: .48rem;
	color: #fff;
	font-size: .15rem;
	position: relative;
}
#wrap_car .topBack{
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
#wrap_car .others-content{
	width: 100%;
	height: 100%;
	background: #fff;
	margin-bottom: .425rem;
}
#wrap_car .shoppingCar-null{
	background: #fff;
	color: #4d4d4d;
	padding: .2rem .2rem;
}
#wrap_car .shoppingCar-null-pic{
	width: 100%;
	height: 2.44rem;
	border: 2px solid #d9d9d9;
}
#wrap_car .car-img{
	width: 1.5rem;
	height: .5669rem;
	margin: .85rem;
}
#wrap_car .car-img img{
	height: .5669rem;
	width: 1.5rem;
}
#wrap_car .car-p-btn{
	height: .36rem;
	background: #fff;
	margin-top: .1rem;
}
#wrap_car .shadow{
	background: #fff;
	border-radius: 3px;
	box-shadow: 1px 2px 3px #ececec;
}
#wrap_car .s-m-btn{
	width: 48%;
	height: 98%;
	text-align: center;
	line-height: .36rem;
	display: inline-block;
}
#wrap_car .s-m-btn:last-child{
	margin-left: 2%;
}

#wrap_car .login{
	width: 100%;
	padding: .35rem 0;
	text-align: center;
}
#wrap_car .login i{
	font-style: normal;
}
#wrap_car .user-info{
	background: #fff;
	width: 1.5702rem;
	height: .34rem;
	line-height: .34rem;
	margin-left: 28%;
	color: #4c4c4c;
	padding-bottom: .38rem;
}

#wrap_car .index_foot{
	width: 100%;
	height: 1.2rem;
	text-align: center;
}
#wrap_car .index_foot ul{
	display: inline-block;
	border-bottom: 1px solid #4c4d4d;
	border-top: 1px solid #4c4d4d;
	padding: .12rem 0;
	zoom: 1;
}
#wrap_car .index_foot li{
	float: left;
}
#wrap_car .index_foot img{
	width: .42rem;
	height: .6239rem;
	padding: 0 .1rem;
}
#wrap_car .nav_bottom h3{
	font-weight: normal;
	font-size: .12rem;
}
#wrap_car .nav_bottom{
	padding: .1rem 0;
}

</style>
