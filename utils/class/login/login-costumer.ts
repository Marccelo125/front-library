// FIXME: Importando LoginErrorResponseType porém ele não é utilizado
import type { LoginCostumerType, LoginErrorResponseType, LoginSuccessResponseType, LoginType } from "../types/login";
import LoginApi from "./login-api";

export default class LoginCostumer implements LoginCostumerType {
    private loginApi = new LoginApi();

    async login({email, password}: LoginType): Promise<LoginSuccessResponseType> {
        const loginData = {
            email: email.value.value,
            password: password.value.value,
        }

        const response = await this.loginApi.login(loginData);

        return response;
    }
}