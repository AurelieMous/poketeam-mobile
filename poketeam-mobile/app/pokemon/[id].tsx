// app/pokemon/[id].tsx
import { View, Text, Image, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { IPokemon } from '@/types/pokemon';
import { RulerDimensionLine, Weight } from "lucide-react-native";

export default function PokeDetail() {
    const { id } = useLocalSearchParams();
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemon();
    }, [id]);

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://tyradex.app/api/v1/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error('Erreur:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3b82f6" />
                <Text style={styles.loadingText}>Chargement...</Text>
            </View>
        );
    }

    if (!pokemon) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Pokémon non trouvé</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {/* Header avec numéro et noms */}
            <View style={styles.header}>
                <Text style={styles.pokedexNumber}>#{pokemon.pokedex_id}</Text>
                <Text style={styles.nameFr}>{pokemon.name.fr}</Text>
                <Text style={styles.nameJp}>{pokemon.name.jp}</Text>
            </View>

            {/* Section sprites */}
            <View style={styles.spritesContainer}>
                <View style={styles.spriteCard}>
                    <Text style={styles.spriteLabel}>Forme normale</Text>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={{ uri: pokemon.sprites.regular }}
                            style={styles.spriteImage}
                        />
                    </View>
                </View>

                <View style={styles.spriteCard}>
                    <Text style={styles.spriteLabel}>Forme shiny</Text>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={{ uri: pokemon.sprites.shiny }}
                            style={styles.spriteImage}
                        />
                    </View>
                </View>
            </View>

            {/* Section informations générales */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Informations</Text>

                <View style={styles.infoCard}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Catégorie</Text>
                        <Text style={styles.infoValue}>{pokemon.category}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Génération</Text>
                        <Text style={styles.infoValue}>Génération {pokemon.generation}</Text>
                    </View>
                </View>
            </View>

            {/* Section mensurations */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Mensurations</Text>

                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <Weight size={24} color="#666" />
                        <Text style={styles.statLabel}>Poids</Text>
                        <Text style={styles.statValue}>{pokemon.weight}</Text>
                    </View>

                    <View style={styles.statCard}>
                        <RulerDimensionLine size={24} color="#666" />
                        <Text style={styles.statLabel}>Taille</Text>
                        <Text style={styles.statValue}>{pokemon.height}</Text>
                    </View>
                </View>
            </View>

            {/* Section types */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Types</Text>

                <View style={styles.typesContainer}>
                    {pokemon.types?.map((type) => (
                        <View key={type.name} style={styles.typeBadge}>
                            <Image
                                source={{ uri: type.image }}
                                style={styles.typeIcon}
                            />
                            <Text style={styles.typeText}>{type.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: '#666',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 18,
        color: '#999',
    },
    header: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    pokedexNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 8,
    },
    nameFr: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    nameJp: {
        fontSize: 16,
        color: '#888',
    },
    spritesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        paddingVertical: 20,
        gap: 12,
    },
    spriteCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    spriteLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        marginBottom: 8,
    },
    imageWrapper: {
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        padding: 8,
    },
    spriteImage: {
        width: 120,
        height: 120,
    },
    section: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    infoCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    infoValue: {
        fontSize: 14,
        color: '#333',
        fontWeight: '600',
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
        marginTop: 8,
        marginBottom: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    typesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    typeBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    typeIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    typeText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        textTransform: 'capitalize',
    },
});