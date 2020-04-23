<template>
	<div class="Tabs">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide v-for="item in tabsList" :key="item.id">
				<img :src="item.imgUrl" alt="" />
				<p>
					{{ item.title }}
				</p>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
export default {
	data() {
		return {
			tabsList: [
				{
					id: 0,
					imgUrl: 'img/tabs1.gif',
					title: '签证',
				},
				{
					id: 1,
					imgUrl: 'img/tabs2.png',
					title: '签证',
				},
				{
					id: 2,
					imgUrl: 'img/tabs3.png',
					title: '签证',
				},
				{
					id: 3,
					imgUrl: 'img/tabs4.gif',
					title: '签证',
				},
				{
					id: 4,
					imgUrl: 'img/tabs5.gif',
					title: '签证',
				},
				{
					id: 5,
					imgUrl: 'img/tabs6.png',
					title: '签证',
				},
				{
					id: 6,
					imgUrl: 'img/tabs7.png',
					title: '签证',
				},
				{
					id: 7,
					imgUrl: 'img/tabs8.png',
					title: '签证',
				},
				{
					id: 8,
					imgUrl: 'img/tabs9.png',
					title: '签证',
				},
				{
					id: 9,
					imgUrl: 'img/tabs10.png',
					title: '签证',
				},
			],
			swiperOptions: {
				slidesPerView: 4.5,
			},
		};
	},
};
</script>
<style lang="less" scoped>
.Tabs {
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 0.77rem;
		height: 0.77rem;
		margin-bottom: 0.1rem;
	}
	p {
		text-align: center;
		font-size: 0.37rem;
	}
}
</style>
