import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { auth, db } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function ProfileScreen() {
    const [image, setImage] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(true);

    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            setUserEmail(user.email || '');
            fetchProfilePhoto();
        }
    }, []);

    const fetchProfilePhoto = async () => {
        try {
            const docRef = doc(db, 'users', user!.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                if (data.photoURL) {
                    setImage(data.photoURL);
                }
            }
        } catch (error) {
            console.error('Error cargando foto de perfil:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        Alert.alert(
            'Cerrar sesión',
            '¿Estás seguro de que quieres cerrar sesión?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Cerrar sesión',
                    onPress: async () => {
                        try {
                            await signOut(auth);
                        } catch (error) {
                            console.error('Error al cerrar sesión:', error);
                        }
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Perfil</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#fff" />
            ) : (
                <Image
                    source={image ? { uri: image } : require('../../assets/logo.png')}
                    style={styles.avatar}
                />
            )}

            <Text style={styles.email}>Email: {userEmail}</Text>

            <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingTop: 60,
    },
    title: {
        color: 'white',
        fontSize: 26,
        marginBottom: 20,
    },
    email: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#e63946',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
