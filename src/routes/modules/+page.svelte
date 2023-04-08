<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GridItem from '$lib/components/GridItem.svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
	const url = $page.url.href;
	//console.log(data);
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Modules" />
	<meta property="og:description" content="Our software repository" />
	<meta property="og:image" content="https://sideral.tech/logo.png" />
	<meta property="og:url" content={url} />
</svelte:head>

<main class="wrapper">
	<article itemscope itemtype="https://schema.org/ItemList">
		<header itemprop="name">
			<h1>/modules</h1>
		</header>
		<div class="modules">
			{#each data.repos as repo}
				<GridItem link={repo.html_url} name={repo.name} description={repo.description}>
					<div class="info-container">
						{#if repo.language}
							<Chip name={repo.language} />
						{/if}

						{#if repo.stargazers_count}
							<Chip name={repo.stargazers_count} icon="star" />
						{/if}

						{#if repo.forks}
							<Chip name={repo.forks} icon="fork" />
						{/if}
					</div>
				</GridItem>
			{/each}
		</div>
	</article>
</main>
<Footer />

<style lang="scss">
	.modules {
		align-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-bottom: 5rem;
		position: relative;
		gap: 0.8rem;

		@media (max-width: 868px) {
			grid-template-columns: 1fr;
		}
	}

	.info-container {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
	}
</style>
