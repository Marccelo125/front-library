import type {RegisterApiType, RegisterResponseType, RegisterType} from '../types/register/index';
import axios from 'axios';


export default class RegisterApi implements RegisterApiType {
    protected token = useCookie("XSRF-TOKEN");

    protected client = axios.create({
        baseURL: useRuntimeConfig().public.apiUrl + '/api',
        headers: {
            "X-XSRF-TOKEN": this.token.value
        },
        withCredentials: true,
    })


    async register(userData: RegisterType): Promise<RegisterResponseType> {
        const response = await this.client.post('/register', userData);

        return response.data
    }
}