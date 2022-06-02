<script>
	export let movie;
</script>

<div
	class="rounded flex flex-col bg-light-600 h-40 shadow px-2 w-40 gap-y-2 items-center justify-center"
>
	<img src={movie.poster} class="h-full object-contain h-10" alt={movie.title} />
	{movie.title}
	<!-- <div>Director: {movie.directors.join(', ')}</div> -->
	<!-- <div>Géneros: {movie.genres.join(', ')}</div> -->
	<!-- <div>Reparto: {movie.cast.join(', ')}</div> -->
	<!-- <div>Trama: {movie.plot}</div> -->
</div>
