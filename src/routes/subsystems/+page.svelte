<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
	import GridItem from '$lib/components/GridItem.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<meta property="og:title" content="Subsystems" />
	<meta property="og:description" content="Our bases and the subsystems running on them" />
	<meta property="og:image" content="/logo.png" />
	<meta property="og:url" content="." />
</svelte:head>

<main class="wrapper">
	<article itemscope itemtype="https://schema.org/ItemList">
		<header itemprop="name">
			<h1>/subsystems</h1>
		</header>
		<div class="subsystems">
			{#each data.subsystems as subsystem}
				<GridItem name={subsystem.name} link={subsystem.url} description={subsystem.description}>
					<div class="categories">
						{#each subsystem.categories as category}
							<Chip name={category} />
						{/each}
					</div>
					<section itemscope itemtype="https://schema.org/ItemList">
						<header itemprop="name">
							<h3>Modules</h3>
						</header>
						<div class="modules">
							{#each subsystem.modules as module}
								<section itemscope itemtype="https://schema.org/SoftwareApplication">
									<a itemprop="url" href={module.url} class="module">
										<img itemprop="image" alt={module.name} src={module.logo} />
										<div itemprop="name" class="text">{module.name}</div>
									</a>
								</section>
							{/each}
						</div>
					</section>
				</GridItem>
			{/each}
		</div>
	</article>
</main>
<Footer />

<style lang="scss">
	.subsystems {
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
	.categories,
	.modules {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.categories {
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--white);
		margin-bottom: 0.25rem;
		text-transform: uppercase;
	}

	.module {
		font-family: var(--font-two);
		letter-spacing: -0.06em;
		font-size: 0.875rem;
		background-color: var(--neutral-one);
		color: var(--white);
		border-radius: 2px;
	}

	.module {
		padding: 0.4rem;
		text-align: center;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;

		.text {
			font-family: var(--font-two);
			letter-spacing: -0.06em;
			font-size: 0.875rem;
		}

		img {
			height: 77px;
			width: 77px;
			border-radius: 2px;
		}
	}
</style>
