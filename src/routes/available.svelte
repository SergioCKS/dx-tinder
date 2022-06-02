<!--
  # Available movies page

  Shows a list of the movies liked by the user that are available.
-->
<script>
	import { likedMovies } from '@stores/movies';
	import LikedMovieCard from '@components/LikedMovieCard.svelte';

	$: availableMovies = $likedMovies.filter((movie) => movie.isAvailable);
</script>

<svelte:head>
	<title>Peliculas Disponibles</title>
	<meta name="description" content="Peliculas disponibles para ser vistas." />
</svelte:head>

{#if availableMovies.length}
	<div class="flex flex-row flex-wrap p-4 gap-x-2">
		{#each availableMovies as movie}
			<LikedMovieCard {movie} />
		{/each}
	</div>
{:else}
	No tienes peliculas disponibles por el momento.
{/if}
