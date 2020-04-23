<template>
	<div>
		<Header />
		<List />
	</div>
</template>
<script>
import Header from '../city/Header';
import List from '../city/List';
export default {
	name: 'city',
	components: {
		Header,
		List,
	},
};
</script>
