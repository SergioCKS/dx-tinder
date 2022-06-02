<!--
	# Header

	Header with logo, navigation bar and login/logout info.
-->
<script>
	import { userLoggedIn, userEmail, accessToken, userId } from '@stores/auth.js';
	import { likedMovies, moviesBuffer } from '@stores/movies';
	import { page } from '$app/stores';
	import logo from './movie-heart.svg';

	function logout() {
		$userLoggedIn = false;
		$userId = '';
		$userEmail = '';
		$accessToken = '';
		$likedMovies = [];
		$moviesBuffer = [];
	}
</script>

<header class="flex flex-row px-2 justify-between">
	<!-- Logo -->
	<div class="h-14 m-2 w-14">
		<a href="https://dx.zeda.tech">
			<img src={logo} alt="DX Tinder" />
		</a>
	</div>

	<!-- Navigation bar -->
	<nav>
		<!-- Left triangle -->
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul class="flex flex-row gap-x-4">
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Recomendaciones</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/liked">Guardadas</a>
			</li>
			<li class:active={$page.url.pathname === '/available'}>
				<a sveltekit:prefetch href="/available">Disponibles</a>
			</li>
		</ul>
		<!-- Right triangle -->
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div>
		{#if $userEmail}
			<div class="flex flex-col gap-y-2">
				{$userEmail}
				<button on:click={logout}>Cerrar Sesión</button>
			</div>
		{:else}
			<a class="hover:underline" href="/login">Iniciar Sesión</a>
		{/if}
	</div>
</header>

<style>
	.active {
		@apply underline;
	}

	li {
		@apply hover:bg-light-700;
	}

	.corner {
		@apply h-12 w-12;
	}

	.corner a {
		@apply flex items-center justify-center;
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
		@apply bg-contain flex list-none h-12 m-0 p-0 relative justify-center items-center;
		background: var(--background);
	}

	nav a {
		@apply flex font-bold h-full text-sm py-4 px-0 transition items-center uppercase;
	}
</style>
