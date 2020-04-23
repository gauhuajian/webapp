<template>
	<div class="Scroll">
		<div class="Scroll-content">
			<div class="content-right">
				<ul :class="{ aniamtedTop }">
					<li v-for="item in list" :key="item.id">
						<img src="@/assets/img/sorll.png" alt="" />
						{{ item.title }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			aniamtedTop: true,
			list: [
				{ id: 0, title: '0游侠客独一无二的旅行体验' },
				{ id: 1, title: '1游侠客独一无二的旅行体验' },
				{ id: 2, title: '2游侠客独一无二的旅行体验' },
				{ id: 3, title: '3游侠客独一无二的旅行体验' },
				{ id: 4, title: '4游侠客独一无二的旅行体验' },
			],
		};
	},

	methods: {
		showScroll() {
			this.aniamtedTop = true;
			setTimeout(() => {
				this.list.push(this.list[0]);
				this.list.shift();
				this.aniamtedTop = false;
			}, 500);
		},
	},
	mounted() {
		setInterval(this.showScroll, 2000);
	},
};
</script>
<style lang="less" scoped>
.aniamtedTop {
	transition: all 0.5s;
	margin-top: -0.666rem;
}
.Scroll {
	padding: 0.3rem 0;
	width: 100%;
	.Scroll-content {
		position: relative;
		height: 1.3rem;
		background: url('../../../public/img/sorcll.png') no-repeat;
		background-size: 100%;

		.content-right {
			position: absolute;
			right: 0;
			width: 8rem;
			height: 1.3rem;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			li {
				color: #333;
				font-size: 0.35rem;
				line-height: 0.6666rem;

				img {
					width: 0.16rem;
					height: 0.16rem;
				}
			}
		}
	}
}
</style>
