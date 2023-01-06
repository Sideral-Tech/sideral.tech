<script lang="ts">
	import Footer from '../../lib/Footer.svelte';
	export let data;
</script>

<main class="wrapper">
	<article itemscope itemtype="https://schema.org/ItemList">
		<header itemprop="name">
			<h1>/subsystems</h1>
		</header>
		<div class="subsystems">
			{#each data.subsystems as subsystem}
				<section itemscope itemtype="https://schema.org/VirtualLocation">
					<div class="subsystem" itemprop="itemListElement">
						<header itemprop="name">
							<a href={subsystem.url} itemprop="url"><h2>{subsystem.name}</h2></a>
						</header>
						<p itemprop="description">{subsystem.description}</p>
						<div class="categories">
							{#each subsystem.categories as category}
								<div class="category" itemprop="disambiguatingDescription">
									{category}
								</div>
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
		text-shadow: 0px 0px 71px rgba(187, 163, 255, 0.36);

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
		border: 1px dashed rgba(140, 98, 255, 0.3);
		border-radius: 4px;
		padding: 2rem;
		height: 100%;
		overflow-x: hidden;

		a h2 {
			position: relative;
			width: max-content;
		}

		h2::after {
			content: url('open.svg');
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
