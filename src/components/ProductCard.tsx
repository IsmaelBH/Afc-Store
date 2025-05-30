/* ProductCard component */// src/components/ProductCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#222',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 8,
        flex: 1,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 140,
    },
    info: {
        padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        color: '#ccc',
        marginTop: 4,
        fontSize: 14,
    },
});
