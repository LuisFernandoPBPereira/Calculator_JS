//===========================================Importações==============================================

import React from 'react';
import {StyleSheet, Dimensions, Text, TouchableHighlight} from 'react-native';

//====================================================================================================

function Buttons(props){

    const stylesButton = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.buttonOperation)

    return(
        <TouchableHighlight onPress={props.action}>
            <Text style={stylesButton}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

//================================Declarando estilização dos botões================================

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width  / 4,
        padding: 15,
        backgroundColor: '#0E1538',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#4169E1',
        borderRadius: "8%",
        color:"#FFF"
    },
    buttonOperation: {
        color: '#FFF',
        backgroundColor: '#4169E1',
        borderColor: "#0E1538",
        borderWidth: 3,
        borderRadius: "8%"
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
        
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

//Exportando componente
export default Buttons