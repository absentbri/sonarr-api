import {Http} from './Http'
import {Rootfolder} from '../Models'
import {AxiosRequestConfig, AxiosResponse} from 'axios'

export class RootfolderResource extends Http {

	constructor(config: AxiosRequestConfig) {
		super(config)
	}

	async list(): Promise<Rootfolder[]> {
		try {
			const response: AxiosResponse = await this.get('/rootfolder');
			return response.data;
		}
		catch (error) {
			throw error;
		}
	}

}