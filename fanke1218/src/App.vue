<template>
  <div id="app">
    <div class="footer">
				<router-link to="/index">
					<span class="footer-home-active"></span>
				</router-link>
				<router-link to="/classify">
					<span class="footer-search"></span>
				</router-link>
				<router-link to="/fanke">
					<span class="footer-Tshirt"></span>
				</router-link>
				<router-link to="/car">
					<span class="footer-car"></span>
					<i id="pcount" class="goods-num" style="position: absolute;
						display: inline-block;
						width: .1178rem;
						height: .12rem;
						color: #fff;
						background: #b81c22;
						line-height: .12rem;
						text-align: center;
						bottom: .36rem;
						left: 74%;
						border-radius: 50%;
						font-size: .1rem">0</i>
				</router-link>
				<router-link to="/geren">
					<span class="footer-mine"></span>
				</router-link>
		</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app{width: 100%;}

/******* 底部 *******/
.footer{
	width: 100%;
	height: .52rem;
	position: fixed;
  left: 0;
  right: 0;
  bottom: -.01rem;
	z-index: 2;
	flex: 1;
	background: #fff;
	border-top: 1px solid #999;
	font-size: 0;
}
.footer a{
	display: inline-block;
	width: 20%;
	height: 100%;
	text-align: center;
	font-size: .14rem;
}
.footer span{
	width: .36rem;
	height: .48rem;
	display: inline-block;
	background-image: url(./assets/img/navBgimgNew.png);
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
