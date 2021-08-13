import React,{useState, useEffect} from 'react';
import yelp from '../api/yelp';


export default () => {
    const[results, setResult] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {

            const response = await yelp.get('/search',{
                params:{
                    limit: 50 ,//read the document for more infomation
                    term: searchTerm,
                    location: 'tampere'
                }
            });
            setResult(response.data.businesses);
        } catch (err){ 
            setErrorMessage('Chupapi MuyaNO!!!! Something went wrong!!');
        }
    };

    //call search api when components firt rendered

    useEffect(()=> {
        searchApi('fish');
    },[]);

    return [searchApi,results,errorMessage];
};