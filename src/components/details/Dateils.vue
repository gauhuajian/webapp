<template>
	<div>
		<Header />
		<Content />
	</div>
</template>

<script>
import Header from './Header';
import Content from './Content';
export default {
	name: 'dateils',
	components: {
		Header,
		Content,
	},
};
</script>
