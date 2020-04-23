<template>
	<div class="like">
		<div class="like-list" v-for="item in likeList" :key="item.id">
			<div class="like-top">
				<div class="top-left">
					<span>
						{{ item.title }}
					</span>
				</div>
				<div class="top-right">
					<span>更多</span>
				</div>
			</div>
			<div class="like-bottom">
				<div class="bottom-header" :style="{ background: 'url(' + item.imgUrl + ')no-repeat center center' }">
					<div class="header-info">
						<span>
							{{ item.Introduction }}
						</span>
						<span>${{ item.price }}起</span>
					</div>
				</div>
				<ul>
					<li v-for="v in item.cityList" :key="v.id">
						<img :src="v.imgUrl" alt="" />
						<span class="title">{{ v.title }}</span>
						<span class="price">${{ v.price }}起</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['likeList'],
};
</script>
<style lang="less" scoped>
.like {
	padding-bottom: 1.5rem;
	font-size: 0.35rem;
	margin-top: 0.7rem;
	.like-list {
		margin-top: 0.4rem;
		.like-top {
			display: flex;
			justify-content: space-between;
			.top-left {
				position: relative;
			}
			.top-left:before {
				position: absolute;
				content: '';
				background: #fed101;
				width: 0.1rem;
				height: 0.48rem;
				top: 0;
			}
			.top-left span {
				padding-left: 0.5rem;
				font-size: 0.5rem;
			}
			.top-right {
				padding-right: 0.5rem;
				color: #999;
				font-weight: 500;
				font-size: 0.4rem;
			}
		}
		.like-bottom {
			padding: 0.3rem;
			.bottom-header {
				position: relative;
				height: 4.4666666rem;
				width: 100%;
				background-size: 100%;
				.header-info {
					position: absolute;
					bottom: 0.26rem;
					left: 0.2rem;
					display: flex;
					justify-content: space-between;
					span:nth-child(1) {
						font-size: 0.5rem;
						color: #fff;
						font-weight: 700;
						width: 5.78rem;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
					span:nth-child(2) {
						font-size: 0.5rem;
						color: orange;
						font-weight: 500;
						font-size: 0.45rem;
						margin-left: 1rem;
					}
				}
			}
		}
		.like-bottom ul {
			display: flex;
			justify-content: space-between;
			margin-top: 0.3rem;
		}
		.like-bottom ul li {
			width: 2.96rem;
		}
		.like-bottom ul li img {
			width: 100%;
			height: 1.9584rem;
		}
		.like-bottom ul li span.title {
			font-size: 0.35rem;
			display: block;
			margin-top: 0.2rem;
			height: 0.6933333rem;
			width: 100%;
			display: block;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.like-bottom ul li span.price {
			margin-top: 0.2rem;
			display: block;
			font-size: 0.5rem;
			color: orange;
			font-weight: 500;
			font-size: 0.35rem;
		}
	}
}
</style>
