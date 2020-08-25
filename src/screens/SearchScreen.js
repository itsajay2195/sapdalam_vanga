import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'




const SearchScreen = () => {
    const [searchTerm, setTerm] = useState('');
    const [errorMsg, searchApi, results] = useResults();
    // useEffect is basically used to run a code only once during the start of the application, in our case we are 
    //using this as we dont want out application's search page to be empty initially. 
    // We can aslo make the useEffect to run twice/ desired number of times based on the input passed in the second arg.


    return (
        <View>

            <SearchBar term={searchTerm} onChangeTerm={(newTerm) => setTerm(newTerm)} onSubmit={() => searchApi(searchTerm)}></SearchBar>
            {errorMsg ? <Text>{errorMsg}</Text> : null}

            <Text>We found {results.length} results</Text>

        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen







