import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {
    return (
            <View style = {styles.background}>
                    <Feather name="search" size={30} color="black" />
                    <Text>Seach Bar</Text>
            </View>
            );
};


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#C8C8C8',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }
});

export default SearchBar;

//vector-icon library to show icon on screen