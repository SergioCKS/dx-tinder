<script>
	import { page } from '$app/stores';
	import logo from './movie-heart.svg';
</script>

<header class="flex flex-row justify-between">
	<div class="h-14 m-2 w-14">
		<a href="https://dx.zeda.tech">
			<img src={logo} alt="DX Tinder" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul class="flex flex-row gap-x-4">
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Recomendaciones</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">Guardadas</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Disponibles</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="/login">Iniciar Sesión</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		@apply h-12 w-12;
	}

	.corner a {
		@apply flex items-center justify-center;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	nav a {
		@apply flex font-bold h-full text-sm py-4 px-0 transition items-center uppercase;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
