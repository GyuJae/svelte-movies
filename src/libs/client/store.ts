import type { IMovieDetail, IMovieResult, MovieCategory } from './types';

export class StoreApi {
	private apiUrl: string;
	private API_KEY: string;
	constructor() {
		this.apiUrl = 'https://api.themoviedb.org/3/';
		this.API_KEY = '962cebc1820ada99a807125b7f1fdcbf';
	}
	private makeApiCall = async <T>(apiPath: string): Promise<T> => {
		const response = await fetch(`${this.apiUrl}${apiPath}`, {
			headers: {
				Accept: 'application/json'
			}
		});
		if (!response.ok) {
			throw new Error(
				`Error from api call ${apiPath}: status=${response.status} ${await response.text()}`
			);
		}
		return response.json();
	};

	public getMovies = async (category: MovieCategory): Promise<IMovieResult> => {
		const response = await this.makeApiCall<IMovieResult>(
			`movie/${category}?api_key=${this.API_KEY}`
		);
		if (!response.results) {
			throw new Error('Movies not found');
		}
		return response;
	};

	public getMovie = async (id: string) => {
		const response = await this.makeApiCall<IMovieDetail>(`movie/${id}?api_key=${this.API_KEY}`);
		if (!response.id) {
			throw new Error('Movie not found');
		}
		return response;
	};
}
