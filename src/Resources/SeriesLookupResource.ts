import {URL} from 'url'
import {Http} from './Http'
import {SeriesLookup} from '../Models'
import {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'

export class SeriesLookupResource extends Http {

	constructor(config: AxiosRequestConfig) {
		super(config)
	}

	list(term: string): Promise<SeriesLookup[]> {
		return this.get('/series/lookup', {params: {term: term}})
			.then((response: AxiosResponse) => response.data)
			.catch((error: AxiosError) => console.error(error))
	}

}