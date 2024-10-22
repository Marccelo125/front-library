import axios from "axios";
import type { LoginApiType, LoginDataType, LoginResponseType } from "../types/login";

export default class LoginApi implements LoginApiType {
    protected token = useCookie("XSRF-TOKEN");

    protected client = axios.create({
        baseURL: useRuntimeConfig().public.apiUrl + '/api',
        headers: {
            "X-XSRF-TOKEN": this.token.value
        },
        withCredentials: true,
    })

    async login(loginData: LoginDataType): Promise<LoginResponseType> {
        const response = await this.client.post('login', loginData);

        return response.data
    }
}