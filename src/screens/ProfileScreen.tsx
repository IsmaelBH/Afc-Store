// ProfileScreen.tsx
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { logout } from '../redux/slices/authSlice';
import { PROFILE_IMAGE_KEY } from '../constants/storageKeys';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
    const { email, fullName } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const [imageUri, setImageUri] = useState<string | null>(null);

    useEffect(() => {
        const loadImage = async () => {
            const savedUri = await AsyncStorage.getItem(PROFILE_IMAGE_KEY);
            if (savedUri) {
                setImageUri(savedUri);
            }
        };
        loadImage();
    }, []);

    const openCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Acceso denegado', 'Por favor habilita la cámara desde ajustes.');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const sourceUri = result.assets[0].uri;
            const fileName = sourceUri.split('/').pop() || `profile_${Date.now()}.jpg`;
            const newPath = FileSystem.documentDirectory + fileName;

            try {
                await FileSystem.copyAsync({ from: sourceUri, to: newPath });
                await AsyncStorage.setItem(PROFILE_IMAGE_KEY, newPath);
                setImageUri(newPath);
            } catch (error) {
                Alert.alert('Error', 'No se pudo guardar la imagen');
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileImageContainer}>
                <Image
                    source={imageUri ? { uri: imageUri } : require('../../assets/logo.png')}
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.cameraIcon} onPress={openCamera}>
                    <MaterialIcons name="photo-camera" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {fullName ? (
                <>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.email}>{fullName}</Text>
                </>
            ) : null}

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.email}>{email}</Text>

            <TouchableOpacity style={styles.logoutContainer} onPress={() => dispatch(logout())}>
                <Text style={styles.logoutText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
        alignItems: 'center',
    },
    profileImageContainer: {
        position: 'relative',
        marginTop: 180,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#555',
        borderRadius: 20,
        padding: 6,
    },
    label: {
        color: '#aaa',
        fontSize: 16,
        marginTop: 40,
    },
    email: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 4,
    },
    logoutContainer: {
        position: 'absolute',
        bottom: 30,
    },
    logoutText: {
        color: '#64b5f6',
        fontSize: 14,
        textDecorationLine: 'underline',
        marginBottom: 50,
    },
});
