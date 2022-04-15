<script>
	import Movie from '../components/Movie.svelte';
	export let movies;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="container">
	<header>
		<h1>Movie Container</h1>
	</header>
	<main>
		<div>
			<h3>Popular</h3>
			<div class="movie_container">
				{#each movies.results as movie}
					<Movie {movie} />
				{/each}
			</div>
		</div>
	</main>
</div>

<style>
	.container {
		background-color: #161616;
	}
	header h1 {
		color: white;
	}
	main div h3 {
		color: white;
	}
	.movie_container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding: 0px 15px;
		gap: 10px;
	}
</style>
