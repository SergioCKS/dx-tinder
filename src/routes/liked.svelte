<!--
	# Liked movies page

	Page that shows a list of the movies that the user liked before.
-->
<script>
	import { onMount } from 'svelte';
	import { accessToken, userId, userLoggedIn } from '@stores/auth';
	import { likedMovies } from '@stores/movies';
	import LikedMovieCard from '@components/LikedMovieCard.svelte';

	let loading = false;

	/**
	 * On component mount, retrieve the movies liked by the user.
	 */
	onMount(async () => {
		if (!$userLoggedIn) {
			return;
		}

		loading = true;
		const response = await fetch('https://dx-tinder-backend.zeda.workers.dev/liked', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ token: $accessToken, uid: $userId })
		});

		$likedMovies = (await response.json()).map((responseMovie) => responseMovie.movieDoc[0]);
		loading = false;
	});
</script>

<svelte:head>
	<title>Peliculas Guardadas</title>
	<meta
		name="description"
		content="Peliculas guardadas para ser vistas cuando estén disponibles."
	/>
</svelte:head>

{#if loading && $likedMovies.length === 0}
	Cargando...
{:else if $likedMovies.length}
	<div class="flex flex-row flex-wrap p-4 gap-x-2 gap-y-2">
		{#each $likedMovies as movie}
			<LikedMovieCard {movie} />
		{/each}
	</div>
{:else}
	No tienes peliculas guardadas.
{/if}
