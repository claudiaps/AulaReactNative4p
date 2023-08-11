import { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';

const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5e8fa'
  },
  text: {
    fontSize: 32,
    color: '#a1a',
    fontWeight: 'bold'
  }
})

const Counter = () => {
    const [contador, setContador] = useState(0)

    const onPressSumButton = () => {
      setContador(contador + 2)
    }
  
    const onPressSubButton = () => {
      setContador(contador - 3)
    }
  
    return (
      <SafeAreaView style={style.container}>
        <Text style={style.text}>{contador}</Text>
        <MyButton title='CONTADOR +2' onPressButton={onPressSumButton} />
        <MyButton title='CONTADOR -3' onPressButton={onPressSubButton}/>
      </SafeAreaView>
    );
}

export default Counter;