import { StyleSheet } from 'react-native';
import { MyColors } from '@src/presentation/theme/AppTheme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInput: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 18,
        marginHorizontal: 30,
        marginTop: 20,
        color: MyColors.secondary,
    },
    image: {
        height: 25,
        width: 25,
        marginLeft: 15,
        marginTop: 30,
    },
    // eslint-disable-next-line react-native/no-color-literals
    textError: {
        marginLeft: 75,
        marginTop: 5,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default styles;
