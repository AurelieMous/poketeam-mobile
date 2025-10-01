import {Text, View, StyleSheet, ActivityIndicator, FlatList} from "react-native";
import {useEffect, useState} from "react";
import {IPokemon} from "@/types/pokemon";
import PokeCard from "@/app/components/PokeCard";

export default function Index() {
    const [allPoke, setAllPoke] = useState<IPokemon[]>([]);
    const [displayedPokemon, setDisplayedPokemon] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [loadingMore, setLoadingMore] = useState(false);

    const ITEMS_PER_PAGE = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const fetchAllPokemon = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch (`https://tyradex.app/api/v1/pokemon`);
            const data: IPokemon[] = await response.json()
            // Filtrer le Pokémon avec pokedex_id === 0
            const filteredData = data.filter(pokemon => pokemon.pokedex_id !== 0);

            setAllPoke(filteredData);
            setDisplayedPokemon(data.slice(0, ITEMS_PER_PAGE))
        } catch (error) {
            setError("Erreur lors de la récupération des Pokémon.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Charger plus de Pokémon quand on scroll
    const loadMorePokemon = () => {
        if (loadingMore) return;

        const nextPage = currentPage + 1;
        const startIndex = currentPage * ITEMS_PER_PAGE;
        const endIndex = nextPage * ITEMS_PER_PAGE;

        // Vérifier s'il reste des Pokémon à charger
        if (startIndex >= allPoke.length) return;

        setLoadingMore(true);

        // Simuler un petit délai pour l'UX
        setTimeout(() => {
            const newPokemon = allPoke.slice(0, endIndex);
            setDisplayedPokemon(newPokemon);
            setCurrentPage(nextPage);
            setLoadingMore(false);
        }, 300);
    };

    useEffect(() => {
        fetchAllPokemon();
    }, []);

    const renderFooter = () => {
        if (!loadingMore) return null;
        return (
            <View style={styles.footerLoader}>
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        );
    };

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Chargement des Pokémon...</Text>
            </View>
        );
    }

  return (
    <View
      style={styles.wrapper}
    >
      <Text style={styles.title}>Bienvenu sur la liste des Pokémon</Text>
        <Text>Choisis tes Pokémon préférés, ajoute-les à ton équipe et compare leurs statistiques.</Text>
        <View style={styles.container}>
            <FlatList
                data={displayedPokemon}
                keyExtractor={(item) => item.pokedex_id.toString()}
                renderItem={({ item }) => (
                    <PokeCard pokemon={item}
                    />
                )}
                onEndReached={loadMorePokemon}
                onEndReachedThreshold={0.5} // Charge quand on arrive à 50% de la fin
                ListFooterComponent={renderFooter}
                contentContainerStyle={styles.listContent}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        gap: 20,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    imageCard: {
        width: '100%',
        height: 200,
    },
    contentCard: {
        padding: 16,
    },
    titleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    subtitleCard: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    descriptionCard: {
        fontSize: 14,
        color: '#888',
        lineHeight: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    listContent: {
        paddingVertical: 10,
    },
    footerLoader: {
        paddingVertical: 20,
        alignItems: 'center',
    },
})
