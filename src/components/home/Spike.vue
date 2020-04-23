<template>
	<div class="spike">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide v-for="item in spikeList" :key="item.id">
				<div class="spike-content">
					<div class="spike-top">
						<img src="@/assets/img/spike1.png" alt="" />
						<span>距离结束 </span>
						<count-down
							v-on:start_callback="countDownS_cb(1)"
							v-on:end_callback="countDownE_cb(1)"
							:currentTime="item.startTime"
							:startTime="item.startTime"
							:endTime="item.endTime"
							:dayTxt="'天 '"
							:hourTxt="': '"
							:minutesTxt="': '"
							:secondsTxt="' '"
						>
						</count-down>
					</div>
					<div class="spike-bottom" @click="toDateils(item.imgUrl, item.title)">
						<img :src="item.imgUrl" alt="" />
						<div class="bottom-title">
							<p>{{ item.title }}</p>
							<div class="bottom-preic">
								<span>￥{{ item.price }}</span>
								<p>库存{{ item.num }}个</p>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
import CountDown from 'vue2-countdown';

export default {
	props: ['spikeList'],
	data() {
		return {
			swiperOptions: {
				pagination: {
					el: '.swiper-pagination',
				},
			},
		};
	},
	methods: {
		countDownS_cb: function(x) {
			console.log(x);
		},
		countDownE_cb: function(x) {
			console.log(x);
		},
		toDateils(img, title) {
			this.$router.push({ path: '/dateils', query: { img, title } });
		},
	},
	components: {
		CountDown,
	},
};
</script>
<style lang="less" scoped>
.spike {
	height: 4.3777rem;
	.spike-content {
		padding: 0.3rem 0.3rem;
	}
}
.spike-top {
	width: 100%;
	height: 1.2933rem;
	display: flex;
	align-items: center;
	font-size: 0.35rem;
	img {
		height: 0.413rem;
		width: 1.89rem;
	}
	span {
		margin-left: 0.1rem;
	}
}
.spike-bottom {
	display: flex;
	img {
		display: block;
		width: 3rem;
		height: 2.12rem;
	}
	.bottom-title {
		margin-left: 0.3rem;
		width: 5.86rem;
		p {
			line-height: 0.38rem;
			font-size: 0.28rem;
			color: #333;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.bottom-preic {
			margin-top: 0.5rem;
			display: flex;
			justify-content: space-between;
			font-size: 0.35rem;
			p {
				text-align: center;
				min-width: 1rem;
				background: orange;
				border-radius: 1rem;
			}
		}
	}
}
.spike .swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
	bottom: -0.1rem;
}

.swiper-container {
	overflow: hidden;
}
</style>
