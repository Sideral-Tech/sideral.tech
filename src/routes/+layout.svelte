<script lang="ts">
	import '../styles/global.scss';
</script>

<svg width="100%" height="100%">
	<filter id="noise">
		<feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch" />
	</filter>
	<rect width="100%" height="100%" filter="url(#noise)" />
</svg>
<slot />

<style lang="scss">
	svg {
		pointer-events: none;
		position: fixed;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 999;
		opacity: 0.8;
		mix-blend-mode: soft-light;
	}
</style>
