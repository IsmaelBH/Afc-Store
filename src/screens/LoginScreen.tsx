import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLoginMutation } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/authSlice';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { isLoading }] = useLoginMutation();
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    const onSubmit = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor completa ambos campos.');
            return;
        }

        try {
            const response: any = await login({ email, password });
            if (response?.data) {
                dispatch(setUser(response.data));
                navigation.navigate('Home');
            } else {
                Alert.alert('Error', 'Credenciales incorrectas o problema con el servidor.');
            }
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al iniciar sesión.');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />

            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Contraseña"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity onPress={onSubmit} style={styles.button}>
                <Text style={styles.buttonText}>{isLoading ? 'Cargando...' : 'Iniciar sesión'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>¿No tienes cuenta? Registrate aquí</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // fondo negro
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        marginBottom: 40,
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#E91E63',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    link: {
        color: '#ccc',
        marginTop: 10,
    },
});
