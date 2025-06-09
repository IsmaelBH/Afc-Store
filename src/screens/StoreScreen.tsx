import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Image,
    ActivityIndicator,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Product } from '../types';
import { useNavigation } from '@react-navigation/native';

const StoreScreen = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const fetchProducts = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'products'));
            const data: Product[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Product[];
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAddToCart = () => {
        if (selectedProduct) {
            dispatch(addToCart(selectedProduct));
            Alert.alert('Producto agregado', 'El producto fue añadido al carrito.');
            setSelectedProduct(null);
        }
    };


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
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => setSelectedProduct(item)}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <Modal
                visible={!!selectedProduct}
                animationType="slide"
                transparent
                onRequestClose={() => setSelectedProduct(null)}
            >
                <TouchableOpacity
                    style={styles.modalContainer}
                    activeOpacity={1}
                    onPressOut={() => setSelectedProduct(null)}
                >
                    <View style={styles.modalContent}>
                        {selectedProduct && (
                            <>
                                <Image source={{ uri: selectedProduct.image }} style={styles.modalImage} />
                                <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
                                <Text style={styles.modalPrice}>Precio: ${selectedProduct.price}</Text>
                                <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
                                <TouchableOpacity style={styles.closeButton} onPress={handleAddToCart}>
                                    <Image source={require('../../assets/icons/cart.png')} style={styles.iconCart} />
                                    <Text style={styles.textAddToCart}>Agregar al carrito</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

export default StoreScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111',
        flex: 1,
        padding: 10,
        marginTop: 25,
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#222',
        marginBottom: 12,
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    storeText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
        marginRight: 12,
    },
    cardContent: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        color: '#ccc',
        marginTop: 4,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#222',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalImage: {
        width: 150,
        height: 150,
        marginBottom: 15,
        borderRadius: 10,
    },
    modalTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalPrice: {
        color: '#ccc',
        fontSize: 16,
        marginBottom: 8,
    },
    modalDescription: {
        color: '#ddd',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15,
    },
    textAddToCart: {
        color: '#fff',
        textAlign: 'center',
    },
    iconCart: {
        width: 20,
        height: 20,
        marginRight: 6,
    },
    closeButton: {
        backgroundColor: '#f4511e',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
});
