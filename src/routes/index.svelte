<script>
	import { onMount } from 'svelte';
	// import ThumbsUp from '$lib/ThumbsUp.svelte';

	let movies = [];

	$: movie = movies[movies.length - 1];

	$: {
		if (movies.length <= 2) {
			pullMovies().then(() => {
				console.log(movies);
			});
			console.log('Pulling movies...');
		}
	}

	async function pullMovies() {
		const response = await fetch('https://dx-tinder-backend.zeda.workers.dev');
		movies = movies.concat(await response.json());
	}

	function likeMovie() {
		movies = movies.slice(0, -1);
		console.log(movies);
	}

	onMount(async () => {
		const response = await fetch('https://dx-tinder-backend.zeda.workers.dev');
		movies = await response.json();
	});
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="DX Tinder" />
</svelte:head>

<div class="flex flex-row w-full justify-center">
	<div
		class="rounded flex flex-col h-xl bg-light-600 w-lg px-2 gap-y-2 items-center justify-center"
	>
		{#if movies.length}
			<img src={movie.poster} class="h-full object-contain h-60" />
			<div>Título: {movie.title}</div>
			<div>Director: {movie.directors.join(', ')}</div>
			<div>Géneros: {movie.genres.join(', ')}</div>
			<div>Reparto: {movie.cast.join(', ')}</div>
			<div>Trama: {movie.plot}</div>
			<div class="flex flex-row h-12 my-4 w-lg bottom-0 justify-evenly">
				<button class="rounded bg-red-400 h-14 w-20">No me interesa</button>
				<button on:click={likeMovie} class="rounded bg-green-400 h-14 w-20">Me interesa</button>
				<!-- <ThumbsUp /> -->
			</div>
		{:else}
			Cargando...
		{/if}
	</div>
</div>

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
