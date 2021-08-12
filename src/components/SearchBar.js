import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term,onTermChange, onTermSubmit}) => {
    return (
            <View style = {styles.backgroundStyle}>
                    <Feather name="search"  style={styles.iconStyle} color="black" />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder = "Search"
                        style={styles.inputStyle}
                        value = {term}
                        onChangeText={onTermChange} //we can do this because the fuction an parameter were already defined in parent
                        onEndEditing={onTermSubmit}
                    />
            </View>
            );
};


const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10 ,
        backgroundColor: '#C8C8C8',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row'
    },
    inputStyle :{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
    
});

export default SearchBar;

//vector-icon library to show icon on screen