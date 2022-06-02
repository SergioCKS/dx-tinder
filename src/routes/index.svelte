<script>
	import { onMount } from 'svelte';
	import MovieCard from '@components/MovieCard.svelte';
	import { moviesBuffer } from '@stores/movies';
	import { userLoggedIn } from '@stores/auth';

	// Movie shown to user
	$: movie = $moviesBuffer[$moviesBuffer.length - 1];

	// When the buffer is running low on movies, pull a new batch.
	$: {
		if ($moviesBuffer.length <= 2) {
			pullMovies().then(() => {
				console.log($moviesBuffer);
			});
			console.log('Pulling movies...');
		}
	}

	/**
	 * ## Pull movies
	 *
	 * Retrieves random movies and adds them to buffer.
	 */
	async function pullMovies() {
		const response = await fetch('https://dx-tinder-backend.zeda.workers.dev');
		try {
			$moviesBuffer = (await response.json()).concat($moviesBuffer);
		} catch (e) {
			console.log(e);
		}
	}

	/**
	 * On component mount, pull a batch of movies.
	 */
	onMount(async () => {
		if ($userLoggedIn) {
			pullMovies();
		}
	});
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="DX Tinder" />
</svelte:head>

<MovieCard movie={$moviesBuffer.length ? movie : undefined} />
