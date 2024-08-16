import type { LoginCostumerType, LoginReferencesType, LoginResponseType } from "../types/login";
import LoginApi from "./login-api";

export default class LoginCostumer implements LoginCostumerType {
    private loginApi = new LoginApi();

    async login({email, password}: LoginReferencesType): Promise<LoginResponseType> {
        const loginData = {
            email: email.value.value,
            password: password.value.value,
        }

        const response = await this.loginApi.login(loginData);

        return response;
    }
}