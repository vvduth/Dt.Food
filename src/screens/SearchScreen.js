import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const[term, setTerm] = useState('');
    const[results, setResult] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search',{
            params:{
                limit: 50 ,//read the document for more infomation
                term,
                location: 'san jose'
            }
        });
        setResult(response.data.businesses);
    };

    return (<View>
        <SearchBar 
            term ={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit = {()=> searchApi()}
        />
        <Text>Seach Screen.</Text>
        <Text>We found {results.length} results</Text>
    </View>)
};


const styles = StyleSheet.create({});

export default SearchScreen ;

//use either fetch or anxios to take data from API