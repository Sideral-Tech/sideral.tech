<script lang="ts">
	export let link = '';
	export let name: string;
	export let description: string;
</script>

{#if link}
	<a href={link} target="_blank" rel="noreferrer" class="grid-item">
		<section itemprop="itemListElement" itemscope itemtype="https://schema.org/VirtualLocation">
			<header itemprop="name">
				<h2>{name}</h2>
			</header>
			<p>{description}</p>
			<slot />
		</section>
	</a>
{:else}
	<section
		class="grid-item"
		itemprop="itemListElement"
		itemscope
		itemtype="https://schema.org/VirtualLocation"
	>
		<header itemprop="name">
			<h2>{name}</h2>
		</header>
		<p>{description}</p>
		<slot />
	</section>
{/if}

<style lang="scss">
	a {
		text-decoration: none !important;
	}
	.grid-item {
		border: 1px dashed var(--purple-border-two);
		border-radius: 4px;
		padding: 2rem;
		min-height: 100%;
		margin: 0;
		overflow-x: hidden;
		transition: border 0.15s ease-in-out;
		

		&:hover {
			border: 1px dashed var(--purple-two);

			h2::after {
				filter: brightness(1.5);
			}
		}

		h2 {
			position: relative;
			transition: color 0.15s ease-in-out;
		}

		h2::after {
			content: url('/open.svg');
			position: absolute;
			right: 0;
			transform: translate(24px, -18px);
			transition: filter 0.15s ease-in-out;
		}

		p {
			margin-bottom: 0.4rem;
		}
	}
</style>
