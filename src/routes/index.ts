import { useMovies } from '../libs/hooks/movie';

/** @type {import('../../.svelte-kit/types/src/routes/index').RequestHandler} */
export async function get() {
	const movies = await useMovies('popular');
	if (movies) {
		return {
			body: { movies }
		};
	}
	return {
		status: 404
	};
}
