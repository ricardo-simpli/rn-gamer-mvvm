import { useState } from 'react';

interface valuesTypes {
    email: string;
    password: string;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const LoginViewModel = () => {
    const [error, setError] = useState<string>('');
    const [values, setValues] = useState<valuesTypes>({
        email: '',
        password: '',
    });

    const onChange = (property: string, value: string): void => {
        setValues({ ...values, [property]: value });
    };

    const isValidForm = (): boolean => {
        // eslint-disable-next-line no-useless-escape
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (values.email === '') {
            setError('El correo no puede estar vacio');
            return false;
        }
        if (!reg.test(values.email)) {
            setError('Debes ingresar un email valido');
            return false;
        }
        if (values.password === '') {
            setError('La contraseña no puede estar vacio');
            return false;
        }
        if (values.password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            return false;
        }
        return true;
    };
    const login = (): void => {
        if (isValidForm()) {
            // console.log('El formulario es valido');
            // console.log('Email', values.email);
            // console.log('Password', values.password);
        }
    };

    return {
        ...values,
        onChange,
        login,
        error,
        setError,
    };
};

export default LoginViewModel;
