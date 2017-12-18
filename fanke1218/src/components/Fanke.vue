<template>
	<div id="fanke">
		<div class="yy_main">
			<div class="header">
				<a href="index.html"><span class="header1" @click="back()"></span></a>
				<span class="header2">私人定制</span>
			</div>
					<!-- 轮播图-->
					<div class="inpic">

						<div class="swiper-container">
							<swiper :options="swiperOption" ref="mySwiper">
		            			<swiper-slide><img src="http://i7.m.vancl.com/q80/wap/2017_10_30_16_25_38_1273.jpg" alt=""></swiper-slide>
		            			<swiper-slide><img src="http://i2.m.vancl.com/q80/wap/2017_10_31_9_42_59_8712.jpg" alt=""></swiper-slide>
		           	 			<swiper-slide><img src="http://i4.m.vancl.com/q80/wap/2017_10_30_16_25_29_7741.jpg" alt=""></swiper-slide>
		           	 			<swiper-slide><img src="http://i2.m.vancl.com/q80/wap/2017_10_30_16_25_13_6173.jpg" alt=""></swiper-slide>
								<div class="swiper-pagination" slot="pagination"></div>
	        				</swiper>
						</div>
					</div>
					<div class="nav">
						<img src="http://i7.m.vancl.com/q80/wap/2017_9_21_15_47_45_5022.jpg">
					</div>
					<div class="topic">
						<img src="http://i7.m.vancl.com/q80/wap/2017_9_20_11_28_18_888.jpg">
					</div>
					<div class="main">
						<div class="main1">
							<img src="http://i4.m.vancl.com/oms/2017_9_18_9_29_15_4206_224x472.jpg">
							<img src="http://i1.m.vancl.com/oms/2017_9_21_15_46_31_1812_224x472.jpg">
							<img src="http://i3.m.vancl.com/oms/2017_9_18_9_29_19_3224_224x472.jpg">
							<img src="http://i3.m.vancl.com/oms/2017_9_18_9_29_19_3780_224x472.jpg">
							<img src="http://i8.m.vancl.com/oms/2017_9_27_16_46_2_8611_224x472.jpg">
						</div>
					</div>
					<div class="topic">
						<img src="http://i2.m.vancl.com/q80/wap/2017_9_20_11_28_31_547.jpg">
					</div>
					<div class="track">
						<img src="http://i1.m.vancl.com/q80/wap/2017_9_18_9_1_17_3827.jpg">
					</div>
					<div class="main">
						<div class="main1">
							<img src="http://i7.m.vancl.com/oms/2017_9_18_9_37_12_7429_224x472.jpg">
							<img src="http://i9.m.vancl.com/oms/2017_9_18_9_37_15_9075_224x472.jpg">
							<img src="http://i1.m.vancl.com/oms/2017_9_18_9_37_15_1235_224x472.jpg">
							<img src="http://i1.m.vancl.com/oms/2017_9_18_9_37_15_1758_224x472.jpg">
							<img src="http://i2.m.vancl.com/oms/2017_9_18_9_37_16_2282_224x472.jpg">
						</div>
					</div>
					<div class="track">
						<img src="http://i5.m.vancl.com/q80/wap/2017_9_18_9_1_50_1705.jpg">
					</div>
					<div class="main">
						<div class="main1">
							<img src="http://i5.m.vancl.com/oms/2017_9_18_9_42_6_5732_224x472.jpg">
							<img src="http://i8.m.vancl.com/oms/2017_9_18_9_42_9_8861_224x472.jpg">
							<img src="http://i2.m.vancl.com/oms/2017_9_18_9_42_9_2241_224x472.jpg">
							<img src="http://i2.m.vancl.com/oms/2017_9_18_9_42_9_2798_224x472.jpg">
							<img src="http://i9.m.vancl.com/oms/2017_9_18_9_42_9_9766_224x472.jpg">
						</div>
					</div>
					<div class="track">
						<img src="http://i7.m.vancl.com/q80/wap/2017_9_18_9_2_18_3443.jpg">
					</div>
					<div class="main">
						<div class="main1">
							<img src="http://i7.m.vancl.com/oms/2017_9_18_9_46_7_7170_224x472.jpg">
							<img src="http://i7.m.vancl.com/oms/2017_9_18_9_46_10_7790_224x472.jpg">
							<img src="http://i1.m.vancl.com/oms/2017_9_18_9_46_10_1171_224x472.jpg">
							<img src="http://i4.m.vancl.com/oms/2017_9_18_9_46_10_4235_224x472.jpg">
							<img src="http://i2.m.vancl.com/oms/2017_9_18_9_46_11_2076_224x472.jpg">
						</div>
					</div>
					<div class="track">
						<img src="http://i7.m.vancl.com/q80/wap/2017_9_18_9_2_36_4318.jpg">
					</div>
					<div class="main_bottom">
						<div class="main1_bottom">
							<img src="http://i6.m.vancl.com/oms/2017_9_18_9_53_54_6569_224x472.jpg">
							<img src="http://i4.m.vancl.com/oms/2017_9_18_9_53_56_4552_224x472.jpg">
							<img src="http://i5.m.vancl.com/oms/2017_9_18_9_53_56_5947_224x472.jpg">
							<img src="http://i2.m.vancl.com/oms/2017_9_18_9_53_56_2567_224x472.jpg">
						</div>
					</div>
					<div class="topic">
						<img src="http://i9.m.vancl.com/q80/wap/2017_9_20_11_28_41_3414.jpg">
					</div>
					<div class="clearfix">
						<div class="clearfix1">
							<img src="http://i8.m.vancl.com/q80/wap/2017_9_18_9_4_4_6086.jpg">
							<img src="http://i9.m.vancl.com/q80/wap/2017_9_18_9_4_16_7822.jpg">
						</div>
						<div class="clearfix2">
							<img src="http://i6.m.vancl.com/q80/wap/2017_9_18_9_4_26_3211.jpg">
							<img src="http://i5.m.vancl.com/q80/wap/2017_9_18_9_4_36_1805.jpg">
						</div>
					</div>
					<div class="topic">
						<img src="http://i3.m.vancl.com/q80/wap/2017_9_20_11_29_0_6891.jpg">
					</div>
					<div class="clearfix">
						<div class="clearfix1">
							<img src="http://i7.m.vancl.com/q80/wap/2017_9_18_9_6_52_8837.jpg">
							<img src="http://i4.m.vancl.com/q80/wap/2017_9_18_9_5_45_2273.jpg">
						</div>
						<div class="clearfix2">
							<img src="http://i3.m.vancl.com/q80/wap/2017_9_18_9_5_55_4980.jpg">
							<img src="http://i9.m.vancl.com/q80/wap/2017_9_28_15_50_34_9577.jpg">
						</div>
					</div>
					<div class="topic">
						<img src="http://i3.m.vancl.com/q80/wap/2017_9_20_11_29_10_3628.jpg">
					</div>
					<div class="clearfix">
						<div class="clearfix1">
							<img src="http://i7.m.vancl.com/q80/wap/2017_9_29_11_0_11_7814.jpg">
							<img src="http://i7.m.vancl.com/q80/wap/2017_9_29_11_0_23_3486.jpg">
						</div>
						<div class="clearfix2">
							<img src="http://i3.m.vancl.com/q80/wap/2017_9_18_9_7_28_4982.jpg">
							<img src="http://i3.m.vancl.com/q80/wap/2017_9_18_14_36_38_4916.jpg">
						</div>
					</div>
					<div class="topic">
						<img src="http://i8.m.vancl.com/q80/wap/2017_9_20_11_29_25_1816.jpg">
					</div>
					<div class="clearfix">
						<div class="clearfix1">
							<img src="http://i7.m.vancl.com/q80/wap/2017_9_18_9_9_13_8912.jpg">
							<img src="http://i2.m.vancl.com/q80/wap/2017_9_18_9_10_4_9169.jpg">
						</div>
						<div class="clearfix2">
							<img src="http://i9.m.vancl.com/q80/wap/2017_9_18_9_10_19_6031.jpg">
							<img src="http://i2.m.vancl.com/q80/wap/2017_9_18_9_10_33_9130.jpg">
						</div>
					</div>
					<div class="topic">
						<img src="http://i4.m.vancl.com/q80/wap/2017_9_26_16_23_16_4389.jpg">
					</div>
					<div class="clearfix">
						<div class="clearfix1">
							<img src="http://i7.m.vancl.com/q80/wap/2017_9_26_16_23_30_6065.jpg">
							<img src="http://i2.m.vancl.com/q80/wap/2017_9_26_16_24_4_554.jpg">
						</div>
						<div class="clearfix2">
							<img src="http://i1.m.vancl.com/q80/wap/2017_9_26_16_23_47_5017.jpg">
							<img src="http://i4.m.vancl.com/q80/wap/2017_9_26_16_23_58_6804.jpg">
						</div>
					</div>
					
				<div class="hj"></div>

			</div>
		</div>
