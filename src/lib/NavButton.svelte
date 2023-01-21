<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
</script>

<a {href}>
	<li class:selected={href === '/' + $page.url.pathname.split('/')[1]}>
		<slot />
	</li>
</a>

<style lang="scss">
	li {
		color: var(--white-two);
		cursor: pointer;
		list-style: none;

		&:hover,
		&.selected {
			color: var(--purple);
		}
	}
</style>
