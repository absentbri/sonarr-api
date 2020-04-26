import {URL} from 'url'
import {AxiosRequestConfig} from 'axios'
import winston from 'winston'

import {SonarrOptions} from './SonarrOptions'

import {SeriesLookupResource} from './Resources'

export class SonarrClient {

	private _defaultOptions: Partial<SonarrOptions> = {
		host: 'localhost',
		port: 8989,
		ssl: false
	}

	private readonly options: SonarrOptions

	public readonly serieslookup: SeriesLookupResource

	constructor(options: Partial<SonarrOptions>) {
		this.options = <SonarrOptions>Object.assign({}, this._defaultOptions, options)

		const axiosConfig = this.config()

		this.serieslookup = new SeriesLookupResource(axiosConfig)
	}

	private url() {
		const protocol = this.options.ssl ? 'https' : 'http'
		const base = this.options.baseUrl?.length ? `/${this.options.baseUrl}` : ''
		return new URL(`${protocol}://${this.options.host}:${this.options.port}${base}/api`)
	}

	private config(): AxiosRequestConfig {
		return {
			withCredentials: true,
			baseURL: this.url().toString(),
			headers: {
				common: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"X-Api-Key": this.options.apiKey,
				},
			},
		}
	}

	private logger() {
		const logger = winston.createLogger({
			level: 'info',
			format: winston.format.json(),
			defaultMeta: {service: 'user-service'},
			transports: [
				new winston.transports.Console({format: winston.format.simple()})
			]
		});
		if (process.env.NODE_ENV !== 'production') {
			logger.add(new winston.transports.Console({
				format: winston.format.simple()
			}));
		}
	}

}
