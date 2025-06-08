import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';

export default function CartScreen() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const confirmPurchase = () => {
        Alert.alert('¡Gracias por tu compra!', `Total: $${total}`, [
            { text: 'OK', onPress: () => dispatch(clearCart()) },
        ]);
    };

    return (
        <View style={styles.container}>
            {cartItems.length === 0 ? (
                <Text style={styles.emptyText}>Tu carrito está vacío</Text>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <View style={styles.info}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.price}>${item.price}</Text>
                                </View>
                                <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
                                    <Text style={styles.removeText}>Eliminar</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />

                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total: ${total}</Text>
                        <TouchableOpacity style={styles.confirmButton} onPress={confirmPurchase}>
                            <Text style={styles.confirmText}>Confirmar compra</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
    },
    emptyText: {
        color: '#ccc',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 30,
    },
    card: {
        backgroundColor: '#111',
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 6,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
    price: {
        color: '#ccc',
        fontSize: 14,
    },
    removeText: {
        color: 'red',
        fontSize: 14,
    },
    totalContainer: {
        paddingTop: 10,
        borderTopColor: '#222',
        borderTopWidth: 1,
        marginTop: 10,
    },
    totalText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    confirmButton: {
        backgroundColor: '#333',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    confirmText: {
        color: '#fff',
        fontSize: 16,
    },
});
