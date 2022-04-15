import { StoreApi } from '../client/store';
import type { MovieCategory } from '../client/types';

const store = new StoreApi();

export const useMovies = (category: MovieCategory) => {
	return store.getMovies(category);
};
