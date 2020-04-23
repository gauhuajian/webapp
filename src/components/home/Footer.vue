<template>
	<Footer>
		<a href="#">
			<img src="../../assets/img/footer1.png" alt="" />
			<span>首页</span>
		</a>
		<a href="#">
			<img src="../../assets/img/footer2.png" alt="" />
			<span>订单</span>
		</a>
		<a href="#">
			<img src="../../assets/img/footer3.png" alt="" />
			<span>个人中心</span>
		</a>
	</Footer>
</template>
<style lang="less" scoped>
footer {
	position: fixed;
	bottom: 0;
	z-index: 9999;
	background-color: #fff;
	width: 100%;
	height: 1.4666rem;
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-decoration: none;
		flex: 1;
		img {
			display: block;
			width: 0.72rem;
			height: 0.72rem;
		}
		span {
			display: block;
			font-size: 0.35rem;
			margin-top: 0.2rem;
			color: #333;
		}
	}
}
</style>
