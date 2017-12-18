<template>
	<div id="dd">


		<!-- 导入加载模块 -->
		<!-- <Load v-if="isShoww" /> -->

		<div class="wrap">
			<div class="topTitle">
				<a href="###"><span class="topBack" @click="back()"></span></a>
				<span class="curTitle">{{ detailTitle }}</span>
			</div>

			<div class="main_dress">
				<div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="item in detail_S">
						<img :src="item">
					</div>

		        </div>
	        <!-- Add Pagination -->
	       		<div class="swiper-pagination"></div>
	        	</div>
			</div>

			<div class="prd-tit clear">
				<span class="name">{{day.name}}</span>
				<span class="price">{{day.price}}</span>
				<div>
					<router-link to="/chongzhi">
					<a href="javascript:void(0)">
						<span style="color: #c8161e;margin-right: .15rem;max-width: 1.65rem;">
							充100返100，点击充值
						</span>
					</a>
					</router-link>
				</div>
				<div class="bb mhr"></div>
				<div class="prd-size clear" id="prd-size"  @click="showToggle">
					<span class="chkbox"></span>
					<span class="size-info" id="size-info">
						选择&nbsp;颜色/尺码
						<!-- {{ title }} -->
					</span>
					<span class="sword-r"></span>
				</div>

				<!-- 尺码颜色选择 -->
				<div class="size-box hide" id="size-box"  v-show="isShow">
					<h3 class="tit">选择颜色</h3>
					<p class="color clear" id="color">
						<span class="size-color" :class="{active:0==curIndex}" @click="curIndex=0">白色</span>
						<span class="size-color" :class="{active:1==curIndex}" @click="curIndex=1">黑色</span>
					</p>
					<h3 class="tit">尺码选择</h3>
					<p class="size" :class="['size1', {sizeClass: 0 == curIndex}]">
						<span class="size-color1">L</span>
						<span class="size-color1">XL</span>
						<span class="size-color1">XXL</span>
					</p>
					<p class="size" :class="['size1', {sizeClass: 1 == curIndex}]">
						<span class="size-color1">M</span>
						<span class="size-color1">L</span>
						<span class="size-color1">XL</span>
					</p>
					<h3 class="tit">购买数量</h3>
					<p class="changecount clear">
						<span class="minus" @click="minus(day)"></span>
						<span id="num" class="num" v-text="day.num">{{ day.num }}</span>
						<span class="plus" @click="add(day)"></span>
					</p>
				</div>

				<div class="bb mhr"></div>
			</div>
			<div class="styleTag"></div>
			<div class="details prd-des">
				<ul>
					<li>
						<a href="javascript:void(0)" class="active"> 商品详情 </a>
					</li>
					<li>
						<a href="javascript:void(0)"> 评论 </a>
					</li>
					<li>
						<a href="javascript:void(0)"> 咨询 </a>
					</li>
				</ul>
			</div>

			<div class="prd-des-cont">
				<div class="autoChangeContent">
					<div class="tagmao0" v-for="item in detail_url">
						<img :src="item">
					</div>
				</div>
			</div>
			<div class="prd-des-cont" id="prd-des-contt" style="display: none;">
				<div class="autoChangeContent">
					<div class="tagmao0">
						<div class="comment">
							<p class="review-uInfo clear">
								<span class="name1">来自:1364***</span>
								<span class="date">2017/11/16 11:24:26</span>
							</p>
							<p class="cont">质量很好，做工细致，很满意，祝生意兴隆。</p>
						</div>
						<div class="comment">
							<p class="review-uInfo clear">
								<span class="name1">来自:1364***</span>
								<span class="date">2017/11/16 11:24:26</span>
							</p>
							<p class="cont">质量很好，做工细致，很满意，祝生意兴隆。</p>
						</div>
						<div class="comment">
							<p class="review-uInfo clear">
								<span class="name1">来自:1364***</span>
								<span class="date">2017/11/16 11:24:26</span>
							</p>
							<p class="cont">质量很好，做工细致，很满意，祝生意兴隆。</p>
						</div>
						<div class="comment">
							<p class="review-uInfo clear">
								<span class="name1">来自:1364***</span>
								<span class="date">2017/11/16 11:24:26</span>
							</p>
							<p class="cont">质量很好，做工细致，很满意，祝生意兴隆。</p>
						</div>
						<div class="comment">
							<p class="review-uInfo clear">
								<span class="name1">来自:1364***</span>
								<span class="date">2017/11/16 11:24:26</span>
							</p>
							<p class="cont">质量很好，做工细致，很满意，祝生意兴隆。</p>
						</div>
					</div>
				</div>
		    </div>

			<!-- 底部 -->
			<div class="blank"></div>
			<div class="details_footer">
				<router-link to="/car1">
				<a href="javascript:void(0)">
					<span class="footer-car"></span>
					<i id="pcount" class="goods-num" style="position: absolute;
						display: inline-block;
						width: .1178rem;
						height: .12rem;
						color: #fff;
						background: #b81c22;
						line-height: .12rem;
						text-align: center;
						bottom: .25rem;
						left: 15%;
						border-radius: 50%;
						font-size: .1rem">{{day.num}}</i>
				</a>
				</router-link>
				<a href="javascript:void(0)" class="addCar">
					<span class="addToCart">加入购物车</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>

	// import Load from './load'
	export default {
		data(){
			return {
				detailTitle: '商品详情',
				detail_S: [],
				detail_url: [],
				isShow: false,
				//加载模块
				// isShoww: true,
				curIndex: 0,
				id: this.$route.query.id,
				list:[],
				day: [],
				orderList: []
			}
		},
		created(){
			//使用axios请求数据
				this.$http.get("./static/clothesData.json", {}).then((res)=>{
					for(var n in res.data.dayList){
						if(res.data.dayList[n].id == this.id){
							this.list.push(res.data.dayList[n])
						}
					}
					for(var n in res.data.newList){
						if(res.data.newList[n].id == this.id){
							this.list.push(res.data.newList[n])
						}
					}
					for(var n in res.data.NiujinList){
						if(res.data.NiujinList[n].id == this.id){
							this.list.push(res.data.NiujinList[n])
						}
					}
					for(var n in res.data.hotList){
						if(res.data.hotList[n].id == this.id){
							this.list.push(res.data.hotList[n])
						}
					}
					for(var n in res.data.waitaoList){
						if(res.data.waitaoList[n].id == this.id){
							this.list.push(res.data.waitaoList[n])
						}
					}
					for(var n in res.data.fanbuList){
						if(res.data.fanbuList[n].id == this.id){
							this.list.push(res.data.fanbuList[n])
						}
					}
	
					this.detail_S = this.list[0].detail_S;
					this.detail_url = this.list[0].detail_url;
					this.day = this.list[0];

					//实现购物车逻辑
					if(this.$store.state.orderList.length > 0){
						for(var n in this.$store.getters.getOrderList) {
							for(var m in this.list) {
								if(this.list[m].name === this.$store.getters.getOrderList[n].name){
									this.list[m].num = this.$store.getters.getOrderList[n].num;
								}
							}
						}
					}
				});
			},
		mounted(){},
		methods: {
			//点击返回上一页面
			back() {
				history.back();
			},
			add(day){
				day.num ++;
				this.$store.dispatch("addOrder", day);
			},
			minus(day){
				if(day.num > 0){
					day.num --;
					this.$store.dispatch("addOrder", day);
				}
			},
			//实现尺码选择部分显示隐藏
			showToggle: function(){
				this.isShow = !this.isShow;
			}

		},
		computed: {
			
		}
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
#dd .wrap{
	width: 100%;
	background: #fff;
	overflow: hidden;
	min-height: 100%;
}
#dd .topTitle{
	width: 100%;
	height: .48rem;
	background: #b81c22;
	text-align: center;
	line-height: .48rem;
	color: #fff;
	font-size: .15rem;
	position: relative;
	/*left: 0;*/
	/*top: 0;*/
}
#dd .topBack{
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
#dd .main_dress{
	width: 100%;
	height: 3.09rem;
	/*margin-top: .48rem;*/
	text-align: center;
}
#dd .main_dress img{
	width: 2.9822rem;
	height: 2.9822rem;
}
#dd .prd-tit{
	padding: .05rem .2rem;
	line-height: .22rem;
}
#dd .prd-tit .name{
	color: #4c4c4c;
	/*margin-left: .12rem;*/
	max-width: 1.65rem;
}
#dd .prd-tit .price{
	color: #c8161e;
	font-size: .15rem;
	margin-left: 6%;
}
#dd .bb{
	display: block;
	border-bottom: 1px solid #ccc;
	height: 1px;
	margin-top: .1rem;
}
#dd .prd-size{
	background: #f5f5f5;
	margin: .09rem 0;
	padding: .08rem .08rem;
	cursor: pointer;
}
#dd .prd-size .chkbox{
	float: left;
	height: .135rem;
	width: .135rem;
	background: url(../assets/img/size_icon.jpg) no-repeat center center;
	background-size: contain;
	margin-right: .08rem;
}
#dd .prd-size .sword-r{
	float: right;
	width: .07rem;
	height: .135rem;
	background: url(../assets/img/swordr_icon.jpg) no-repeat center center;
	background-size: contain;
}
#dd .size-box{
	/*padding: 0 .2rem;*/
	color: #4d4d4d;
}
#dd .size-box .tit{
	font-weight: normal;
	font-size: .12rem;
}
#dd .size-box .disable{
	border: 1px dashed #b3b3b3;
	border-radius: 3px;
	padding: .05rem .08rem;
}
#dd .size-box .size-color{
	border: 1px solid #b3b3b3;
	border-radius: 3px;
	margin-right: .05rem;
	margin-bottom: .05rem;
	padding: .05rem .08rem;
}
#dd .size-box .size-color1{
	border: 1px solid #b3b3b3;
	border-radius: 3px;
	margin-right: .05rem;
	margin-bottom: .05rem;
	padding: .05rem .08rem;
}
#dd .size-box .size-color1:hover{
	border: 1px solid #b81c20;
}

