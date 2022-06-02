<!-- 
	## Main layout

	Main layout of the app, contains the header and the footer.
	Loads the global CSS file and the Windi definitions.
	@component
-->
<script>
	import { page } from '$app/stores';
	import Header from '$lib/header/Header.svelte';
	import { userLoggedIn } from '@stores/auth';
	import '../app.css';
</script>

<Header />

<main>
	{#if $userLoggedIn || $page.url.pathname === '/login'}
		<slot />
	{:else}
		<div class="flex flex-col h-xl items-center">
			<a class="text-orange-300 hover:underline" href="/login">Inicia sesión</a> para empezar a seleccionar
			peliculas!
		</div>
	{/if}
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
