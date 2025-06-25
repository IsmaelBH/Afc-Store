import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Modal,
    ActivityIndicator,
    Image,
    Linking,
    StatusBar,
    TouchableWithoutFeedback,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

type Show = {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
    ticketUrl: string;
};

export default function ShowsScreen() {
    const [shows, setShows] = useState<Show[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedShow, setSelectedShow] = useState<Show | null>(null);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const snapshot = await getDocs(collection(db, "shows"));
                const showsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Show[];
                setShows(showsData);
            } catch (error) {
                console.error("Error fetching shows:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchShows();
    }, []);

    const openInMaps = (location: string) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        Linking.openURL(url);
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
            <StatusBar barStyle="light-content" />

            <FlatList
                data={shows}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedShow(item)}
                        style={styles.card}
                    >
                        <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
                        <View style={styles.cardText}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                            <Text style={styles.location}>{item.location}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.ticketButton}
                            onPress={() => Linking.openURL(item.ticketUrl)}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                                <Text style={styles.ticketButtonText}>Tickets</Text>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />

            <Modal
                visible={!!selectedShow}
                animationType="slide"
                transparent
                onRequestClose={() => setSelectedShow(null)}
            >
                <TouchableWithoutFeedback onPress={() => setSelectedShow(null)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                {selectedShow && (
                                    <>
                                        <Image source={{ uri: selectedShow.imageUrl }} style={styles.modalImage} />
                                        <Text style={styles.modalTitle}>{selectedShow.title}</Text>
                                        <Text style={styles.modalDate}>{selectedShow.date}</Text>
                                        <Text style={styles.modalDescription}>{selectedShow.description}</Text>
                                        <TouchableOpacity
                                            style={styles.mapButton}
                                            onPress={() => openInMaps(selectedShow.location)}
                                        >
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <MaterialIcons name="location-on" size={16} color="#fff" style={{ marginRight: 6 }} />
                                                <Text style={styles.mapButtonText}>{selectedShow.location}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </>
                                )}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111",
        flex: 1,
        padding: 10,
        paddingTop: 30,


    },
    loadingContainer: {
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: "#222",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },
    cardImage: {
        width: "100%",
        height: 180,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardText: {
        marginBottom: 10,
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 5,
    },
    date: {
        color: "#ccc",
        marginTop: 10,
        textAlign: "left",
    },
    location: {
        color: "#aaa",
        marginTop: 2,
        textAlign: "left",
    },
    ticketButton: {
        backgroundColor: "#FF6600",
        padding: 8,
        borderRadius: 4,
        alignSelf: "flex-end",
        marginBottom: 15,
    },
    ticketButtonText: {
        color: "#F8F8F8",
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "center",
        padding: 20,
    },
    modalContent: {
        backgroundColor: "#222",
        borderRadius: 10,
        padding: 20,
    },
    modalImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalTitle: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 6,
    },
    modalDate: {
        color: "#ccc",
        marginBottom: 6,
        textAlign: "right",
    },
    modalDescription: {
        color: "#ddd",
        fontSize: 16,
        marginBottom: 15,
        textAlign: "justify",
    },
    mapButton: {
        backgroundColor: "#666",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    mapButtonText: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
    },
});