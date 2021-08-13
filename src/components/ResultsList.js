import React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = (props) => {

    if (!props.results.length){
        return null ;
    }
    return (<View style = {styles.container}>
        <Text style = {styles.title}>{props.title}</Text>
        <FlatList
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
            data = {props.results}
            keyExtractor={(result) =>result.id}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity onPress = {() => props.navigation.navigate('ResultsShow',{id: item.id})}>  
                    <ResultsDetails result={item} />
                    </TouchableOpacity>)
            }
        } 

        />
    </View>);
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18 ,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }
});

export default  withNavigation(ResultsList) ;

//nop longer export resultList directly, instead export resultList with access to navigator