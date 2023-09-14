import { StyleSheet } from 'react-native';
import { MyColors } from '@presentation/theme/AppTheme';

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background,
    },
    svgContainer: {
        backgroundColor: MyColors.primary,
        height: 380,
        paddingTop: 50,
    },
    svg: {
        position: 'absolute',
        top: 320,
    },
    title: {
        fontSize: 30,
        marginLeft: 20,
        color: MyColors.background,
    },
    image: {
        height: 230,
        width: 230,
        transform: [{ rotate: '35deg' }],
        alignSelf: 'flex-end',
    },

    registerText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 50,
        color: MyColors.secondary,
    },
});

export default LoginStyles;
