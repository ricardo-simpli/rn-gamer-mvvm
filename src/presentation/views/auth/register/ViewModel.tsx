import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface valuesTypes {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const RegisterViewModel = () => {
    const [error, setError] = useState<string>('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [errors, setErrors] = useState<valuesTypes>({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [values, setValues] = useState<valuesTypes>({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChange = (property: string, value: string): void => {
        setValues({ ...values, [property]: value });
    };

    const isValidForm = (): boolean => {
        // eslint-disable-next-line no-useless-escape
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (values.userName === '') {
            setError('El nombre de usuario no puede estar vacio');
            return false;
        }
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
        if (values.confirmPassword !== values.password) {
            setError('La confirmacion de contraseña no coinside');
            return false;
        }
        return true;
    };

    const onRegister = (): void => {
        if (isValidForm()) {
            // console.log('El formulario es valido', values);
        }
    };

    return {
        values,
        onChange,
        onRegister,
        error,
        errors,
        setError,
    };
};

export default RegisterViewModel;
