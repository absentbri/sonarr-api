import {Http} from './Http'
import {Profile} from '../Models'
import {AxiosRequestConfig, AxiosResponse} from 'axios'

export class ProfileResource extends Http {

	constructor(config: AxiosRequestConfig) {
		super(config)
	}

	async list(): Promise<Profile[]> {
		try {
			const response: AxiosResponse = await this.get('/profile');
			return response.data;
		}
		catch (error) {
			throw error;
		}
	}

}