#dd .size-box .color, #dd .size-box .size{
	padding-top: .1rem;
	border-bottom: 1px solid #ccc;
	margin-bottom: .09rem;
	padding-bottom: .15rem;
	/*display: none;*/
}
#dd .size-box .size1{
	padding-top: .1rem;
	border-bottom: 1px solid #ccc;
	margin-bottom: .09rem;
	padding-bottom: .15rem;
	display: none;
}
#dd .size-box .sizeClass{
	display: block;
}


#dd .size-box .active{
	border: 1px solid #b81c20;
	border-radius: 3px;
	padding: .05rem .08rem;
}
#dd .minus{
	background: #f5f5f5 url(../assets/img/minus.jpg) no-repeat center center;
	background-size: contain;
	border: 1px solid #f5f5f5;
}
#dd .num{
	border: 1px solid #f5f5f5;
	margin-left: 2%;
}
#dd .plus{
	background: #f5f5f5 url(../assets/img/plus.jpg) no-repeat center center;
	background-size: contain;
	border: 1px solid #f5f5f5;
}
#dd .changecount span{
	float: left;
	width: .24rem;
	height: .24rem;
	line-height: .24rem;
	text-align: center;
	border-radius: .01rem;
	display: inline-block;
}
#dd .changecount{
	vertical-align: middle;
	padding-bottom: .3rem;
	margin-top: .1rem;
}
#dd .styleTag{
	background: #fff;
	height: 1px;
}
#dd .details{
	width: 100%;
	height: .57rem;
	line-height: .57rem;
	border-bottom: 1px solid #666;
}
#dd .details ul{
	display: block;
	margin: .15rem auto;
}
#dd .details li{
	width: 33%;
	float: left;
	color: #4c4c4c;
	text-align: center;
}
#dd .details .active{
	color: #c8161e;
}
#dd .details a:hover{
	color: #c8161e;
}


