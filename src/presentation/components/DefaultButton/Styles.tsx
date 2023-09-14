import { StyleSheet } from 'react-native';
import { MyColors } from '@src/presentation/theme/AppTheme';

const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-color-literals
    textButton: {
        color: '#000',
        fontSize: 19,
        marginLeft: 20,
    },
    button: {
        backgroundColor: MyColors.primary,
        height: 50,
        marginHorizontal: 30,
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 25,
        flexDirection: 'row',
    },
    buttonIcon: {
        height: 30,
        width: 30,
    },
});

export default styles;
