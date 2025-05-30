/* Home screen */// src/screens/HomeScreen.tsx
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/MainNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeIcon from "../assets/icons/home.png";
import ShowsIcon from "../assets/icons/shows.png";
import StoreIcon from "../assets/icons/store.png";
import ProfileIcon from "../assets/icons/profile.png";
import CartIcon from "../assets/icons/cart.png";
import Logo from "../assets/logo.png";


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    return (

        <View style={styles.container}>
            <View style={styles.container}>
                <Image source={Logo} style={styles.logo} />
            </View>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={HomeIcon} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Shows")}>
                    <Image source={ShowsIcon} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Store")}>
                    <Image source={StoreIcon} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image source={ProfileIcon} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                    <Image source={CartIcon} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 280,
        height: 280,
        marginTop: 100,
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        marginBottom: 55,
    },
    icon: {

        width: 25,
        height: 25,
        marginHorizontal: 10,
    },
});

export default HomeScreen;
