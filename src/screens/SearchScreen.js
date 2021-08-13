import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {

    const[term, setTerm] = useState('');
    const[searchApi, results, errorMessage] = useResults();
    

    return (<View>
        <SearchBar 
            term ={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit = {()=> searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We found {results.length} results</Text>
    </View>)
};


const styles = StyleSheet.create({});

export default SearchScreen ;

//use either fetch or anxios to take data from API
//use effect hook: to run the function only when the component is first rendered, and when the 
//value changes, useEffect have 2 argument, one is a function and one is an array