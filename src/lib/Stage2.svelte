<script>
	export let callback;
</script>

<article>
	<header>
		<h1>Spin the Moose!</h1>
	</header>
	<main>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		</span>
		<img src="/images/wheel.png" />
		<form>
			<fieldset>
				<label for="fullname">Full Name:</label>
				<input id="fullname" type="text" />
			</fieldset>

			<fieldset>
				<label for="email">Email:</label>
				<input id="email" type="email" />
			</fieldset>

			<fieldset>
				<label for="´phonenumber">Phone Number:</label>
				<input id="´phonenumber" type="tel" />
			</fieldset>

			<span>By clicking the button below, you agree to be signed up to our newsletter.</span>
			<button on:click={callback}>Click here to spin the moose</button>
		</form>
	</main>
</article>

<style>
	article {
		width: 1000px;
		height: 750px;

		background: #e5e5e5;
		border: 2px solid #000000;
		border-radius: 21px;
	}
	header {
		padding-top: 45px;
		text-align: center;
	}
	main {
		padding: 75px;
		display: grid;
		grid-gap: 15px;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			'text wheel'
			'form form';
	}
	img {
		margin-top: -40px;
	}
	main span {
		font-size: 18px;
	}
	form {
		display: flex;
		flex-direction: column;
		grid-column: span 2;
	}
	fieldset {
		padding: 0;
		padding-bottom: 20px;
		border: none;
	}
	label {
		display: block;
		padding-bottom: 5px;
		font-size: 18px;
	}
	input {
		border: 2px solid black;
		background: inherit;
		border-radius: 0;
		width: 100%;
	}

	button {
		height: 50px;
		background: #ff3d17;
		color: white;
		border-radius: 25px;
		margin-top: 15px;

		font-size: 18px;
		font-weight: bold;

		cursor: pointer;
	}
</style>
