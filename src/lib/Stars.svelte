<section class="stars-list-container" itemprop="text">
	<hr />
	<div class="content">
		{#each Array(10) as _, i}
			<div class="text">
				<div class="stars-list" itemscope itemtype="https://schema.org/ItemList">
					Gacrux · Procyon · Adhara · Antares · Wei · Girtab · Sargas · Graffias · Atria · Shaula ·
					Apollyon · Spica · Acrux · Sirius · Polaris ·
				</div>
			</div>
		{/each}
	</div>
	<hr />
</section>

<style lang="scss">
	.stars-list-container {
		text-align: center;
		width: 100%;
		position: relative;
		overflow: hidden;

		hr {
			height: 1px;
			border: none;
			border-top: 2px dashed var(--purple-border);
		}

		.stars-list {
			margin-top: 7px;
			margin-bottom: 4px;
			text-transform: uppercase;
			color: var(--purple-two);
			font-size: 1.25rem;
			white-space: nowrap;
			overflow: hidden;
		}
	}

	.content {
		width: 1000rem;
		display: flex;
		gap: 4px;
	}

	.text {
		animation: 35s scroll linear infinite;
		float: left;
	}

	@keyframes scroll {
		to {
			transform: translateX(-100%);
		}
	}
</style>
