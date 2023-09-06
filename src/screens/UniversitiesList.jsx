import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 16,
        margin: 8,
        backgroundColor: '#fff'
    }
})

const UniversityItem = ({university}) => {
    return (
        <View style={styles.card}>
            <Text>Nome: {university.name}</Text>
            <Text>Alpha code: {university.alpha_two_code}</Text>
        </View>
    )
}

const UniversitiesList = () => {
    const [universities, setUniversities] = useState()

    const fetchUniversities = async () => {
        try {
            const {data} = await axios.get('http://universities.hipolabs.com/search?country=Brazil')
            setUniversities(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUniversities()
    }, [])

    return (
        <View>
            <FlatList 
                data={universities} 
                renderItem={({item}) => 
                    <UniversityItem university={item}/>
                }
            />
        </View>
    );
}

export default UniversitiesList;