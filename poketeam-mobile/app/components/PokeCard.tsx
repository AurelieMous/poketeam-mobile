import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { IPokemon } from "@/types/pokemon";
import {useRouter} from "expo-router";

interface IPokeProps {
    pokemon: IPokemon;
}

export default function PokeCard({ pokemon }: IPokeProps) {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/pokemon/${pokemon.pokedex_id}`);
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            {/* Image à gauche */}
            <Image
                source={{ uri: pokemon.sprites.regular }}
                style={styles.image}
            />

            {/* Contenu à droite */}
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.pokedexNumber}>#{pokemon.pokedex_id}</Text>
                    <Text style={styles.generation}>Gen {pokemon.generation}</Text>
                </View>

                <Text style={styles.nameFr}>{pokemon.name.fr}</Text>
                <Text style={styles.nameJp}>{pokemon.name.jp}</Text>

                <Text style={styles.category}>{pokemon.category}</Text>

                {/* Badges des types */}
                <View style={styles.typesContainer}>
                    {pokemon.types?.map((type) => (
                        <View style={styles.typeBadge} key={type.name}>
                            <Image
                                source={{ uri: type.image }}
                                style={styles.typeIcon}
                            />
                            <Text style={styles.typeText}>{type.name}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Bouton favori (optionnel) */}
            {/* <TouchableOpacity style={styles.favoriteButton}>
                <Text style={styles.favoriteIcon}>⭐️</Text>
            </TouchableOpacity> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
        overflow: "hidden",
        padding: 12,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
        backgroundColor: "#f5f5f5",
    },
    content: {
        flex: 1,
        marginLeft: 12,
        justifyContent: "space-between",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
    },
    pokedexNumber: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#666",
    },
    generation: {
        fontSize: 12,
        color: "#999",
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
    },
    nameFr: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 2,
    },
    nameJp: {
        fontSize: 13,
        color: "#888",
        marginBottom: 6,
    },
    category: {
        fontSize: 12,
        color: "#666",
        fontStyle: "italic",
        marginBottom: 8,
    },
    typesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
    },
    typeBadge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e8f4f8",
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#cce7f0",
    },
    typeIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
    },
    typeText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#2c5f77",
        textTransform: "capitalize",
    },
    favoriteButton: {
        position: "absolute",
        top: 12,
        right: 12,
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    favoriteIcon: {
        fontSize: 18,
    },
});