import React from 'react';
import {View,Text,StyleSheet} from  'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen =() =>{
    return(
        <View>
            <Text>Hi da, welcome to search screen</Text>
            <SearchBar></SearchBar>
        </View>
    );
};

const styles=StyleSheet.create({});

export default SearchScreen