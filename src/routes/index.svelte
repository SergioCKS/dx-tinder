<script>
	import { onMount } from 'svelte';
	import MovieCard from '@components/MovieCard.svelte';
	import { moviesBuffer } from '@stores/movies';
	import { userLoggedIn } from '@stores/auth';

	$: movie = $moviesBuffer[$moviesBuffer.length - 1];

	$: {
		if ($moviesBuffer.length <= 2) {
			pullMovies().then(() => {
				console.log($moviesBuffer);
			});
			console.log('Pulling movies...');
		}
	}

	async function pullMovies() {
		const response = await fetch('https://dx-tinder-backend.zeda.workers.dev');
		try {
			$moviesBuffer = $moviesBuffer.concat(await response.json());
		} catch (e) {
			console.log(e);
		}
	}

	onMount(async () => {
		const response = await fetch('https://dx-tinder-backend.zeda.workers.dev');
		$moviesBuffer = await response.json();
	});
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="DX Tinder" />
</svelte:head>

{#if $userLoggedIn}
	<MovieCard movie={$moviesBuffer.length ? movie : undefined} />
{:else}
	<div class="flex flex-col h-xl items-center">
		<a class="text-orange-300 hover:underline" href="/login">Inicia sesión</a> para empezar a seleccionar
		peliculas!
	</div>
{/if}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
