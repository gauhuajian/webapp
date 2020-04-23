<template>
	<div>
		<Banner />
		<Icons />
		<Tabs />
		<Scroll />
		<Swiper />
		<Spike :spikeList="spikeList" />
		<Like :likeList="likeList" />
		<Footer />
	</div>
</template>

<script>
import Banner from './Banner';
import Icons from './Icons';
import Tabs from './Tabs';
import Scroll from './Scroll';
import Swiper from './Swiper';
import Spike from './Spike';
import Like from './Like';
import Footer from './Footer';
import { mapState } from 'vuex';
export default {
	components: {
		Banner,
		Icons,
		Tabs,
		Scroll,
		Swiper,
		Spike,
		Like,
		Footer,
	},
	data() {
		return {
			spikeList: [],
			likeList: [],
			city: '',
		};
	},
	mounted() {
		this.http();
	},
	methods: {
		async http() {
			let data = await this.axios.get('api/dataHome.json');
			data.data.data.forEach((val) => {
				if (val.city == this.cityName) {
					this.spikeList = val.spikeList;
					this.likeList = val.likeList;
					this.city = val.city;
				}
			});
		},
	},
	computed: {
		...mapState(['cityName']),
	},
	activated() {
		if (this.cityName != this.city) {
			this.http();
		}
	},
};
</script>
<style scoped>
.home {
	overflow: hidden;
}
</style>
