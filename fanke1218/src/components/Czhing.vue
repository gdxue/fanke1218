<template>
	<div id="wrap_cz">
		<div class="topTitle">
			<a href="index.html"><span class="topBack"></span></a>
			<span class="curTitle">充值返现</span>
		</div>
		<div class="others-content">
			<div class="paywrap">
				<div class="payNoticeImg"></div>
				<div class="payinfo">
					余额<span class="remainmoney">￥&nbsp;0</span>
				</div>
				<div class="paymoney">
					<p id="paymoney-txt" class="paymoney-txt">
						充100返100
					</p>
					<div class="paymoney-item onebox activeline">
						<a href="javascript:void(0)">
							<span class="reduceMon">
								<span>-</span>
							</span>
						</a>
						<a href="javascript:void(0)">
							<input id="otherMon" class="otherMon" type="tel" value="100" placeholder="100" size="6" maxlength="6">
						</a>
						<a href="javascript:void(0)">
							<span class="addMon">
								<span>+</span>
							</span>
						</a>
					</div>
					<ul class="payment-rule">
						温馨提示:
						<li class="rule-item">
							1、充返100%，充值金额最低为100元，单笔上限为200000元
						</li>
						<li class="rule-item">
							2、您可自行手动输入充值金额，金额最低为100元
						</li>
					</ul>
				</div>
				<div>
					<p class="paymethod">
						<span style="margin-left: .15rem;">支付方式：</span>
						<span class="zfb"></span>
						<span style="margin-left: .22rem">支付宝</span>
					</p>
					<p class="payscan" id="payscan">
						点击充值，即表示您已同意活动规则
					</p>
					<p>
						<a href="javascript:void(0)" class="paybtn">
							<span>充值</span>
						</a>
					</p>
					<div id="display-payrule" class="display-payrule">
						<a href="javascript:void(0)">
							点击显示活动规则
							<span></span>
						</a>
					</div>
					<div class="payrule" id="payrule">
						<div>活动规则：</div>
						<div class="rule-item">
							<span>1、</span>
							<p>充值成功后，您的充值金额及赠送金额将会实时进入您的凡客账户</p>
						</div>
						<div class="rule-item">
							<span>2、</span>
							<p>在活动期间，不限充值次数，可累计充值，多充多送</p>
						</div>
						<div class="rule-item">
							<span>3、</span>
							<p>充值金额仅可通过您的个人账户购买凡客商品，定制</p>
						</div>
						<div class="rule-item">
							<span>4、</span>
							<p>使用充值金额购物的订单，按凡客退货规则办理退换货，退货订单产生的退款将返回账户</p>
						</div>
						<div class="rule-item">
							<span>5、</span>
							<p>发票金额按您实际消费的金额开具，赠送金额消费不能开具发票</p>
						</div>
						<div class="rule-item">
							<span>6、</span>
							<p>余额有效日期：永久有效</p>
						</div>
					</div>
				</div>
				<div class="blank"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Czhing'
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
#wrap_cz{
	width: 100%;
	min-height: 100%;
	background: #fff;
}
#wrap_cz .topTitle{
	width: 100%;
	height: .48rem;
	background: #b81c22;
	text-align: center;
	line-height: .48rem;
	color: #fff;
	font-size: .16rem;
	position: relative;
}
#wrap_cz .topBack{
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
#wrap_cz .others-content{
	position: relative;
	top: 0rem;
	margin-bottom: .425rem;
	max-width: 640px;
	width: 100%;
	height: 100%;
	background: #fff;
}
#wrap_cz .paywrap{
	height: auto;
	overflow: hidden;
	margin: 0 auto;
	position: relative;
	background: #f8f8f8;
}
#wrap_cz .payNoticeImg{
	width: 100%;
	height: 2.28rem;
	background: url(../assets/img/2017_10_17_22_1_10_7020_640x380.jpg) no-repeat;
	background-size: 100% 2.28rem;
}
#wrap_cz .payinfo{
	width: 100%;
	height: .5359rem;
	margin: .16rem 0 .16rem 0;
	text-align: center;
	background: #fff;
	border-bottom: 1px solid #d8d8d8;
	border-top: 1px solid #d8d8d8;
	line-height: .5359rem;
	color: #000;
}
#wrap_cz .remainmoney{
	color: #ca3222;
	font-size: .23rem;
	font-weight: bold;
	margin-left: 6%;
}
#wrap_cz .paymoney{
	padding: .075rem .14rem;
	border-top: 1px solid #d8d8d8;
	border-bottom: 1px solid #d8d8d8;
	background: #fff;
}
#wrap_cz .paymoney .paymoney-txt{
	font-size: .16rem;
	font-weight: bold;
	color: #ca3222;
	text-align: center;
}
#wrap_cz .activeline{
	color: #b81b22;
	border: 1px solid #b81b22;
}
#wrap_cz .onebox{
	margin: .075rem auto;
}
#wrap_cz .paymoney-item{
	width: 1.76rem;
	height: .52rem;
	vertical-align: middle;
	display: table;
}
#wrap_cz .paymoney-item a{
	display: table-cell;
	vertical-align: middle;
}
#wrap_cz .reduceMon, .addMon{
	display: block;
	width: .3959rem;
	height: .3239rem;
	font-weight: bolder;
	text-align: center;
	line-height: .3239rem;
	border-radius: 2px;
	margin: 0 .04rem;
	cursor: pointer;
	font-size: .3rem;
	font-weight: 100;
	color: #000;
	background-color: #e4e4e4;
}
#wrap_cz .paymoney-item #otherMon{
	width: .78rem;
	height: .3239rem;
	border: none;
	border-radius: 2px;
	font-size: inherit;
	text-align: center;
	background-color: #e4e4e4;
	line-height: .3239rem;
}
#wrap_cz .payment-rule{
	padding: 0 4%;
	color: #000;
}
#wrap_cz .paymethod{
	position: relative;
	margin: .075rem auto;
	padding: .065rem 4%;
}
#wrap_cz .zfb{
	position: absolute;
	width: .2159rem;
	height: .2159rem;
	background: url(../assets/img/下载.png) no-repeat;
	display: block;
	background-size: .2159rem .2159rem;
	left: 27%;
	top: .05rem;
}
#wrap_cz .payscan{
	color: #000;
	font-size: .13rem;
	padding: .05rem 0;
	position: relative;
	text-align: center;
}
#wrap_cz .paybtn{
	display: block;
	width: 1.56rem;
	height: .3rem;
	margin: .09rem auto;
	text-align: center;
	line-height: .3rem;
	color: #fff;
	background-color: #ca3222;
	border-radius: 3px;
}
#wrap_cz .paybtn span{
	padding-left: .115rem;
	letter-spacing: .115rem;
	font-size: .14rem;
	font-weight: 700;
}
#wrap_cz .display-payrule a{
	display: inline-block;
	color: #b81b22;
}
#wrap_cz .display-payrule{
	margin: .2rem auto;
	text-align: center;
	font-size: .13rem;
}
#wrap_cz .display-payrule a span{
	content: "";
	width: 0;
	height: 0;
	display: inline-block;
	color: #b81b22;
	border-left: .05rem solid transparent;
	border-right: .05rem solid transparent;
	border-top: .08rem solid;
	margin-left: .05rem;
}
#wrap_cz .payrule{
	color: #000;
	padding: 0 4%;
	margin-bottom: .5rem;
	line-height: .15rem;
}
#wrap_cz .rule-item{
	font-size: .13rem;
	width: 100%;
	position: relative;
}
#wrap_cz .rule-item span{
	position: absolute;
	top: 0;
	left: 0;
	width: .15rem;
}
#wrap_cz .rule-item p{
	display: block;
	margin-left: 5%;
	line-height: .2rem;
}
</style>
