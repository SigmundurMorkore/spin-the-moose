<script>
	export let callback;

	import { createWinner, getPrize } from '$lib/supabase.ts';

	// Start retreiving the prize
	let prize = _getPrize();

	async function _getPrize() {
		let _prize = await getPrize();

		return _prize;
	}

	async function _createWinner() {
		// Create the winner, and then go back to stage 0
		await createWinner();
		callback(0);
	}
</script>

<article>
	<header>
		<h1>Spin the Moose!</h1>
	</header>
	<main>
		<img src="/images/wheel.png" />
		{#await prize}
			<span>Spinning the moose!....</span>
		{:then value}
			<span>Your prize is: {value.name} 🎉</span>
		{:catch error}
			<span>Whoops, some error happend 😵</span>
		{/await}

		<button on:click={_createWinner}>Claim your prize!</button>
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
		display: flex;
		flex-direction: column;
		padding: 75px;
	}
	img {
		margin-top: -40px;
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
