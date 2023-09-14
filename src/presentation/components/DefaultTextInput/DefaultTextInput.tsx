import React, { type FC } from 'react';
import { TextInput, View, Image, Text, type KeyboardType } from 'react-native';
import { MyColors } from '@presentation/theme/AppTheme';
import styles from './Styles';

interface Props {
    placeholder: string;
    value: string;
    property: string;
    // eslint-disable-next-line react/require-default-props, @typescript-eslint/no-explicit-any
    image?: any;
    keyboardType?: KeyboardType;
    secureTextEntry?: boolean;
    error?: string;
    onChangeText: (prop: string, value: string) => void;
}
const DefaultTextInput: FC<Props> = ({
    placeholder = '',
    value,
    property,
    image,
    error,
    keyboardType = 'default',
    secureTextEntry = false,
    onChangeText,
}): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <Image source={image} style={styles.image} />
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    style={styles.input}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={MyColors.placeholder}
                    autoCapitalize="none"
                    onChangeText={text => {
                        onChangeText(property, text);
                    }}
                />
            </View>
            {error != null && <Text style={styles.textError}>{error}</Text>}
        </View>
    );
};

export default DefaultTextInput;
