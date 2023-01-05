<script lang="ts">
	import Footer from '../lib/Footer.svelte';

	const sloganList: string[] = [
		'Conquest through superior technology.',
		'Powering the future through unstoppable force.',
		'Technology as the ultimate weapon.',
		'Leading the galaxy through unrivaled power.',
		'Defending our interests with the most advanced weaponry.',
		'Dominion through technology.'
	];
</script>

<main class="wrapper">
	<div class="grid">
		<header>
			<h1 itemprop="name">sideral</h1>
			<p itemprop="abstract">{sloganList[Math.floor(Math.random() * sloganList.length)]}</p>
		</header>
	</div>
	<!-- temporary, will switch to grid -->
	<br />
	<br />
	<section itemprop="text">
		<div class="stars-list-container">
			<hr />
			<marquee class="stars-list" itemscope itemtype="https://schema.org/ItemList">
				Gacrux · Procyon · Adhara · Antares · Wei · Girtab · Sargas · Graffias · Atria · Shaula ·
				Apollyon · Spica · Acrux · Sirius · Polaris
			</marquee>
			<hr />
		</div>
	</section>
	<br />
	<br />
	<br />
	<br />
	<section itemscope itemtype="https://schema.org/ItemList">
		<header itemprop="name">
			<a href="/logs"><h3 id="logs">Logs</h3></a>
		</header>
		<div class="log-posts">
			{#each Array(4) as _}
				<section itemscope itemtype="http://schema.org/BlogPosting">
					<div class="log-post">
						<header itemprop="name">
							<a href="/"><h4>Uma breve análise sobre a Atenção</h4></a>
						</header>
						<p itemprop="abstract">
							Neste Universo espaço é liberdade e tempo, prisão: é possível deslocar-se no tempo,
							estando imóvel no espaço. Deslocar-se no espaço permanecendo...
						</p>
					</div>
				</section>
			{/each}
		</div>
	</section>
</main>
<Footer />

<!-- <img id="building" src="building.png" alt="building"/> -->
<style lang="scss">
	main {
		padding-bottom: 7rem;
	}

	h1 {
		position: relative;
		text-shadow: 0px 0px 71px rgba(187, 163, 255, 0.36);


		&::before {
			box-sizing: border-box;
			display: block;
			content: '';
			position: absolute;
			width: 500px;
			height: 175px;
			border-radius: 50%;
			border: 1px dashed rgba(140, 98, 255, 0.3);
			transform: rotate(-7.88deg) translate(-60px, -30px);
		}

		&::after {
			content: '^413x';
			font-family: var(--font-two);
			font-weight: 400;
			font-size: 20px;
			color: var(--white);
			letter-spacing: -0.06em;
			position: absolute;
			transform: translate(10px, -60px);
		}
	}

	.stars-list {
		text-transform: uppercase;
		color: var(--purple-opacity);
		font-size: 1.25rem;
		white-space: nowrap;
		overflow: hidden;
	}

	.stars-list-container {
		position: absolute;
		left: 0;
		right: 0;

		hr {
			height: 1px;
			border: none;
			border-top: 2px dashed rgba(140, 98, 255, 0.2);
		}

		.stars-list {
			margin-top: 7px;
			margin-bottom: 2px;
		}
	}

	#logs {
		margin-bottom: 1rem;
		position: relative;
		box-sizing: border-box;
		width: max-content;
		text-transform: uppercase;

		&::after {
			content: url('open.svg');
			position: absolute;
			transform: translate(5px, -20px);
		}
	}

	.log-posts {
		display: flex;
		gap: 2rem;
		max-width: 50rem;
		flex-wrap: wrap;
	}

	.log-post {
		width: 275px;

		h4 {
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 868px) {
		h1::before {
			transform: rotate(-7.88deg) translate(-60px, -45px);
		}
		h1::after {
			transform: translate(10px, -45px);
		}
		.log-post {
			width: 100%;
		}
	}
</style>
