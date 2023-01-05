<script>
	import NavButton from "./NavButton.svelte";
</script>

<nav class="wrapper" itemprop="breadcrumb"> 
	<ul class="nav">
		<NavButton href="/">👁️‍🗨️</NavButton>
		<NavButton href="/logs">&#91 &nbsp LOGS &nbsp &#93;</NavButton>
		<NavButton href="/subsystems">&#91 &nbsp SUBSYSTEMS &nbsp &#93;</NavButton>
		<NavButton href="/info">&#91 &nbsp INFO &nbsp &#93;</NavButton>
	</ul>
</nav>

<style lang="scss">
	nav {
		padding-top: 3rem;
		margin-bottom: 3rem;
	}
	
	ul {
		display: flex;
		font-family: var(--font-two);
		list-style: none;
		gap: 2rem;
		margin-bottom: 2rem;
	}
</style>
