export const loginValidationSchema = {
    email: (value: string) => {
        if (!value) {
            return 'O campo e obrigatório!';
        }
      
        if (!/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) {
            return 'Digite um email valido!'
        }
      
        return true;
    },
    password: (value: string) => {
        if (!value) {
            return 'O campo e obrigatório!';
        }

        if (value.length < 8) {
            return 'O campo precisa no mínimo de 8 caracteres.';
        }

        return true;
    }
}