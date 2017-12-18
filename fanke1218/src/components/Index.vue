<template>
	<div id="main1">
		<div class="index_top">
			<form class="search_form">
				<input type="button" class="search-icon" id="search-btn">
				<input type="search-input" name="keyWord" value autocomplete="off" placeholder="熊本熊" class="search-input" @click="showToggle">
			</form>
			<a href="javascript:void(0)" class="index-message">
				<span class="hasNewMsg"></span>
			</a>
		</div>
		<div class="index_lb">
			<div class="swiper-container">
		        <swiper :options="swiperOption" ref="mySwiper">
		            <swiper-slide><img src="http://i2.m.vancl.com/wap/2017_11_30_17_35_54_2768_640x402.jpg" alt=""></swiper-slide>
		            <swiper-slide><img src="http://i2.m.vancl.com/wap/2017_12_1_17_20_42_2887_640x402.jpg" alt=""></swiper-slide>
		            <swiper-slide><img src="http://i5.m.vancl.com/wap/2017_12_1_17_20_57_5835_640x402.jpg" alt=""></swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
	        	</swiper>
		        <!-- Add Pagination -->
		    	<!-- <div class="swiper-pagination"></div> -->
			</div>
		</div>
		<div class="t1000">
			<div class="t1001">
				<router-link to="/chongzhi">
					<img src="../assets/img/2017_10_23_20_11_39_2208_320x50.jpg">
				</router-link>
			</div>
			<div class="t1001">
				<router-link to="huojiang">
					<img src="../assets/img/2017_10_23_20_12_16_3337_320x50.jpg">
				</router-link>
			</div>
		</div>
		<a href="javascript:void(0)" class="seckill-txt">
			<div class="index-txt">
				<span class="clock-ison"></span>
				每日秒杀
			</div>
			<span class="enter-seckill">
				进入会场
				<span class="right-arrIcon"></span>
			</span>
			<div class="index-clock">
				<span class="time">10点场</span>
				<span class="countdown" id="countdown">00时45分13秒</span>
			</div>
		</a>
		<!-- 每日秒杀部分 -->
		<div class="SKContent">
			<div class="t1001" v-for="item in dayList" :key="item.id" @click="push(item.id)">
				<a href="javascript:void(0)" >
					<img v-lazy="item.img" alt="">
				</a>
			</div>
		</div>


		<div class="t10">
			<div>
				<router-link to="/chenshan">
					<a href="chenshan.html">
						<img src="../assets/img/2017_8_24_11_40_4_1696_640x151.jpg">
					</a>
				</router-link>
			</div>
		</div>
		<div class="t10">
			<div>
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_8_10_9_39_6_2670_640x80.jpg">
				</a>
			</div>
		</div>

		<!-- 新品推荐部分 -->
		<div class="SKContent1">
			<div class="t1000">
				<div class="t1001" v-for="item in newList" :key="item.id" @click="push(item.id)">
					<a href="javascript:void(0)">
						<img v-lazy="item.img">
					</a>
				</div>
			</div>
		</div>


		<!-- 衬衫部分 -->
		<div class="t10">
			<div>
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_10_30_16_52_43_3124_1282x710.jpg">
				</a>
			</div>
		</div>
		<div class="SKContent2">

			<div class="t1001" v-for="item in NiujinList" :key="item.id">
				<a href="javascript:void(0)">
					<img v-lazy="item.img">
				</a>
			</div>
		</div>

		<div class="t10">
			<div>
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_8_10_9_49_54_5684_640x80.jpg">
				</a>
			</div>
		</div>
		<div class="SKContent4">
			<div class="t1000">
				<div class="t1001" v-for="item in hotList" :key="item.id">
					<a href="javascript:void(0)">
						<img v-lazy="item.img">
					</a>
				</div>
			</div>
		</div>

		<div class="t10">
			<div>
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_10_30_16_53_21_7742_1282x710.jpg">
				</a>
			</div>
		</div>
		<div class="SKContent5">
			<div class="t1000">
				<div class="t1001" v-for="item in fanbuList" :key="item.id">
					<a href="javascript:void(0)">
						<img v-lazy="item.img">
					</a>
				</div>
			</div>
		</div>

		<div class="t10">
			<div>
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_10_30_16_53_35_3030_1282x710.jpg">
				</a>
			</div>
		</div>
		<div class="SKContent5">
			<div class="t1000">
				<div class="t1001" v-for="item in waitaoList" :key="item.id">
					<a href="javascript:void(0)">
						<img v-lazy="item.img">
					</a>
				</div>
			</div>
		</div>

		<div class="t10">
			<div>
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_10_30_15_19_33_7979_640x183.jpg">
				</a>
			</div>
		</div>

		<div class="t10">
			<div>
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_10_30_15_19_33_7979_640x183.jpg">
				</a>
			</div>
		</div>

		<div class="t10">
			<div>
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_10_30_15_19_33_7979_640x183.jpg">
				</a>
			</div>
		</div>

		<div class="t10">
			<div>
				<a href="javascript:void(0)">
					<img src="../assets/img/2017_10_30_15_19_33_7979_640x183.jpg">
				</a>
			</div>
		</div>
		<div class="allAndtop">
			<div class="lookmore">
				<a href="javascript:void(0)">
					<img src="../assets/img/see-all.jpg">
				</a>
			</div>
			<div class="lookmore">
				<a href="javascript:void(0)">
					<img src="../assets/img/ret-top.jpg">
				</a>
			</div>
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
			<div class="nav_bottom">
				<h3>京ICP证100557号
				</h3>
			</div>
		</div>
		<div class="blank"></div>



		<div id="search-popup" class="search-popup" v-show="isShow">
			<div class="searchh">

				<p class="hotwords-tit">热搜</p>
				<div class="lshi">
					<span class="x1">熊本熊</span>
					<span class="x1">T恤</span>
					<span class="x1">免烫衬衫</span>
					<span class="x1">帆布鞋</span>
					<span class="x1">短袖衬衫</span>
				</div>
			</div>

			<div class="search-history">
				<span class="search-history-tit">历史搜索</span>
				<ul></ul>
			</div>

			<div id="clear-srhHistory" class="clear-srhHistory">清除历史</div>
		</div>

	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		data(){
			return{
				isShow: false,
				isShoww: true,
				// obj:[],
				dayList: [],
				newList: [],
				hotList: [],
				NiujinList: [],
				fanbuList: [],
				waitaoList: [],
				//图片轮播
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
			swiper,
            swiperSlide
		},
		methods: {
			showToggle: function(){
				this.isShow = !this.isShow;
			},

			push(id) {
				this.$router.push({
					path: '/Details',
					query: {
						id: id
					}
				})
			}
		},
		created() {
			setTimeout(() => {
				//使用axios请求数据
				this.$http.get("./static/clothesData.json", {}).then((res) => {
					console.log(res.data);
					console.log(res.data.dayList);
					// console.log(res.data.dayList[this.id-1].detail_S);
					this.dayList = res.data.dayList;
					this.newList = res.data.newList;
					this.hotList = res.data.hotList;
					this.NiujinList = res.data.NiujinList;
					this.hotList = res.data.hotList;
					this.fanbuList = res.data.fanbuList;
					this.waitaoList = res.data.waitaoList;
					// console.log(this.dayList);
					this.isShoww = false;
					// this.obj = res.data.
				})
			}, 3000)
		}
	}

