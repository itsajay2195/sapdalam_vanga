import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import { Feather } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';


const SearchScreen = () => {
    const [searchTerm, setTerm] = useState('');
    const [errorMsg, searchApi, results] = useResults();
    // useEffect is basically used to run a code only once during the start of the application, in our case we are 
    //using this as we dont want out application's search page to be empty initially. 
    // We can aslo make the useEffect to run twice/ desired number of times based on the input passed in the second arg.


    const filterByPrice=(price) =>{
        return results.filter(result=>{
            return result.price == price;
        });
    }

    console.warn(results)
    return (
        <View style={{flex:1,marginLeft:15}}>

            <SearchBar term={searchTerm} onChangeTerm={(newTerm) => setTerm(newTerm)} onSubmit={() => searchApi(searchTerm)}></SearchBar>
            {results == '' ? <Feather name='loader' style={styles.iconStyling}/>:null}
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We found {results.length} results</Text>
            <ScrollView>
            <ResultsList filter={filterByPrice(2)} title='Cost Effective'/>
            <ResultsList filter={filterByPrice(3)} title='Bit Pricier' />
            <ResultsList filter={filterByPrice(4)} title='Expensive' />
            {/* <ResultsList filter={filterByPrice(2)} title='Expensive'/> */}
            <ResultsList filter={filterByPrice(5)} title='Expensive' />
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    nameStyle:{
        fontWeight:'bold'
    }
});

export default SearchScreen







