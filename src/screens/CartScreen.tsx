/* Cart screen */// src/screens/cartScreen.tsx
import React from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart, clearCart } from "../redux/cartSlice";

const CartScreen = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrito</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemTitle}>{item.name}</Text>
                        <Text>Cantidad: {item.quantity}</Text>
                        <Text>Precio: ${item.price * item.quantity}</Text>
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => dispatch(removeFromCart(item.id))}
                        >
                            <Text style={styles.removeText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
            <Button title="Pagar ahora" onPress={() => dispatch(clearCart())} />
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#121212",
    },
    title: {
        fontSize: 24,
        color: "#fff",
        marginBottom: 16,
    },
    itemContainer: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: "#1e1e1e",
        borderRadius: 8,
    },
    itemTitle: {
        fontSize: 18,
        color: "#fff",
    },
    removeButton: {
        marginTop: 8,
        padding: 8,
        backgroundColor: "#ff5252",
        borderRadius: 4,
    },
    removeText: {
        color: "#fff",
        textAlign: "center",
    },
    total: {
        fontSize: 20,
        color: "#fff",
        marginTop: 20,
        marginBottom: 10,
        textAlign: "right",
    },
});
