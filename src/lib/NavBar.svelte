<script>
	import NavButton from './NavButton.svelte';
	let menuOpen = false;
</script>

<nav class="wrapper" itemprop="breadcrumb">
	<button class="mobile-only" on:click={() => (menuOpen = !menuOpen)}>f</button>
	<span class="mobile-only"><NavButton href="/">sideral</NavButton></span>

	{#if menuOpen}
		<ul class="nav">
			<NavButton href="/">sideral</NavButton>
			<NavButton href="/logs">&#91 &nbsp LOGS &nbsp &#93;</NavButton>
			<NavButton href="/subsystems">&#91 &nbsp SUBSYSTEMS &nbsp &#93;</NavButton>
			<NavButton href="/info">&#91 &nbsp INFO &nbsp &#93;</NavButton>
		</ul>
		<div class="scrim mobile-only" on:click={() => (menuOpen = !menuOpen)} />
	{/if}
</nav>

<style lang="scss">
	nav {
		padding-top: 3rem;
		margin-bottom: 3rem;
		position: relative;
	}

	ul {
		display: flex;
		font-family: var(--font-two);
		list-style: none;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.scrim {
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 93;
		background-color: rgba(0, 0, 0, 0.5);
	}

	@media screen and (min-width: 768px) {
		.mobile-only {
			display: none;
		}
	}

	@media screen and (max-width: 768px) {
		button {
			position: absolute;
			z-index: 99;
			background-color: transparent;
			margin: 0;
			padding: 0;
			border: 0;
			right: 0;
			color: var(--white);
		}

		ul {
			flex-direction: column;
			position: fixed;
			background-color: var(--neutral-two);
			z-index: 98;
			width: 100%;
			height: max-content;
			top: 0;
			left: 0;
			padding-left: 2rem;
			padding-top: 6rem;
			padding-bottom: 3rem;
		}

		.menu-button {
			display: block;
			cursor: pointer;
			position: absolute;
			height: 50px;
			width: 50px;
			z-index: 999;
			background-color: var(--white);

			&::before,
			&::after {
				content: '';
				position: absolute;
				width: 24px;
				height: 2px;
				background-color: var(--white);
			}
		}
	}
</style>