</template>

<script>
	export default {
		name: "Fanke",
		data() {
			return {
				swiperOption: {
                    autoplay: {
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true
                    },
                    loop : true
                }
			}
		},
		components: {
		},
		methods: {
			back() {
				history.back();
			}
		}
	}
</script>
<style>
/*---------头部--------*/
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
#fanke{
	width: 100%;
	height: 100%;
}
#fanke .header{
	width: 100%;
	height: 0.48rem;
	background-color: #b81c22;
}
#fanke .header1{
	width: .18rem;
	height: .18rem;
	line-height: .18rem;
	text-align: center;
	position: absolute;
	top: 14px;
	left: 35px;
	border-bottom: 2px solid #fff;
	border-left: 2px solid #fff;
	-webkit-transform: translate(-50%) rotate(45deg);
	cursor: pointer;
}
#fanke .header2{
	height: 0.48rem;
	line-height: 0.48rem;
	font-size: .18rem;
	margin: 40%;
	color: #fff;
}
/*-----------轮播图-------------*/
#fanke .inpic{
	width: 100%;
	height: 2.35rem;
}
#fanke .inpic img{
	width: 100%;
	overflow: hidden;
}
#fanke .nav img{
	width: 100%;
	height: .37rem;
	margin-top: .1rem;
}
#fanke .topic img{
	width: 100%;
	height: .45rem;
	margin-top: .1rem;
}
#fanke .main{
	width: 100%;
	height: 2.37rem;
	margin: 0 auto;
	position: relative;
	z-index: 1;
	overflow-x: scroll;
	/*overflow-y: hidden;*/
}
#fanke .main1{
	width: 160%;
	position: relative;
	transition-duration: 0ms;
	/*overflow-x: visible;*/
	transform: translate3d(0px, 0px, 0px);
}
#fanke .main1 img{
	width: 1.13rem;
	height: 2.37rem;
}
#fanke .track img{
	width: 100%;
	height: 1.25rem;
	margin-top: 10px;
}
#fanke .main_bottom{
	width: 100%;
	height: 2.37rem;
	margin: 0 auto;
	position: relative;
	z-index: 1;
	overflow-x: scroll;
}
#fanke .main1_bottom{
	width: 130%;
	position: relative;
	transition-duration: 0ms;
	transform: translate3d(0px, 0px, 0px);
}
#fanke .main1_bottom img{
	width: 1.13rem;
	height: 2.37rem;
}
#fanke .clearfix{
	width: 100%;
	height: 4.18rem;
}
#fanke .clearfix1 img{
	width: 1.87rem;
	float: left;
	margin-top: .15rem;
}
#fanke .clearfix2 img{
	width: 1.87rem;
	float: left;
	margin-top: .15rem;
}
#fanke .hj{
	width: 100%;
	height: .62rem;
}

</style>
