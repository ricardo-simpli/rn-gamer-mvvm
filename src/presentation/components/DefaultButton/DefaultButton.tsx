/* eslint-disable react/require-default-props */
import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './Styles';

interface Props {
    text: string;
    onPress: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image?: any;
}
function DefaultButton({
    text,
    onPress,
    // eslint-disable-next-line global-require
    image = require('@assets/img/right-arrow.png'),
}: Props): JSX.Element {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View />
            <Text style={styles.textButton}>{text}</Text>
            <Image source={image} style={styles.buttonIcon} />
        </TouchableOpacity>
    );
}

export default DefaultButton;
