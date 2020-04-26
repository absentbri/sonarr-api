import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Http {
    private readonly http: AxiosInstance;

    public constructor (config: AxiosRequestConfig) {
        this.http = axios.create(config);

        // middleware: before the http request
        this.http.interceptors.request.use((param: AxiosRequestConfig) => ({
            ...param
        }));

        // middleware: before response returned
        this.http.interceptors.response.use((param: AxiosResponse) => ({
            ...param
        }));
    }

    public getUri (config?: AxiosRequestConfig): string {
        return this.http.getUri(config);
    }

    public request<T, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R> {
        return this.http.request(config);
    }

    public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.get(url, config);
    }

    public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.delete(url, config);
    }

    public head<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.head(url, config);
    }

    public post<T, R = AxiosResponse<T>> (url: string, data?: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.post(url, data, config);
    }

    public put<T, R = AxiosResponse<T>> (url: string, data?: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.put(url, data, config);
    }

    public patch<T, R = AxiosResponse<T>> (url: string, data?: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.patch(url, data, config);
    }
}