/*---------------------- 首页 ------------------------------*/
var index = {
	template : 
		`
			<div id="main1">
						<div class="index_top">
							<form class="search_form">
								<input type="button" class="search-icon" id="search-btn">
								<input type="search-input" name="keyWord" value autocomplete="off" placeholder="熊本熊" class="search-input">
							</form>
							<a href="javascript:void(0)" class="index-message">
								<span class="hasNewMsg"></span>
							</a>
						</div>
						<div class="index_lb">
							<div class="swiper-container">
						        <div class="swiper-wrapper">
						            <div class="swiper-slide"><a href="javascript:void(0)"><img src="img/2017_10_27_18_4_34_8652_640x402.jpg"></a></div>
						            <div class="swiper-slide"><a href="javascript:void(0)"><img src="img/2017_10_30_15_58_14_549_640x402.jpg"></a></div>
						            <div class="swiper-slide"><a href="javascript:void(0)"><img src="img/2017_11_1_21_50_27_6647_640x402.jpg"></a></div>
						        </div>
						        <!-- Add Pagination -->
						    	<div class="swiper-pagination"></div>
							</div>
						</div>
						<div class="t1000">
							<div class="t1001">
								<a href="chongzhi.html"><img src="img/2017_10_23_20_11_39_2208_320x50.jpg"></a>
							</div>
							<div class="t1001">
								<a href="huojiang.html"><img src="img/2017_10_23_20_12_16_3337_320x50.jpg"></a>
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
						<div class="SKContent">
							<div class="t1000">
								<div class="t1001">
									<a href="details.html">
										<img src="img/2017_11_3_15_41_36_1266_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_36_1266_320x427.jpg">
									</a>
								</div>
							</div>

							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_36_1266_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_36_1266_320x427.jpg">
									</a>
								</div>
							</div>
						</div>
						<div class="t10">
							<div>
								<a href="chenshan.html">
									<img src="img/2017_8_24_11_40_4_1696_640x151.jpg">
								</a>
							</div>
						</div>
						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_8_10_9_39_6_2670_640x80.jpg">
								</a>
							</div>
						</div>
						<div class="SKContent1">
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_17_14_55_1480_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_17_14_55_1480_320x427.jpg">
									</a>
								</div>
							</div>

							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_17_14_55_1480_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_17_14_55_1480_320x427.jpg">
									</a>
								</div>
							</div>
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_17_14_55_1480_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_17_14_55_1480_320x427.jpg">
									</a>
								</div>
							</div>
						</div>
						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_10_30_16_52_43_3124_1282x710.jpg">
								</a>
							</div>
						</div>
						<div class="SKContent2">
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_45_31_7285_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_45_31_7285_320x427.jpg">
									</a>
								</div>
							</div>
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_45_31_7285_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_45_31_7285_320x427.jpg">
									</a>
								</div>
							</div>
						</div>
						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_10_30_16_52_56_4070_1282x710.jpg">
								</a>
							</div>
						</div>
						<div class="SKContent3">
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_23_7604_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_23_7604_320x427.jpg">
									</a>
								</div>
							</div>
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_23_7604_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_23_7604_320x427.jpg">
									</a>
								</div>
							</div>
						</div>
						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_8_10_9_49_54_5684_640x80.jpg">
								</a>
							</div>
						</div>
						<div class="SKContent4">
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 2 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 3 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 4 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 5 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 6 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 7 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_41_46_6052_320x427.jpg">
									</a>
								</div>
							</div>
						</div>
					
						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_10_30_16_53_21_7742_1282x710.jpg">
								</a>
							</div>
						</div>
						<div class="SKContent5">
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_16_15_49_6534_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_16_15_49_6534_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 2 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_16_15_49_6534_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_16_15_49_6534_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 3 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_16_15_49_6534_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_16_15_49_6534_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 4 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_16_15_49_6534_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_16_15_49_6534_320x427.jpg">
									</a>
								</div>
							</div>
						</div>
						
						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_10_30_16_53_35_3030_1282x710.jpg">
								</a>
							</div>
						</div>
						<div class="SKContent5">
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_42_4_2145_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_42_4_2145_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 2 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_42_4_2145_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_42_4_2145_320x427.jpg">
									</a>
								</div>
							</div>
							<!-- 3 -->
							<div class="t1000">
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_42_4_2145_320x427.jpg">
									</a>
								</div>
								<div class="t1001">
									<a href="javascript:void(0)">
										<img src="img/2017_11_3_15_42_4_2145_320x427.jpg">
									</a>
								</div>
							</div>
						</div>
						
						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_10_30_15_19_33_7979_640x183.jpg">
								</a>
							</div>
						</div>
						
						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_10_30_15_19_33_7979_640x183.jpg">
								</a>
							</div>
						</div>
						
						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_10_30_15_19_33_7979_640x183.jpg">
								</a>
							</div>
						</div>

						<div class="t10">
							<div>
								<a href="javascript:void(0)">
									<img src="img/2017_10_30_15_19_33_7979_640x183.jpg">
								</a>
							</div>
						</div>
						<div class="allAndtop">
							<div class="lookmore">
								<a href="javascript:void(0)">
									<img src="img/see-all.jpg">
								</a>
							</div>
							<div class="lookmore">
								<a href="javascript:void(0)">
									<img src="img/ret-top.jpg">
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
									<img src="img/help1.png">
								</a></li>
								<li><a href="javascript:void(0)">
									<img src="img/download1.png">
								</a></li>
								<li><a href="javascript:void(0)">
									<img src="img/weixin1.png">
								</a></li>
								<li><a href="javascript:void(0)">
									<img src="img/pcsite1.png">
								</a></li>
							</ul>
							<div class="nav_bottom">
								<h3>京ICP证100557号
								</h3>
							</div>
						</div>
						<div class="blank"></div>
						<div class="footer">
							<a href="javascript:void(0)">
								<router-link to="/index">
									<span class="footer-home-active"></span>
								<router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/classify">
									<span class="footer-search"></span>
								</router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/fanke">
									<span class="footer-Tshirt"></span>
								</router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/car">
									<span class="footer-car"></span>
								</router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/geren">
									<span class="footer-mine"></span>
								</router-link>
							</a>
						</div>
			</div>
		`,
		
};
// Vue.component("yy",index)
/*----------------------- 分类 -----------------------------*/
var classify = {
	template : 
		`
		<div id="classify_y">
			<div class="yyc_main">
					<div class="yyc_header">
						<a href="index.html"><span class="yyc_header1"></span></a>
						<span class="yyc_header2">分类</span>
					</div>
					<div class="yyc_main_left">
						<ul>
							<li v-for="item in list">
								{{item.TypeName}}
							</li>
						</ul>
					</div>
					<div class="yyc_main_right">
						<ul>
							<li>
								<a href="classifys.html">
									<img src="img/6378353-1j201709090039435468.jpg">
								</a>
								<span>卫衣</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6375651-1j201709151926288158.jpg">
								</a>
								<span>外套</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6375440-1j201709151926140815.jpg">
								</a>
								<span>大衣</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6378261-1j201709211359324069.jpg">
								</a>
								<span>针织衫</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6377096-1201709181534482577.jpg">
								</a>
								<span>吉国武</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6377955-1j201709181637082123.jpg">
								</a>
								<span>牛津纺</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6375163-1j201709151925189721.jpg">
								</a>
								<span>水柔棉</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6377971-1j201709260833241850.jpg">
								</a>
								<span>休闲衫</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6373863-1j201709191136144818.jpg">
								</a>
								<span>皮肤衣</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6378464-1j201709221623443761.jpg">
								</a>
								<span>童装</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6375237-1j201609181106554831.jpg">
								</a>
								<span>休闲裤</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6375663-1201702221659421316.jpg">
								</a>
								<span>牛仔裤</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6375881-1j201702281503335949.jpg">
								</a>
								<span>帆布鞋</span>
							</li>
							<li>
								<a href="classifys.html">
									<img src="img/6375869-1j201703301445582286.jpg">
								</a>
								<span>复古跑</span>
							</li>
						</ul>
					</div>
					<div class="footer">
							<a href="javascript:void(0)">
								<router-link to="/index">
									<span class="footer-home-active"></span>
								<router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/classify">
									<span class="footer-search"></span>
								</router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/fanke">
									<span class="footer-Tshirt"></span>
								</router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/car">
									<span class="footer-car"></span>
								</router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/geren">
									<span class="footer-mine"></span>
								</router-link>
							</a>
						</div>
			</div>
		</div>
		`,
		data (){
			return{
				list : {}
			}
		},
		created : function(){
			// 使用axios请求数据
			axios.get("/Product" ,{
				params : {}
			}).then((res)=>{
				console.log(res.data);
				this.list = res.data
			})
		}

}
// Vue.component("yy2",classify)
//
var fanke = {
	template : 
		`
		<div id="fanke">
			<div class="yy_main">
				<div class="header">
					<a href="index.html"><span class="header1"></span></a>
					<span class="header2">私人定制</span>
				</div>
						<!-- 轮播图-->
						<div class="inpic">
							
							<div class="swiper-container">
							        <div class="swiper-wrapper">
							            <div class="swiper-slide"><a href="#"><img src="http://i7.m.vancl.com/q80/wap/2017_10_30_16_25_38_1273.jpg"></a></div>
							            <div class="swiper-slide"><a href="#"><img src="http://i2.m.vancl.com/q80/wap/2017_10_31_9_42_59_8712.jpg"></a></div>
							            <div class="swiper-slide"><a href="#"><img src="http://i4.m.vancl.com/q80/wap/2017_10_30_16_25_29_7741.jpg"></a></div>
							            <div class="swiper-slide"><a href="#"><img src="http://i2.m.vancl.com/q80/wap/2017_10_30_16_25_13_6173.jpg"></a></div>
							        </div>
							    <div class="swiper-pagination"></div>
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
						<!-- 底部导航栏 -->
					<div class="footer">
							<a href="javascript:void(0)">
								<router-link to="/index">
									<span class="footer-home-active"></span>
								<router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/classify">
									<span class="footer-search"></span>
								</router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/fanke">
									<span class="footer-Tshirt"></span>
								</router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/car">
									<span class="footer-car"></span>
								</router-link>
							</a>
							<a href="javascript:void(0)">
								<router-link to="/geren">
									<span class="footer-mine"></span>
								</router-link>
							</a>
						</div>
			</div>
		</div>
		`
}
//购物车
var car = {
	template :
		`
	<div id="wrap_car">
			<div class="topTitle">
				<a href="index.html"><span class="topBack"></span></a>
				<span class="curTitle">购物车</span>
			</div>
			<div class="others-content">
				<div class="shoppingCar-null">
					<div class="shoppingCar-null-pic">
						<p class="car-img">
							<img src="img/null-car.png">
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
						<img src="img/help1.png">
					</a></li>
					<li><a href="javascript:void(0)">
						<img src="img/download1.png">
					</a></li>
					<li><a href="javascript:void(0)">
						<img src="img/weixin1.png">
					</a></li>
					<li><a href="javascript:void(0)">
						<img src="img/pcsite1.png">
					</a></li>
				</ul>
				<div class="nav_bottom">
					<h3>京ICP证100557号
					</h3>
				</div>
					</div>
				</div>
			</div>
		<div class="footer">
			<a href="javascript:void(0)">
				<router-link to="/index">
					<span class="footer-home-active"></span>
				<router-link>
			</a>
			<a href="javascript:void(0)">
				<router-link to="/classify">
					<span class="footer-search"></span>
				</router-link>
			</a>
			<a href="javascript:void(0)">
				<router-link to="/fanke">
					<span class="footer-Tshirt"></span>
				</router-link>
			</a>
			<a href="javascript:void(0)">
				<router-link to="/car">
					<span class="footer-car"></span>
				</router-link>
			</a>
			<a href="javascript:void(0)">
				<router-link to="/geren">
					<span class="footer-mine"></span>
				</router-link>
			</a>
		</div>
		
	</div>
		`,
		//请求数据
		data(){
			return{
				proList: [
					{name: "凡客衬衫&nbsp;牛仔&nbsp宽松&nbsp;女款", color: "蓝色", size: "M", price: "￥298"}
					],
					totalNum: 0,
					totalMoney: 0,

			}

		},
		method: {
			comput(){
				var totalNum = 0,
					totalMoney = 0;
				this.proList.forEach(function(item){
					totalNum += item.num;
					totalMoney += item.num * item.price;
				});
				bus.$emit("cartComput", totalNum, totalMoney);

			},
			props: ["totalNum", "totalMoney"],
			created: function(){
				var _t = this;
				bus.$on("cartComput", function(totalNum, totalMoney){
					_t.totalMoney = totalMoney;
					_t.totalNum = totalNum
				})
			}
		}
}
// Vue.component("yy4",car)
var geren = {
	template : 
		`<div id="geren">
			<div class="main">
				<div class="header">
					<a href="index.html"><span class="header1"></span></a>
					<span class="header2">个人中心</span>
				</div>
				<div class="main1">
					<div class="main2">
						<a  class="main3" href="#"></a>
					</div>
					<div class="clear">
						<img src="http://i10.m.vancl.com/Content/H5/img/H5-V0.jpg">
						<p class="clear1">17801174815</p>
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
							<a href="#" class="section3">
								<span></span>
								<span class="section4">充值返现</span>
								<!-- <span class="section5">充100返100</span> -->
							</a>
						</li>
					</ul>
				</div>
				<div class="footer">
					<a href="javascript:void(0)">
						<router-link to="/index">
							<span class="footer-home-active"></span>
						<router-link>
					</a>
					<a href="javascript:void(0)">
						<router-link to="/classify">
							<span class="footer-search"></span>
						</router-link>
					</a>
					<a href="javascript:void(0)">
						<router-link to="/fanke">
							<span class="footer-Tshirt"></span>
						</router-link>
					</a>
					<a href="javascript:void(0)">
						<router-link to="/car">
							<span class="footer-car"></span>
						</router-link>
					</a>
					<a href="javascript:void(0)">
						<router-link to="/geren">
							<span class="footer-mine"></span>
						</router-link>
					</a>
				</div>
			</div>
		</div>
		`
}
// Vue.component("yy5",geren)
var routers = [{
	path : "/index",
	component : index
},
{
	path : "/classify",
	component : classify
},
{
	path : "/fanke",
	component : fanke
},
{
	path : "/car",
	component : car
},
{
	path : "/geren",
	component : geren
},
{
	path : "/",
	redirect : "/index"
}];

// 创建路由实例 routers属性初始化路由表
var router = new VueRouter({
	routes : routers
});

// 创建vue实例  router属性初始化路由对象
var vue = new Vue({
	el : "#app",
	router : router
	
})