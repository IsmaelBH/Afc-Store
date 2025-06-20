import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.iconRow}>
                <TouchableOpacity onPress={() => navigation.navigate('Shows')}>
                    <Image source={require('../../assets/icons/shows.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Store')}>
                    <Image source={require('../../assets/icons/store.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../../assets/icons/profile.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../../assets/icons/cart.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        position: 'absolute',
        bottom: 60,
        paddingHorizontal: 10,
    },
    icon: {
        width: 28,
        height: 28,
        marginHorizontal: 10,
    },
});

export default HomeScreen;
