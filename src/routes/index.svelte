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
			$moviesBuffer = (await response.json()).concat($moviesBuffer);
		} catch (e) {
			console.log(e);
		}
	}

	onMount(async () => {
		if ($userLoggedIn) {
			const response = await fetch('https://dx-tinder-backend.zeda.workers.dev');
			$moviesBuffer = await response.json();
		}
	});
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="DX Tinder" />
</svelte:head>

<MovieCard movie={$moviesBuffer.length ? movie : undefined} />

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
