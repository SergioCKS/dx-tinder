<!--
  # Login screen

  Email and password are sent to server for authentication.
  The user is redirected to the main page on successful authentication.

  TODO: Show user authentication errors.
-->
<script>
	import { userLoggedIn, userId, accessToken, userEmail } from '../stores/auth';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';

	/**
	 * ## Login
	 *
	 * Sends authentication request to the server.
	 * On successful authentication, the user profile is stored locally.
	 */
	async function logIn() {
		const b64Password = window.btoa(password);

		const response = await fetch('https://dx-tinder-backend.zeda.workers.dev/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, b64Password })
		});

		const responseData = await response.json();

		const authenticationSuccess = !!responseData.ok && responseData.ok === 1;

		if (authenticationSuccess) {
			$userLoggedIn = true;
			$userId = responseData.id;
			$accessToken = responseData.accessToken;
			$userEmail = email;
			console.log('user logged in');
			goto('/');
		} else {
			console.log('authentication failed');
		}
	}
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Iniciar sesión" />
</svelte:head>

<div class="flex flex-row w-full py-4 justify-center">
	<div class="flex flex-col bg-light-600 w-md py-8 px-4 gap-y-2">
		<div class="flex flex-row w-full gap-x-2">
			<strong>Correo electrónico:</strong>
			<input bind:value={email} type="email" />
		</div>
		<div class="flex flex-row w-full gap-x-2">
			<strong>Contraseña:</strong>
			<input bind:value={password} type="password" />
		</div>
		<button on:click={logIn} class="bg-light-800">Ingresar</button>
	</div>
</div>
