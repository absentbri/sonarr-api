import {Http} from './Http'
import {SeriesLookup} from '../Models'
import {AxiosRequestConfig, AxiosResponse} from 'axios'

export class SeriesLookupResource extends Http {

	constructor(config: AxiosRequestConfig) {
		super(config)
	}

	async list(term: string): Promise<SeriesLookup[]> {
		try {
			const response: AxiosResponse = await this.get('/series/lookup', { params: { term } });
			return response.data;
		}
		catch (error) {
			throw error;
		}
	}

}