</script>

<style>
#search-popup{
	position: fixed;
	width: 100%;
	height: 100%;
	display: block;
	z-index: 2;
	background: rgba(0, 0, 0, .8);
	top: .48rem;
	left: 0;
	/*display: none;*/
}
.searchh{
	width: 100%;
	padding-bottom: .05rem;
	border-bottom: 1px solid #fff;
	overflow-x: hidden;
	color: #fff;
}
.searchh p{
	margin: .05rem auto .05rem .1rem;
	color: #999;
}
.lshi{
	color: #fff;
	overflow-x: hidden;
	font-size: .1rem;
	width: 100%;
}
.lshi .x1{
	display: flex;
	flex: 1;
	width: 19%;
	display: inline-block;
	height: .16rem;
	text-align: center;
}
.search-history span{
	margin: .05rem auto .05rem .1rem;
	display: block;
	color: #999;
}
.clear-srhHistory{
	width: 35%;
	height: .26rem;
	line-height: .26rem;
	margin: .1rem auto 0;
	border: 1px solid #fff;
	border-radius: 2px;
	text-align: center;
	cursor: pointer;
	color: #fff;
	font-size: .1rem;
}
#main1{
	width: 100%;
	height: 100%;
}
#main1 .FK_index{
	width: 100%;
	height: 100%;
}
body{
	background: #f2f2f2;
}
#main1 .index_top{
	width: 100%;
	height: .48rem;
	background: #b81c22;
	z-index: 2;
	position: fixed;
	left: 0;
	top: 0;
}
#main1 .search_form{
	position: absolute;
	left: 3%;
	top: .09rem;
	width: 85%;
	height: .3rem;
	line-height: .4rem;
	background: #fff;
	border-radius: 4px;
	overflow: hidden;
}
#main1 .search_form .search-icon{
	position: absolute;
	left: 2%;
	top: .07rem;
	display: inline-block;
	width: .18rem;
	height: .18rem;
	border: 0;
	background: url(http://i10.m.vancl.com/Content/H5/img/search2.png) no-repeat;
	background-size: contain;
	cursor: pointer;
}
#main1 .search-input{
	font-size: inherit;
	position: absolute;
	top: .08rem;
	left: 12%;
	border: 0 none;
	display: inline-block;
}
#main1 .index-message{
	position: absolute;
	top: .15rem;
	width: .2159rem;
	height: .1559rem;
	right: 3%;
	background: url(http://i10.m.vancl.com/Content/H5/img/msg3.png) no-repeat;
	cursor: pointer;
	background-size: .2159rem .1559rem;
}
#main1 .hasNewMsg{
	position: absolute;
	top: -.03rem;
	right: -10%;
	border: .02rem solid #fff;
	border-radius: 50%;
}

