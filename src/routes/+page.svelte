<script lang="ts">
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
	<ul class="nav">
		<a href="/"><li>👁️‍🗨️</li></a>
		<a href="/logs"><li>&#91 &nbsp LOGS &nbsp &#93;</li></a>
		<a href="/subsystems"><li>&#91 &nbsp SUBSYSTEMS &nbsp &#93;</li></a>
		<a href="/info"><li>&#91 &nbsp INFO &nbsp &#93;</li></a>
	</ul>
	<div class="grid">
		<h1>sideral</h1>
		<p>{sloganList[Math.floor(Math.random() * sloganList.length)]}</p>
	</div>
	<!-- temporary, will switch to grid -->
	<br />
	<br />
	<div class="stars-list-container">
		<hr />
		<marquee class="stars-list">
			ETHEREAL · SIRIUS · LYRA · CARINA · ALTAIR · BELLATRIX · CASTOR · RIGEL · VEGA · POLARIS ·
			BETELGEUSE · ADHARA · ALDEBARAN · CAPELLA · ANTARES · SIRIUS · LYRA · CARINA · ALTAIR ·
			BELLATRIX · CASTOR · RIGEL · VEGA · POLARIS · BETELGEUSE · ADHARA · ALDEBARAN · CAPELLA ·
			ANTARES
		</marquee>
		<hr />
	</div>
	<br />
	<br />
	<br />
	<br />
	<a href="/logs"><h3 id="logs">LOGS</h3></a>
	<div class="log-posts">
		{#each Array(4) as _}
			<div class="log-post">
				<a href="/"><h4>Uma breve análise sobre a Atenção</h4></a>
				<p>
					Neste Universo espaço é liberdade e tempo, prisão: é possível deslocar-se no tempo,
					estando imóvel no espaço. Deslocar-se no espaço permanecendo...
				</p>
			</div>
		{/each}
	</div>
</main>
<footer>
	<div class="content-container">
		<div id="logo">sideral</div>
		<div>Copyright 2023 Alexandre Teles · Website by <a href="https://afn.lol">afn</a>.</div>
		<ul>
			<li>Twitter</li>
			<li>Discord</li>
			<li>Email</li>
		</ul>
	</div>
</footer>

<!-- <img id="building" src="building.png" alt="building"/> -->
<style lang="scss">
	.nav {
		display: flex;
		font-family: var(--font-two);
		list-style: none;
		gap: 2rem;
		margin-bottom: 2rem;

		li {
			color: var(--white-two);
			cursor: pointer;

			&:hover {
				color: var(--purple);
			}
		}
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

	.stars-list,
	.stars-list-2 {
		color: var(--purple-opacity);
		font-size: 1.25rem;
		white-space: nowrap;
		overflow: hidden;
	}

	.stars-list-2 {
		animation-delay: 15s;
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

	footer {
		border-top: 2px dashed rgba(140, 98, 255, 0.2);
		display: flex;
		align-items: center;
		color: var(--white);
		padding: 4rem;

		.content-container {
			width: min(90%, 60rem) !important;
			margin: auto;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		a {
			color: var(--purple);
		}

		ul {
			display: flex;
			list-style: none;
			gap: 2rem;

			li {
				color: var(--purple);
			}
		}

		#logo {
			margin: 0;
			font-weight: 600;
			font-size: 4rem;
			letter-spacing: -0.06em;
			height: max-content;
			margin-top: -1rem;
			margin-bottom: -1.5rem;
		}
	}
</style>
