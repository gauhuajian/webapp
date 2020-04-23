<template>
	<div>
		<!-- <div>黑色部分</div> -->
		<div class="banner-header">
			<transition enter-active-class="animated fadeInLeftBig">
				<div class="banner-left " v-if="toShows"></div>
			</transition>
			<div class="banner-top">
				<div class="top-left" @click="toCity">
					{{ cityName }}
					<i class="iconfont">&#xe6af;</i>
				</div>
				<div class="top-search">
					<i class="iconfont">&#xe699;</i>
				</div>
				<div class="top-right" @click="toShow">
					<i class="iconfont">&#xe612;</i>
				</div>
			</div>
			<div class="banner-swiper">
				<swiper ref="mySwiper" :options="swiperOptions">
					<swiper-slide>
						<img src="@/assets/img/banner1.png" alt="" />
					</swiper-slide>
					<swiper-slide>
						<img src="@/assets/img/banner2.png" alt="" />
					</swiper-slide>
					<swiper-slide>
						<img src="@/assets/img/banner3.png" alt="" />
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			toShows: false,
			swiperOptions: {
				loop: true,
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
	methods: {
		toShow() {
			this.toShows = !this.toShows;
		},
		toCity() {
			this.$router.push('/city');
		},
	},
	computed: {
		...mapState(['cityName']),
	},
};
</script>
<style lang="less" scoped>
.banner-header {
	width: 100%;
	height: 5.62666rem;
	position: relative;
	background: #ddd;
}
.banner-top {
	position: absolute;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	height: 1.2rem;
	.top-left {
		padding: 0.2rem 0.4rem;
		font-size: 0.4266666rem;
		color: #fff;
	}
	.top-search {
		flex: 1;
		background: #fff;
		font-size: 0.4266666rem;
		color: #333;
		border-radius: 0.1rem;
		padding: 0.2rem 0.2rem;
	}
	.top-right {
		font-size: 0.4266666rem;
		padding: 0.2rem 0.4rem;
		color: #fff;
	}
}
.banner-swiper {
	width: 100%;
	height: 100%;
	img {
		width: 100%;
	}
}
.banner-left {
	z-index: 999;
	position: fixed;
	width: 6.666rem;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
}
</style>
