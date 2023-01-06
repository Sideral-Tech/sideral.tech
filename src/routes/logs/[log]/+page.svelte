<script lang="ts">
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
					<div class="tag">{tag}</div>
				{/each}
			</div>
		{/if}
		<h1>&gt; {data.metadata.title}</h1>
		<svelte:component this={data.component} />
	</article>
</main>
<Footer />

<style lang="scss">
	.tag {
		color: var(--white-two);
		margin-bottom: 1.5rem;
		display: block;
		font-weight: 500;
		border-radius: 2px;
		background-color: var(--neutral-one);
		width: max-content;
		padding: 0.25rem 0.5rem;
		font-family: var(--font-two);
		letter-spacing: -0.06em;
		font-size: 0.875rem;

		&s {
			display: flex;
			gap: 0.5rem;
		}
	}

	.article-info {
		color: var(--white-two);
		margin-bottom: 0.5rem;
		display: block;
		font-weight: 300;
	}

	h1 {
		font-size: 4rem;
		margin-bottom: 2rem;
		text-shadow: 0px 0px 71px rgba(187, 163, 255, 0.36);

		@media (max-width: 768px) {
			font-size: 3rem;
		}
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

	main {
		padding-bottom: 4rem;
	}
</style>
