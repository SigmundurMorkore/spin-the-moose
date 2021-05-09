<script lang="ts">
	import Stage2 from '$lib/Stage2.svelte';
	import Stage3 from '$lib/Stage3.svelte';
	let stage = 0;

	function stage2Callback(event) {
		stage = 3;
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#if stage === 0}
	<button on:click|preventDefault={() => (stage = 1)}>Spin the Moose!</button>
{/if}

{#if stage === 1}
	<Stage2 callback={stage2Callback} />
{/if}

{#if stage === 3}
	<Stage3 />
{/if}

<style>
	button {
		height: 50px;
		background: #ff3d17;
		color: white;
		border-radius: 25px;
		padding-left: 50px;
		padding-right: 50px;

		font-size: 18px;
		font-weight: bold;

		cursor: pointer;
	}

	h1 {
		width: 100%;
	}
</style>
