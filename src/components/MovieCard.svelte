<!-- 
  # Movie Card

  Component that displays a movie in a big card.
  Handles "interested"/"not interested" logic.
-->
<script>
	import ThumbsUp from '@components/ThumbsUp.svelte';
	import { moviesBuffer } from '@stores/movies';
	import { accessToken, userId } from '@stores/auth';

	/**
	 * ## Movie
	 *
	 * Movie to display in the card.
	 */
	export let movie;

	/**
	 * ## Not interested
	 *
	 * When the user clicks "not interested", the movie is simply removed from buffer.
	 */
	function notInterested() {
		$moviesBuffer = $moviesBuffer.slice(0, -1);
	}

	/**
	 * ## Interested
	 *
	 * When the user clicks "interested", the movie is removed from buffer, but added to the
	 * user "liked" movies.
	 *
	 * Endpoint: `/likeMovie`
	 */
	async function likeMovie() {
		$moviesBuffer = $moviesBuffer.slice(0, -1);

		const response = await fetch('https://dx-tinder-backend.zeda.workers.dev/likeMovie', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ movieId: movie._id, token: $accessToken, uid: $userId })
		});

		console.log(await response.json());
	}
</script>

<div class="flex flex-row w-full justify-center">
	<div
		class="rounded flex flex-col h-xl bg-light-600 shadow my-2 w-lg px-2 gap-y-2 items-center justify-center"
	>
		{#if movie}
			<img src={movie.poster} class="h-full object-contain h-60" alt={movie.title} />
			<div>Título: {movie.title}</div>
			<div>Director: {movie.directors?.join(', ')}</div>
			<div>Géneros: {movie.genres?.join(', ')}</div>
			<div>Reparto: {movie.cast?.join(', ')}</div>
			<div>Trama: {movie.plot}</div>
			<div class="flex flex-row h-12 my-4 w-lg bottom-0 justify-evenly">
				<button on:click={notInterested} class="rounded bg-red-400 h-14 p-2 hover:shadow">
					No me interesa
				</button>
				<button
					on:click={likeMovie}
					class="rounded flex flex-row bg-green-400 h-14 p-2 gap-x-2 items-center hover:shadow"
				>
					<div>Me interesa</div>
					<ThumbsUp />
				</button>
			</div>
		{:else}
			Cargando...
		{/if}
	</div>
</div>
