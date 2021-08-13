import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const[term, setTerm] = useState('');
    const[searchApi, results, errorMessage] = useResults();
    

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$'.
        return results.filter(result => {
            return result.price === price ; // let the result variable go through all elems in the array,
            //if result.price == price, return the result
        }) ;
    };
    

    return (
    <View style = {{flex : 1}}>
        <SearchBar 
            term ={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit = {()=> searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text style={{marginLeft: 15}} >We found {results.length} results</Text>
        <ScrollView>
        <ResultsList 
            results={filterResultsByPrice('€')} 
            title = "Cost Effective"
             />
        <ResultsList 
            results={filterResultsByPrice('€€')} 
            title = "Bit Pricier"
            />
        <ResultsList 
            results={filterResultsByPrice('€€€')} 
            title = "Big Spender"
            />
        </ScrollView>
    </View>
    );
};


const styles = StyleSheet.create({
    
});

export default SearchScreen ;

//use either fetch or anxios to take data from API
//use effect hook: to run the function only when the component is first rendered, and when the 
//value changes, useEffect have 2 argument, one is a function and one is an array

//$ is cost effectibe
//$$ is bit pricier
//$$$ is big spender