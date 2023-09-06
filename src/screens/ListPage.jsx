import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const pokemonData = [
    {
        name: 'Pikachu',
        type: 'Elétrico',
    },
    {
        name: 'Charmander',
        type: 'Fogo',
    },
    {
        name: 'Psyduck',
        type: 'Psíquico'
    }
]

const styles = StyleSheet.create({
    pokemonCard: {
        padding: 16,
        backgroundColor: '#fc8b3a',
        margin: 8,
        borderRadius: 20
    },
    text: {
        color: '#ffffff',
        fontSize: 24,
    }
})

const PokemonItem = ({pokemon}) => {
    const {name, type} = pokemon

    return (
        <View style={styles.pokemonCard}>
            <Text style={styles.text}>Pokemon: {name}</Text>
            <Text style={styles.text}>Tipo: {type}</Text>
        </View>
    )
}

const ListPage = () => {
    return (
        <SafeAreaView style={{marginTop: 20}}>
            <FlatList
                data={pokemonData}
                renderItem={({item}) => <PokemonItem pokemon={item}/>}
            />
        </SafeAreaView>
    );
}

export default ListPage;