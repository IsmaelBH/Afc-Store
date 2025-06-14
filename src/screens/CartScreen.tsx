import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addToCart, removeFromCart, clearCart, decreaseQuantity } from '../redux/slices/cartSlice';

export default function CartScreen() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const groupedItems = cartItems.reduce((acc: { [key: string]: any }, item) => {
        if (!acc[item.id]) {
            acc[item.id] = { ...item, quantity: 1 };
        } else {
            acc[item.id].quantity++;
        }
        return acc;
    }, {});

    const items = Object.values(groupedItems);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const confirmPurchase = () => {
        Alert.alert('¡Gracias por tu compra!', `Total: $${total}`, [
            { text: 'OK', onPress: () => dispatch(clearCart()) },
        ]);
    };

    return (
        <View style={styles.container}>
            {items.length === 0 ? (
                <Text style={styles.emptyText}>Tu carrito está vacío</Text>
            ) : (
                <>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <View style={styles.info}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <View style={styles.controlsRow}>
                                        <Text style={styles.price}>${item.price * item.quantity} x{item.quantity}</Text>

                                        <TouchableOpacity
                                            style={styles.qtyButton}
                                            onPress={() => {
                                                if (item.quantity < item.stock) {
                                                    dispatch(addToCart(item));
                                                }
                                            }}
                                        >
                                            <Text style={styles.qtyButtonText}>＋</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.qtyButton}
                                            onPress={() => {
                                                if (item.quantity > 1) {
                                                    dispatch(decreaseQuantity(item.id));
                                                }
                                            }}
                                        >
                                            <Text style={styles.qtyButtonText}>−</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.deleteButton}
                                            onPress={() => dispatch(removeFromCart(item.id))}
                                        >
                                            <Text style={styles.removeText}>Eliminar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
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
        marginTop: 380,
    },
    card: {
        backgroundColor: '#111',
        flexDirection: 'row',
        padding: 10,
        marginTop: 40,
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
        marginBottom: 5,
    },
    controlsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        gap: 10,
    },
    price: {
        color: '#ccc',
        fontSize: 14,
        marginRight: 10,
    },
    qtyButton: {
        backgroundColor: '#333',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    qtyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    deleteButton: {
        marginLeft: 'auto',
    },
    removeText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 10,
    },
    totalContainer: {
        paddingTop: 10,
        borderTopColor: '#222',
        borderTopWidth: 1,
        marginBottom: 60,
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
