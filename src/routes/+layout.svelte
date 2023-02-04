<script lang="ts">
	import '../styles/global.scss';
	import '../styles/syntax.scss';
	import Nav from '$lib/components/NavBar.svelte';
</script>

<svelte:head>
	<title>Sideral Technologies</title>
	<meta property="og:site_name" content="Sideral Technologies" />
	<meta property="og:url" content="https://sideral.tech" />
	<meta property="og:description" content="Dominion through technology" />
</svelte:head>

<svg width="100%" height="100%">
	<filter id="noise">
		<feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch" />
	</filter>
	<rect width="100%" height="100%" filter="url(#noise)" />
</svg>
<Nav />
<slot />

<style lang="scss">
	svg {
		pointer-events: none;
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		overflow: hidden;
		z-index: 999;
		opacity: 0.8;
		mix-blend-mode: soft-light;
	}
</style>
