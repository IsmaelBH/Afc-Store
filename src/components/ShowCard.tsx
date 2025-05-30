/* ShowCard component */// src/components/ShowCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Show } from '../types';

interface ShowCardProps {
    show: Show;
    onPress: () => void;
    onTicketPress: () => void;
}

const ShowCard: React.FC<ShowCardProps> = ({ show, onPress, onTicketPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: show.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{show.title}</Text>
                <Text style={styles.date}>{show.date}</Text>
                <TouchableOpacity style={styles.ticketButton} onPress={onTicketPress}>
                    <Text style={styles.ticketText}>🎟 Entradas</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ShowCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#222',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 180,
    },
    content: {
        padding: 12,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    date: {
        color: '#ccc',
        marginTop: 4,
        fontSize: 14,
    },
    ticketButton: {
        marginTop: 10,
        backgroundColor: '#e50914',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    ticketText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
