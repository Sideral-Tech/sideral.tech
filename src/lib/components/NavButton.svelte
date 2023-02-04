<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
</script>

<a {href} on:click>
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

	@media screen and (max-width: 768px) {
		li {
			font-size: 1.5rem;
			padding-bottom: 0.75rem;
			border-bottom: 1px solid var(--neutral-one);
		}

		
	}
</style>
