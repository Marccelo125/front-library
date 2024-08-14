import type { FieldContext } from "vee-validate"

export interface RegisterApiType {
    register(userData: RegisterType): Promise<RegisterResponseType> 
}

export interface RegisterCostumerType {
    register({ name, email, password }: RegisterReferenciesType): Promise<RegisterResponseType | void>
}

export interface RegisterReferenciesType {
    name: FieldContext<string>
    email: FieldContext<string>
    password: FieldContext<string>
}

export interface RegisterType {
    name: string,
	email: string,
	password: string
}

export interface RegisterResponseType {
    success: boolean
    msg: string
    data: Array<
    {
        name: string
        email: string,
        updated_at: string,
        created_at: string,
        id: number
    } | string>
}