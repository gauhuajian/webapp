<template>
	<div class="swiper">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide>
				<img src="@/assets/img/swiper1.png" alt="" />
			</swiper-slide>
			<swiper-slide>
				<img src="@/assets/img/swiper2.png" alt="" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
export default {
	data() {
		return {
			swiperOptions: {
				speed: 500,
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: {
					delay: 2000,
					//当用户滑动图片后继续自动轮播
					disableOnInteraction: false,
				},
			},
		};
	},
};
</script>
<style lang="less" scoped>
.swiper {
	width: 100%;
	height: 3.2rem;
	img {
		width: 100%;
		height: 3.2rem;
	}
}
</style>
