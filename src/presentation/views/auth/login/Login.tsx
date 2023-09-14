/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {
    Text,
    Image,
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
import DefaultButton from '@presentation/components/DefaultButton';
import DefaultTextInput from '@presentation/components/DefaultTextInput';
import { type RootStackParamList } from '@presentation/navigation/MainStackNavigator';
import { type StackScreenProps } from '@react-navigation/stack';
import DI from '@src/di/ioc';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Login({ navigation }: Props) {
    const { email, password, error, onChange, login, setError } =
        DI.resolve('LoginViewModel');
    const icons = {
        // eslint-disable-next-line global-require
        control: require('@assets/img/game_con_black.png'),
        // eslint-disable-next-line global-require
        email: require('@assets/img/email.png'),
        // eslint-disable-next-line global-require
        password: require('@assets/img/password.png'),
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
                <Text style={styles.title}>INGRESA</Text>
                <Text style={styles.title}>A LA APP</Text>
                <Image source={icons.control} style={styles.image} />
            </View>
            <View style={{ flex: 1 }} />
            <DefaultTextInput
                placeholder="Correo"
                property="email"
                value={email}
                onChangeText={onChange}
                image={icons.email}
            />
            <DefaultTextInput
                placeholder="Contraseña"
                property="password"
                value={password}
                onChangeText={onChange}
                image={icons.password}
                secureTextEntry
            />
            <DefaultButton text="Login" onPress={() => login()} />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('RegisterScreen');
                }}>
                <Text style={styles.registerText}>
                    {'Registrate Ahora'.toUpperCase()}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
