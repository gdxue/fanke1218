<template>
	<div id="search-popup" class="search-popup">
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
</template>

<script>
	export default {
		name: "zhezhao"
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



/*---------- 外层搜索 -----------*/
#search-popup{
	position: fixed;
	width: 100%;
	height: 100%;
	display: block;
	z-index: 2;
	background: rgba(0, 0, 0, .8);
	top: .48rem;
	left: 0;
	display: none;
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
</style>