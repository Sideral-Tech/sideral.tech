<script>
	import Footer from '../../lib/Footer.svelte';
</script>

<main class="wrapper">
	<article itemscope itemtype="https://schema.org/AboutPage">
		<header>
			<h1 itemprop="headline">/info</h1>
		</header>
		<section itemprop="text">
			<p>
				Welcome to <a href="/">Sideral Technologies</a>, the premier provider of advanced
				technological solutions in the galaxy. We are a customer-focused company that is dedicated
				to providing the best possible service to our clients.
			</p>
		</section>
		<br />
		<section itemprop="text">
			<p>
				Our advanced technology is unparalleled in the industry, and we are constantly pushing the
				boundaries of what is possible to bring you the most innovative solutions. Whether you are a
				corporation, government, or individual, we are committed to meeting your needs and exceeding
				your expectations.
			</p>
		</section>
		<br />
		<section itemprop="text">
			<p>
				In addition to our dedication to our clients, we are also a leader in the field of space
				exploration and development. We have a long history of building spacial infrastructure and
				expanding our presence in the galaxy, and we are committed to helping our clients do the
				same. But make no mistake: Sideral Technologies is more than just a technology company. We
				also possess the most advanced military capabilities in the galaxy, and we will not hesitate
				to use them to protect our interests and those of our clients. No one can stand in the way
				of our progress, and we will stop at nothing to secure our position as the dominant force in
				the stars. At Sideral Technologies, we believe in the power of partnership, and we are
				always looking for ways to work with our clients to achieve mutually beneficial goals. We
				look forward to working with you and helping you reach new heights.
			</p>
		</section>
	</article>
</main>
<Footer />

<style lang="scss">
	main {
		padding-bottom: 4rem;
		padding-right: 20rem;

		@media (max-width: 1068px) {
			padding-right: 0;
		}
	}

	a {
		color: var(--purple);
		font-family: var(--font-two);
	}

	h1 {
		font-size: 4rem;
		margin-bottom: 2rem;
		text-shadow: 0px 0px 71px var(--purple-low-opacity);

		@media (max-width: 768px) {
			font-size: 3rem;
		}
	}
</style>
