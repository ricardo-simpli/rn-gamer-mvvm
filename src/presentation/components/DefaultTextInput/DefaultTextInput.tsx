import React from 'react';
import { TextInput, View, Image, Text, type KeyboardType } from 'react-native';
import { MyColors } from '@presentation/theme/AppTheme';
import styles from './Styles';

interface Props {
    placeholder: string;
    value: string;
    property: string;
    // eslint-disable-next-line react/require-default-props, @typescript-eslint/no-explicit-any
    image?: any;
    // eslint-disable-next-line react/require-default-props
    keyboardType?: KeyboardType;
    // eslint-disable-next-line react/require-default-props
    secureTextEntry?: boolean;
    // eslint-disable-next-line react/require-default-props
    error?: string;
    onChangeText: (prop: string, value: string) => void;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function DefaultTextInput({
    placeholder = '',
    value,
    property,
    image,
    error,
    keyboardType = 'default',
    secureTextEntry = false,
    onChangeText,
}: Props) {
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
}

export default DefaultTextInput;
