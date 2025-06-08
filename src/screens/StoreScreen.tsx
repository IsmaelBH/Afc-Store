import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Product } from '../types';
import { useNavigation } from '@react-navigation/native';

const StoreScreen = () => {
    const [items, setItems] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'products'));
                const productList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Product[];
                setItems(productList);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (item: Product) => {
        dispatch(addToCart(item));
        navigation.navigate('Cart' as never);
    };

    const renderItem = ({ item }: { item: Product }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item)}>
                    <Text style={styles.buttonText}>Agregar al carrito</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default StoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // fondo negro
    },
    list: {
        padding: 10,
    },
    card: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    cardContent: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    description: {
        color: '#ccc',
        marginVertical: 5,
    },
    price: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#f4511e',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
