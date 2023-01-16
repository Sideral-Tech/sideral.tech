<script lang="ts">
	import Footer from '../../lib/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="wrapper">
	<article itemscope itemtype="https://schema.org/ItemList">
		<header itemprop="name">
			<h1>/modules</h1>
		</header>
		<div class="subsystems">
			{#each data.repos as repo}
				<section class="subsystem" itemscope itemtype="https://schema.org/VirtualLocation">
					<div itemprop="itemListElement">
						<header itemprop="name">
							<a href={repo.html_url} itemprop="url"><h2>{repo.name}</h2></a>
						</header>
						<p itemprop="description">{repo.description}</p>
						<div class="categories">
							{#each repo.topics as topic}
								<div class="category" itemprop="disambiguatingDescription">
									{topic}
								</div>
							{/each}
						</div>
					</div>
				</section>
			{/each}
		</div>
	</article>
</main>
<Footer />

<style lang="scss">
	h1 {
		font-size: 4rem;
		margin-bottom: 2rem;
		text-shadow: 0px 0px 71px var(--purple-low-opacity);

		@media (max-width: 768px) {
			font-size: 3rem;
		}
	}

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

	.subsystem {
		border: 1px dashed var(--purple-border-two);
		border-radius: 4px;
		padding: 2rem;
		height: 100%;
		overflow-x: hidden;

		a h2 {
			position: relative;
			width: max-content;
		}

		h2::after {
			content: url('/open.svg');
			position: absolute;
			right: 0;
			transform: translate(24px, -18px);
		}

		p {
			margin-bottom: 0.4rem;
		}
	}

	.categories,
	.modules {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.category,
	.module {
		font-family: var(--font-two);
		letter-spacing: -0.06em;
		font-size: 0.875rem;
		background-color: var(--neutral-one);
		color: var(--white);
		border-radius: 2px;
	}

	.categories {
		margin-bottom: 1rem;
	}

	.category {
		padding: 0.25rem 0.5rem;
	}

	h3 {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--white);
		margin-bottom: 0.25rem;
		text-transform: uppercase;
	}
</style>