/*------------- 购物车小图标 ------------------*/
#main #pcount .goods-num{
	position: absolute;
	display: inline-block;
	width: .1178rem;
	height: .12rem;
	color: #fff;
	background: #b81c22;
	line-height: .12rem;
	text-align: center;
}
#main1 .index_lb{
	width: 100%;
	height: 2.3555rem;
	margin-top: .48rem;
}
#main1 .index_lb a{
	width: 100%;
}
#main1 .index_lb img{
	width: 100%;
	max-width: 100%;
}
#main1 .t1000{
	width: 100%;
	overflow: hidden;
	margin-top: 2px;
}
#main1 .t1001{
	width: 50%;
	float: left;
}
#main1 .seckill-txt{
	display: block;
	color: #000;
	background: #fff;
	text-align: center;
	margin: .04rem 0;
	padding: .04rem 0;
	position: relative;
	-webkit-tap-highlight-color: transparent;
}
#main1 .clock-ison{
	display: inline-block;
	width: .168rem;
	height: .168rem;
	vertical-align: text-bottom;
	background: url('http://i10.m.vancl.com/Content/H5/img/clock.png') no-repeat top center;
	background-size: contain;
}
#main1 .index-txt{
	color: #b81c22;
	font-size: .16rem;
	font-weight: bold;
}
#main1 .enter-seckill{
	position: absolute;
	top: .15rem;
	color: #b81c22;
	right: 3%;
	width: .84rem;
	height: .26rem;
	background: url('http://i10.m.vancl.com/Content/H5/img/right-arrow.png') no-repeat 100% .05rem;
	background-size: .1rem .1rem;
}
#main1 .index-clock{
	margin-top: .06rem;
}
#main1 .index-clock .time{
	color: #000;
	font-weight: bold;
	font-size: .15rem;
}
#main1 .SKContent, #main1 .SKContent1, #main1 .SKContent2, #main1 .SKContent3, #main1 .SKContent4{
	width: 100%;
}
.SKContent1{
	/*font-size: 0;*/
	/*flex: 1;*/
}

#main .SKContent1 .t1001{
	/*font-size: .14rem;*/
	float: left;
	width: 49.5%;
}
#main1 .SKContent img{
	width: 100%;
	overflow: hidden;
}
#main1 .SKContent a{
	width: 100%;
}

#main1 .t10{
	width: 100%;
	overflow: hidden;
	margin-top: .02rem;
}
#main1 .t1001 a{
	width: 50%;
}
#main1 .t1001 img{
	width: 100%;
}
#main1 .t10 a{
	width: 100%;
}
#main1 .t10 img{
	width: 100%;
}
#main1 .blank{
	width: 100%;
	height: .52rem;
}

/****************/
#main1 .allAndtop{
	width: 100%;
	height: auto;
	margin-top: .02rem;
	overflow: hidden;
	margin-bottom: .32rem;
}
#main1 .lookmore{
	width: 50%;
	float: left;
}
#main1 .lookmore img{
	width: 100%;
}
#main1 .login{
	width: 100%;
	padding: .35rem 0;
	text-align: center;
}
#main1 .login i{
	font-style: normal;
}
#main1 .user-info{
	background: #fff;
	width: 1.5702rem;
	height: .34rem;
	line-height: .34rem;
	margin-left: 28%;
	color: #4c4c4c;
}
#main1 .index_foot{
	width: 100%;
	height: 1.2rem;
	text-align: center;
}
#main1 .index_foot ul{
	display: inline-block;
	border-bottom: 1px solid #4c4d4d;
	border-top: 1px solid #4c4d4d;
	padding: .12rem 0;
	zoom: 1;
}
#main1 .index_foot li{
	float: left;
}
#main1 .index_foot img{
	width: .42rem;
	height: .6239rem;
	padding: 0 .1rem;
}
#main1 .nav_bottom h3{
	font-weight: normal;
	font-size: .12rem;
}
</style>
