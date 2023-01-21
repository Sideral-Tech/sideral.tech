<script lang="ts">
	import Chip from '$lib/Chip.svelte';
	import Footer from '$lib/Footer.svelte';
	import type { PageData } from './$types';

	// hydrated from ./+layout.svelte
	export let data: PageData;
</script>

<main class="wrapper">
	<h1>/logs</h1>
	<div class="blog-articles">
		{#each data.posts as post}
			<a href="/logs/{post.slug}/" class="blog-article">
				<div class="date">{post.date}</div>
				<h2>{post.title}</h2>
				<p>{post.description}</p>
				{#if post.tags}
					<div class="tags">
						{#each post.tags as tag}
							<Chip name={tag} />
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

	.tags {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.blog-articles {
		display: flex;
		flex-direction: column;
	}

	.blog-article {
		padding: 2rem 0;

		&:not(:last-child) {
			border-bottom: 1px dashed var(--purple-border-two);
		}
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
