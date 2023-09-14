/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { type StackScreenProps } from '@react-navigation/stack';
import {
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    // eslint-disable-next-line react-native/split-platform-components
    ToastAndroid,
    Platform,
    Alert,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { MyColors } from '@presentation/theme/AppTheme';
import DefaultTextInput from '@src/presentation/components/DefaultTextInput/DefaultTextInput';
import DefaultButton from '@src/presentation/components/DefaultButton/DefaultButton';
import DI from '@src/di/ioc';
import { type RootStackParamList } from '@src/presentation/navigation/MainStackNavigator';
import styles from './Styles';

interface Props
    extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Register({ navigation }: Props) {
    const { values, error, errors, onChange, onRegister, setError } =
        DI.resolve('RegisterViewModel');
    const icons = {
        control: require('@assets/img/game_con_black.png'),
        user: require('@assets/img/user_image.png'),
        email: require('@assets/img/email.png'),
        password: require('@assets/img/password.png'),
        goBack: require('@assets/img/left-arrow.png'),
    };

    useEffect(() => {
        if (error !== '') {
            if (Platform.OS === 'android') {
                ToastAndroid.show(error, ToastAndroid.LONG);
            } else {
                Alert.alert(error);
            }
            setError('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    return (
        <View style={styles.container}>
            <View style={styles.svgContainer}>
                <Svg
                    height={200}
                    width={Dimensions.get('screen').width}
                    viewBox="0 0 1440 320"
                    style={styles.svg}>
                    <Path
                        fill={MyColors.primary}
                        fill-opacity="1"
                        d="M0,32L60,74.7C120,117,240,203,360,197.3C480,192,600,96,720,74.7C840,53,960,107,1080,122.7C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    />
                </Svg>
                <Text style={styles.title}>REGISTRATE</Text>
                <Text style={styles.title}>EN LA APP</Text>
                <Image source={icons.control} style={styles.image} />
                <TouchableOpacity
                    style={styles.goBackIconContent}
                    onPress={() => {
                        navigation.pop();
                    }}>
                    <Image source={icons.goBack} style={styles.goBackIcon} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />
            <DefaultTextInput
                placeholder="Nombre de usuario"
                property="userName"
                value={values.userName}
                image={icons.user}
                onChangeText={onChange}
                error={errors.userName}
            />
            <DefaultTextInput
                placeholder="Correo"
                property="email"
                value={values.email}
                image={icons.email}
                onChangeText={onChange}
                error={errors.email}
            />
            <DefaultTextInput
                placeholder="Contraseña"
                property="password"
                value={values.password}
                image={icons.password}
                onChangeText={onChange}
                error={errors.password}
                secureTextEntry
            />
            <DefaultTextInput
                placeholder="Confirmar contraseña"
                property="confirmPassword"
                value={values.confirmPassword}
                image={icons.password}
                onChangeText={onChange}
                error={errors.confirmPassword}
                secureTextEntry
            />
            <DefaultButton text="REISTRATE" onPress={() => onRegister()} />
        </View>
    );
}

export default Register;
