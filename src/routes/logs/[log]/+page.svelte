<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// giscus settings
	let theme = 'transparent_dark';
	let reponame = 'Sideral-Tech/sideral.tech';
	let category = 'General';
	let discussionTerm = 'pathname';
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:description" content={data.metadata.description} />
	<meta property="og:image" content={data.metadata.image} />
	<meta property="og:url" content="." />
	<meta property="article:published_time" content={data.metadata.date} />
	<meta property="article:author" content={data.metadata.author} />
	<meta property="article:tag" content={data.metadata.tags} />
</svelte:head>

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
	<div class="blog-comments">
		<script
			src="https://giscus.app/client.js"
			data-repo={reponame}
			data-repo-id="R_kgDOIt5wHQ"
			data-category={category}
			data-category-id="DIC_kwDOIt5wHc4CTd0i"
			data-mapping={discussionTerm}
			data-strict="0"
			data-reactions-enabled="1"
			data-emit-metadata="1"
			data-input-position="top"
			data-theme={theme}
			data-lang="en"
			crossorigin="anonymous"
			async
		>
		</script>
	</div>
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
