<footer itemprop="breadcrumb">
	<div class="content-container">
		<div id="logo" itemprop="name">sideral</div>
		<div itemprop="creator" itemscope itemtype="https://schema.org/Person">
			Copyright 2023 Alexandre Teles · Website by <a href="https://afn.lol" rel="noreferrer" target="_blank">afn</a>.
		</div>
		<ul>
			<a href="https://github.com/Sideral-Tech" rel="noreferrer" target="_blank"><li>GitHub</li></a>
		</ul>
	</div>
</footer>

<style lang="scss">
	footer {
		border-top: 2px dashed rgba(140, 98, 255, 0.2);
		display: flex;
		align-items: center;
		color: var(--white);
		padding: 3rem 0;
	}

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
		font-size: 3rem;
		letter-spacing: -0.06em;
		height: max-content;
		margin-top: -1rem;
		margin-bottom: -1rem;
	}
</style>
