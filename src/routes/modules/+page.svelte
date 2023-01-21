<script lang="ts">
	import Chip from '$lib/Chip.svelte';
	import Footer from '$lib/Footer.svelte';
	import GridItem from '$lib/GridItem.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

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
