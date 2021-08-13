import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image,ScrollView, SafeAreaView} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation})  => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResults = async (id) => {
        const response =   await yelp.get(`/${id}`);
        setResult(response.data);
        
    };

    const getText = () => {
        return (
        <View>
        <Text style = {styles.textName}>
            Restaurant:  {result.name}
         </Text>
         <Text style = {styles.textInfo}>
            Location: {result.location.address1}, {result.location.zip_code}, {result.location.city}
         </Text>
         <Text style = {styles.textInfo}>
            Phone number: {result.display_phone}
         </Text>
         
         </View>)
    }

    useEffect(() => {
        getResults(id);
    },[]);

    if (!result){
        return null ;
    }
    return( 
    <View style = {{flex : 1}}>
        
            

            <SafeAreaView style={{flex: 1}}>
            <FlatList
                
                data={result.photos}
                ListHeaderComponent={getText()}

                keyExtractor = {(photo) => photo}
                renderItem={({item}) => {
                    return <Image style = {styles.image} source={{uri: item}}/>
                }} 
            />
            </SafeAreaView>

    </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        alignSelf: 'center',
        borderRadius: 3,
        marginTop: 10,
       
        
    },
    textInfo : {
        marginLeft: 15 ,
        fontSize: 18
    },
    textName: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'rgb(26, 126, 225)',
        marginLeft: 15 
    }
});

export default ResultsShowScreen ;