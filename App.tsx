import React from "react";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./src/navigation/MainNavigator";
import { store } from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <MainNavigator />
                    </NavigationContainer>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </Provider>
    );
}
