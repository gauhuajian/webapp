<template>
	<header>
		<span>详情</span>
		<i class="iconfont" @click="toHome">&#xe61a;</i>
	</header>
</template>
<script>
export default {
	methods: {
		toHome() {
			this.$router.push('/');
		},
	},
};
</script>
<style lang="less" scoped>
header {
	background: #fed101;
	text-align: center;
	height: 1.173rem;
	line-height: 1.173rem;
	color: #333;
	font-size: 0.4rem;
	position: relative;
	i {
		position: absolute;
		right: 0.3rem;
		font-weight: 700;
	}
}
</style>
