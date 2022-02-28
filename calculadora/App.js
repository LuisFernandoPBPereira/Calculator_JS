//===========================================Importações==============================================

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Buttons from './src/Components/Buttons';
import Display from './src/Components/Display';

//====================================================================================================

export default function App() {

  const initialStates = [{
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
  }]

  const [states, setStates] = useState(...initialStates)

  function addNumber(number){

    //Tratamento para conter apenas um ponto na conta.
    if(number === '.' &&
    states.displayValue.includes('.')){
      return
    }

    //Tratamento para que não fique um 0 (zero) no início ao digitar outro valor.
    const clearDisplay = states.displayValue === '0' || states.clearDisplay

    //Pega o valor atual baseado no display e salva na variável.
    const currentValue = clearDisplay ? '' :
    states.displayValue;
    
    //Concatena o valor do display com o número clicado.
    const displayValue = currentValue + number

    //Altera o valor do estado baseado em nossas variáveis
    setStates(copyValue => {
      return {...copyValue, displayValue, clearDisplay: false}
    })

    //Alterando o valor do nosso array values no estado com o valor do display
    if(number !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...states.values]
      values[states.current] = newValue
      setStates(copyValue => {
        return {...copyValue, values}
      })
    }
    console.log(currentValue)
  }

  function clearMemory(){
    setStates(...initialStates)
  }


  function setOperation(operation){

    if(states.current === 0){
      setStates(copyValue => {
        return {...copyValue, operation, current: 1, clearDisplay: true}
      })
    }
    else{
      const equals = operation === '='
      const values = [...states.values]
      try{
        values[0] = eval(`${values[0]} ${states.operation} ${values[1]}`)
      }
      catch(error){
        values[0] = states.values[0]
      }

      values[1] = 0
      setStates(copyValue => {
        return{
          ...copyValue,
          displayValue: values[0],
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: true,
          values
        }
      })
      console.log(values)
    }

  
  }

  return (
    <View style={styles.container}>
      <Display values={states.displayValue} />
      <View style={styles.buttonsContainer}>

        <Buttons label='AC' triple operation action={() => {clearMemory()}}/>

        <Buttons label='/' operation action={() => {setOperation('/')}}/>

        <Buttons label='7' action={() => addNumber('7')}/>
        <Buttons label='8' action={() => addNumber('8')}/>
        <Buttons label='9' action={() => addNumber('9')}/>

        <Buttons label='*' operation action={() => {setOperation('*')}}/>

        <Buttons label='4' action={() => addNumber('4')}/>
        <Buttons label='5' action={() => addNumber('5')}/>
        <Buttons label='6' action={() => addNumber('6')}/>
        
        <Buttons label='-' operation action={() => {setOperation('-')}}/>

        <Buttons label='1' action={() => addNumber('1')}/>
        <Buttons label='2' action={() => addNumber('2')}/>
        <Buttons label='3' action={() => addNumber('3')}/>

        <Buttons label='+' operation action={() => {setOperation('+')}}/>
        
        <Buttons label='0' action={() => addNumber('0')} double/>
        <Buttons label='.' action={() => addNumber('.')}/>

        <Buttons label='=' operation action={() => {setOperation('=')}}/> 
        
      </View>
    </View>
  );
}


//================================Declarando estilização dos botões==================================

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: "#0E1538"
  }
});
