<script lang="ts">
	import { makeImagePath } from '../libs/client/utils';

	import type { IMovie } from '../libs/client/types';

	export let movie: IMovie;
</script>

<div id={movie.id + ''}>
	<img alt={movie.title} src={makeImagePath(movie.backdrop_path)} />
	<p>{movie.title}</p>
</div>

<style>
	p {
		color: white;
		font-size: 15px;
	}
	img {
		width: 100%;
		height: 150px;
		border-radius: 5px;
	}
</style>
