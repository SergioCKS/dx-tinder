<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer class="bg-white right-0 bottom-0 fixed">
	<p>
		Luego de ver tus peliculas, visita <a
			class="text-orange-300 hover:underline"
			href="https://https://deltax.la/">DeltaX</a
		> para gestionar tus embarques!
	</p>
</footer>

<style windi:preflights:global windi:safelist:global>
</style>
