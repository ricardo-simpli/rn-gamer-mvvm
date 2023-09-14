import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStackNavigatior } from './src/presentation/navigation/MainStackNavigator';

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <MainStackNavigatior />
        </NavigationContainer>
    );
}

export default App;
