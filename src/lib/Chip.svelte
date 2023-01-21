<script lang="ts">
	export let name: string | number;
	export let icon = '';
</script>

<div class="chip" class:hasIcon={icon} itemprop="disambiguatingDescription">
	{#if icon}
		<img src="/{icon}.svg" alt={icon} id="icon" />
	{/if}
	{name}
</div>

<style lang="scss">
	.chip {
		font-family: var(--font-two);
		letter-spacing: -0.06em;
		font-size: 0.875rem;
		background-color: var(--neutral-one);
		color: var(--white);
		border-radius: 2px;
		padding: 0.25rem 0.5rem;
		display: flex;
		gap: 0.1rem;
		align-items: center;
		max-height: 28px;
	}

	#icon {
		max-height: 24px;
		max-width: 24px;
		padding: 0;
		margin: 0;
	}

	.hasIcon {
		padding-left: 4px;
	}
</style>
