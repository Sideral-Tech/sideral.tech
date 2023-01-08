<script lang="ts">
	import Stars from '$lib/Stars.svelte';
	import Footer from '../lib/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const sloganList: string[] = [
		'Conquest through superior technology.',
		'Powering the future through unstoppable force.',
		'Technology as the ultimate weapon.',
		'Leading the galaxy through unrivaled power.',
		'Defending our interests with the most advanced weaponry.',
		'Dominion through technology.'
	];
	let randomSlogan = sloganList[Math.floor(Math.random() * sloganList.length)];
</script>

<main>
	<header class="hero wrapper">
		<h1 itemprop="name">sideral</h1>
		<p itemprop="abstract">{randomSlogan}</p>
	</header>
	<Stars />
	<section class="wrapper logs-container" itemscope itemtype="https://schema.org/ItemList">
		<header itemprop="name">
			<a href="/logs"><h3 id="logs">Logs</h3></a>
		</header>
		<div class="log-posts">
			{#each data.posts.slice(0, 4) as post}
				<section itemscope itemtype="http://schema.org/BlogPosting">
					<div class="log-post">
						<header itemprop="name">
							<a href="logs/{post.slug}"><h4>{post.title}</h4></a>
						</header>
						<p itemprop="abstract">
							{post.description}
						</p>
					</div>
				</section>
			{/each}
		</div>
	</section>
</main>
<Footer />

<style lang="scss">
	main {
		padding-bottom: 7rem;
		position: relative;
		width: 100%;

		@media screen and (max-width: 868px) {
			padding-bottom: 0;
		}
	}

	h1 {
		position: relative;
		text-shadow: 0px 0px 71px var(--purple-low-opacity);

		&::before {
			box-sizing: border-box;
			content: '';
			position: absolute;
			overflow: hidden;
			width: 500px;
			height: 175px;
			border-radius: 50%;
			border: 1px dashed var(--purple-border-two);
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

	.hero {
		margin-bottom: 2.75rem;
		position: relative;
		&::before {
			content: url('/building.png');
			position: absolute;
			z-index: -2;
			transform: translate(600px, 300px);
			user-select: none;
			filter: drop-shadow(0px 0px 71px var(--purple-low-opacity-two));
			width: auto;

			@media screen and (max-width: 868px) {
				display: none;
			}
		}
	}

	.logs-container {
		margin-top: 3rem;
	}

	#logs {
		margin-bottom: 1rem;
		position: relative;
		box-sizing: border-box;
		width: max-content;
		text-transform: uppercase;

		&::after {
			content: url('/open.svg');
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
