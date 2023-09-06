import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Switch, Text, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
    margin: 8
  }  
})

const Form = ({navigation}) => {
    const [inputValue, setInputValue] = useState()
    const [inputValid, setInputValid] = useState(true)
    const [switchValue, setSwitchValue] = useState(false)
    
    const onChangeValue = (value) => {
        if(value.length >= 10 || value.length === 0 ) {
            setInputValid(true)
        } else {
            setInputValid(false)
        }
        setInputValue(value)
    }

    const changeSwitchValue = () => {
        setSwitchValue(!switchValue)
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.textInput} 
                value={inputValue}
                onChangeText={onChangeValue}
                placeholder="Digite algum texto"
            />
            {/* {!inputValid ? <Text>Input deve conter pelo menos 10 caracteres</Text> : <></>} */}
            {inputValid === true ? <></> : <Text>Input deve conter pelo menos 10 caracteres</Text>}
            <Switch
                value={switchValue}
                onValueChange={changeSwitchValue}
            />
            <Button title="tela de universidades" onPress={() => navigation.navigate('Universities')}/>
        </SafeAreaView>
    );
}

export default Form;