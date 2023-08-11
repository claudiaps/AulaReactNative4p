import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import MyButton from "../components/MyButton";

const CatFacts = () => {
    const [catFact, setCatFact] = useState()

    const fetchCatFact = async () => {
        try {
            const catFactsResponse = []
            for (let i = 0; i<=1; i++){
                const {data} = await axios.get('https://catfact.ninja/fact')
                catFactsResponse.push(data.fact)
            }
            setCatFact(catFactsResponse)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <StatusBar />
            <View>
                <Text>Cats facts</Text>
                <MyButton title="Fato aleatório sobre gatos" onPressButton={fetchCatFact}/>
                <View>
                    {catFact?.length ? catFact.map(cf => (
                        <Text style={{marginTop: 20}}>{cf}</Text>
                    )) : <></>}
                </View>
            </View>
        </SafeAreaView>
    );
}

export default CatFacts;