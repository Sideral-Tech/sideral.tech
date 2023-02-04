<script>
	import NavButton from './NavButton.svelte';
	import { expoOut } from 'svelte/easing';
	import { horizontalSlide } from '../utils';
	import { navigating } from '$app/stores';
	let menuOpen = false;

	$: if ($navigating) {
		menuOpen = false;
	}
</script>

<nav class="wrapper" itemprop="breadcrumb">
	<button class="mobile-only" on:click={() => (menuOpen = !menuOpen)}
		><span class="menu" class:close={menuOpen} /></button
	>
	<span class="mobile-only"><a href="/" class="nav-logo">sideral</a></span>

	{#key menuOpen}
		<ul
			transition:horizontalSlide={{ direction: 'inline', easing: expoOut, duration: 700 }}
			class="nav"
			class:hidden={!menuOpen}
		>
			<NavButton href="/">HOME</NavButton>
			<NavButton href="/logs">LOGS</NavButton>
			<NavButton href="/subsystems">SUBSYTEMS</NavButton>
			<NavButton href="/modules">MODULES</NavButton>
			<NavButton href="/info">INFO</NavButton>
		</ul>
	{/key}
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

	.nav-logo {
		font-size: 1.25rem;
		color: var(--white);
	}

	@media screen and (min-width: 768px) {
		.mobile-only {
			display: none;
		}
	}

	@media screen and (max-width: 768px) {
		button {
			position: absolute;
			box-sizing: border-box;
			z-index: 99;
			background-color: transparent;
			margin: 0;
			padding: 0;
			border: 0;
			height: 24px;
			width: 20px;
			right: 0;
			cursor: pointer;
		}

		.menu {
			&,
			&::before,
			&::after {
				content: '';
				position: absolute;
				display: inline-block;
				border-top: 1px solid var(--white);
				width: 20px;
				right: 0;
				transition: transform 0.4s ease;
			}

			&::before {
				transform: translateY(5px);
			}

			&::after {
				transform: translateY(-7px);
			}

			&.close {
				border-top: 0px solid var(--white);

				&::before {
					transform: rotate(45deg);
				}

				&::after {
					transform: rotate(-45deg);
				}
			}
		}

		ul {
			flex-direction: column;
			position: fixed;
			background-color: var(--neutral-three);
			z-index: 98;
			width: 100%;
			height: 100vh;
			top: 0;
			left: 0;
			padding-left: 2rem;
			padding-top: 12rem;
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

		.hidden {
			display: none !important;
		}
	}
</style>
