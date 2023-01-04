<script lang="ts">
	import type { Subsystem } from '../../lib/types';

	const data: Subsystem[] = [
		{
			name: 'vela',
			categories: ['DNS', 'Tunnel'],
			description: 'Orbiting around the smallest quark star in the universe.',
			url: '//vela.sideral.tech',
			modules: [
				{
					name: 'Foundry',
					logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
					url: '//foundry.sideral.tech'
				},
				{
					name: 'Foundry',
					logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
					url: '//foundry.sideral.tech'
				},
				{
					name: 'Foundry',
					logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
					url: '//foundry.sideral.tech'
				},
				{
					name: 'Foundry',
					logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
					url: '//foundry.sideral.tech'
				},
				{
					name: 'Foundry',
					logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
					url: '//foundry.sideral.tech'
				}
			]
		},
		{
			name: 'vela',
			categories: ['DNS', 'Tunnel'],
			description: 'Orbiting around the smallest quark star in the universe.',
			url: '//vela.sideral.tech',
			modules: [
				{
					name: 'Foundry',
					logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
					url: '//foundry.sideral.tech'
				}
			]
		},
		{
			name: 'vela',
			categories: ['DNS', 'Tunnel'],
			description: 'Orbiting around the smallest quark star in the universe.',
			url: '//vela.sideral.tech',
			modules: [
				{
					name: 'Foundry',
					logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
					url: '//foundry.sideral.tech'
				}
			]
		},
		{
			name: 'vela',
			categories: ['DNS', 'Tunnel'],
			description: 'Orbiting around the smallest quark star in the universe.',
			url: '//vela.sideral.tech',
			modules: [
				{
					name: 'Foundry',
					logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
					url: '//foundry.sideral.tech'
				}
			]
		}
	];

	console.log(data);
</script>

<main class="wrapper">
	<h1>/subsystems</h1>

	<div class="subsystems">
		{#each data as subsystem}
			<div class="subsystem">
				<a href={subsystem.url}><h2>{subsystem.name}</h2></a>
				<p>{subsystem.description}</p>
				<div class="categories">
					{#each subsystem.categories as category}
						<div class="category">
							{category}
						</div>
					{/each}
				</div>
				<h3>MODULES</h3>
				<div class="modules">
					{#each subsystem.modules as module}
						<a href={module.url} class="module">
							<img alt={module.name} src={module.logo} />
							<div class="text">{module.name}</div>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</main>

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

	.categories {
		margin-bottom: 1rem;
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

	.category {
		padding: 0.25rem 0.5rem;
	}

	h3 {
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--white);
		margin-bottom: 0.25rem;
	}

	.module {
		padding: 0.4rem;
		text-align: center;
		border-radius: 4px;
		display: flex;
		align-items: center;
		gap: 0.5rem;

		.text {
			font-family: var(--font-two);
			letter-spacing: -0.06em;
			font-size: 0.875rem;
		}

		img {
			height: 20px;
			width: 20px;
			border-radius: 2px;
		}
	}
</style>
