<!--
  # Liked Movie Card

  Small card to show a liked movie in the "liked" and "available" pages.
	Supports "unlike".
-->
<script>
	import { userId, accessToken } from '@stores/auth';
	import { likedMovies } from '@stores/movies';
	export let movie;

	/**
	 * ## Unlike
	 *
	 * When the user clicks "Unlike", the movie is removed from the
	 * user "liked" movies.
	 *
	 * Endpoint: `/unlikeMovie`
	 */
	async function unlikeMovie() {
		$likedMovies = $likedMovies.filter((m) => m.title !== movie.title);

		const response = await fetch('https://dx-tinder-backend.zeda.workers.dev/unlikeMovie', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ movieId: movie._id, token: $accessToken, uid: $userId })
		});

		console.log(await response.json());
	}
</script>

<div
	class="rounded flex flex-col bg-light-600 h-40 shadow px-2 w-40 gap-y-2 items-center justify-center"
>
	<img src={movie.poster} class="h-full object-contain h-10" alt={movie.title} />
	{movie.title}
	<button on:click={unlikeMovie}>Remover</button>
	<!-- <div>Director: {movie.directors.join(', ')}</div> -->
	<!-- <div>Géneros: {movie.genres.join(', ')}</div> -->
	<!-- <div>Reparto: {movie.cast.join(', ')}</div> -->
	<!-- <div>Trama: {movie.plot}</div> -->
</div>
