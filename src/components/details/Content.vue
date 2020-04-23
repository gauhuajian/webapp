<template>
	<div class="content">
		<img :src="imgUrl" alt="" />
		<p>{{ title }}</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			imgUrl: '',
			title: '',
		};
	},
	created() {
		this.imgUrl = this.$route.query.img;
		this.title = this.$route.query.title;
		console.log(this.title, this.imgUrl);
	},
};
</script>
<style lang="less" scoped>
.content {
	padding: 0.1rem 0.25rem;
	img {
		width: 9.5rem;
		display: block;
	}
}
</style>
