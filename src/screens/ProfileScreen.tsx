// src/screens/ProfileScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { auth } from "../../firebase/firebaseConfig"; // Asegúrate de que la ruta sea correcta

const ProfileScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            navigation.navigate("LoginScreen"); // va a la pantalla oculta después del login
        } catch (error: any) {
            Alert.alert("Error", error.message);
        }
    };

    const handleSignUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            Alert.alert("Usuario creado", "¡Tu cuenta fue creada con éxito!");
            navigation.navigate("LoginScreen");
        } catch (error: any) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/avatar.png")}
                style={styles.avatar}
            />
            <Text style={styles.title}>Bienvenido a AFC</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.link} onPress={handleSignUp}>
                <Text style={styles.linkText}>¿No tenés cuenta? Crear una</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 30,
    },
    title: {
        color: "#fff",
        fontSize: 22,
        marginBottom: 30,
    },
    input: {
        backgroundColor: "#222",
        color: "#fff",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    link: {
        marginTop: 20,
    },
    linkText: {
        color: "#aaa",
        fontSize: 14,
    },
});

export default ProfileScreen;
