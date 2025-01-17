import type { RegisterCostumerType, RegisterReferenciesType, RegisterResponseType, RegisterDataType } from "../types/register";
import RegisterApi from "./register-api";

export default class RegisterCostumer implements RegisterCostumerType {
    private registerApi = new RegisterApi();

    async register({ name, email, password, }: RegisterReferenciesType): Promise<RegisterResponseType> {
        const userData: RegisterDataType  = {
            name: name.value.value,
            email: email.value.value,
            password: password.value.value,
        }
        const response = await this.registerApi.register(userData);

        return response
    }
}