/********评论部分*********/
#dd #prd-des-contt .comment{
	padding: .1rem .2rem;
	color: #999;
	border-bottom: 1px dashed #999;
}

#dd #prd-des-contt .comment .review-uInfo{
	margin-bottom: .05rem;
}
#dd #prd-des-contt .comment .review-uInfo .name1{
	float: left;
	font-size: .13rem;
}
#dd #prd-des-contt .cont{
	margin-top: .2rem;
	font-size: .13rem;
}
#dd #prd-des-contt .comment .review-uInfo .date{
	float: right;
	font-size: .13rem;
}

/******* 底部 *********/
#dd .details_footer{
	background: #fff;
	border-top: 1px solid #999;
	width: 100%;
	height: .37rem;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 2;
}
#dd .details_footer a{
	display: block;
	float: left;
	width: 50%;
	text-align: center;
	height: .37rem;
	line-height: .37rem;
}
#dd .details_footer .footer-car{
	display: inline-block;
	width: .3rem;
	height: .3rem;
	line-height: .37rem;
	overflow: hidden;
	background-image: url(../assets/img/navBgimgNew.png);
	background-size: .36rem 5rem;
	background-repeat: no-repeat;
	background-position: 0rem -1.47rem;
}
#dd .addCar{
	background: #b81c22;
	color: #fff;
}

#dd .blank{
	width: 100%;
	height: .37rem;
}

/*******************/
#dd .prd-des-cont{
	width: 100%;
	padding-top: .1rem;
}
#dd .autoChangeContent{
	width: 100%;
}
#dd .tagmao0 img{
	width: 100%;
}
</style>
