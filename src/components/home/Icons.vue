<template>
	<div class="icons">
		<ul>
			<li v-for="item in Iconslist" :key="item.id">
				<img :src="item.imgUrl" alt="" />
				<p>{{ item.title }}</p>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			Iconslist: [
				{
					id: 0,
					imgUrl: 'img/icons.png',
					title: '国内游',
				},
				{
					id: 1,
					imgUrl: 'img/icons1.png',
					title: '国内游',
				},
				{
					id: 2,
					imgUrl: 'img/icons2.png',
					title: '国内游',
				},
				{
					id: 3,
					imgUrl: 'img/icons3.png',
					title: '国内游',
				},
				{
					id: 4,
					imgUrl: 'img/icons4.gif',
					title: '国内游',
				},
				{
					id: 5,
					imgUrl: 'img/icons5.png',
					title: '国内游',
				},
				{
					id: 6,
					imgUrl: 'img/icons6.png',
					title: '国内游',
				},
				{
					id: 7,
					imgUrl: 'img/icons7.png',
					title: '国内游',
				},
				{
					id: 8,
					imgUrl: 'img/icons8.png',
					title: '国内游',
				},
				{
					id: 9,
					imgUrl: 'img/icons9.png',
					title: '国内游',
				},
			],
		};
	},
};
</script>
<style lang="less" scoped>
.icons {
	padding: 0.4rem 0;
	ul {
		overflow: hidden;
		li {
			margin-bottom: 0.2rem;
			float: left;
			width: 20%;
			img {
				width: 1rem;
				height: 1rem;
				margin-left: auto;
				margin-right: auto;
				display: block;
				margin-bottom: 0.1rem;
			}
			p {
				font-size: 0.37333rem;
				text-align: center;
			}
		}
	}
}
</style>
