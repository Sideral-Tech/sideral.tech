<script lang="ts">
	import Chip from '$lib/Chip.svelte';
	import Footer from '$lib/Footer.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="wrapper">
	<article>
		<div class="article-info">{data.metadata.author} · {data.metadata.date}</div>
		{#if data.metadata.tags}
			<div class="tags">
				{#each data.metadata.tags as tag}
					<Chip name={tag} />
				{/each}
			</div>
		{/if}
		<h1>&gt; {data.metadata.title}</h1>
		<svelte:component this={data.component} />
	</article>
</main>
<Footer />

<style lang="scss">
	.tags {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.article-info {
		color: var(--white-two);
		margin-bottom: 0.5rem;
		display: block;
		font-weight: 300;
	}

	main {
		padding-bottom: 4rem;
	}

	:global(article img) {
		max-width: 100%;
		border-radius: 4px;
		z-index: 0;
	}

	:global(article a) {
		color: var(--purple);
	}

	:global(article a:hover) {
		text-decoration: dashed;
		text-decoration-line: underline;
		text-decoration-color: var(--purple);
	}

	:global(article p) {
		margin-bottom: 2rem;
	}

	:global(p:has(img)) {
		display: flex;
		justify-content: center;
		margin: 2rem 0;
	}
</style>
