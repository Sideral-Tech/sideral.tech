<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import type { PageData } from './$types';

	// hydrated from ./+layout.svelte
	export let data: PageData;
</script>

<main class="wrapper">
	<h1>/logs</h1>
	<div class="blog-articles">
		{#each data.posts as post}
			<a href="logs/{post.slug}" class="blog-article">
				<div class="date">{post.date}</div>
				<h2>{post.title}</h2>
				<p>{post.description}</p>
				{#if post.tags}
					<div class="tags">
						{#each post.tags as tag}
							<div class="tag">{tag}</div>
						{/each}
					</div>
				{/if}
			</a>
		{/each}
	</div>
</main>
<Footer />

<style lang="scss">
	main {
		padding-bottom: 4rem;
	}

	.tag {
		color: var(--white-two);
		display: block;
		font-weight: 500;
		border-radius: 2px;
		background-color: var(--neutral-one);
		width: max-content;
		padding: 0.25rem 0.5rem;
		font-family: var(--font-two);
		letter-spacing: -0.06em;
		font-size: 0.875rem;

		&s {
			display: flex;
			gap: 0.5rem;
			margin-top: 1.5rem;
		}
	}

	h1 {
		font-size: 4rem;
		margin-bottom: 2rem;
		text-shadow: 0px 0px 71px var(--purple-low-opacity);

		@media (max-width: 768px) {
			font-size: 3rem;
		}
	}

	.blog-articles {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.blog-article {
		border: 1px dashed var(--purple-border-two);
		padding: 2rem;
		border-radius: 4px;
	}

	.date {
		color: var(--white-two);
		font-size: 0.875rem;
	}

	@media screen and (max-width: 868px) {
		h2 {
			font-size: 1.75rem;
		}
	}
</style>
