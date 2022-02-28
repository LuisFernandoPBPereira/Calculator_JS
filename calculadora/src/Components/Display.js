//===========================================Importações==============================================

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//====================================================================================================

function Display(props){
    return(
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>
                {props.values}
            </Text>
        </View>
    )
    
}

//================================Declarando estilização dos botões==================================

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#0E1538',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#FFF'
    }
})

//Exportando componente
export default Display