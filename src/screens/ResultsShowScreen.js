import React, { useState, useEffect } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import yelp from '../api/yelp'


const ResultsShowScreen =({navigation})=>{
    const [result,setResult]= useState(null);
    const id = navigation.getParam('id');
    console.warn('the stored result of result varaible',result)
    const getBusiness =async (id)=>{
        const resp = await yelp.get(`/restaurants/${id}`)
        console.warn(resp.data)
        setResult(resp.data)
    }

    useEffect(() => {
        getBusiness(id);
    }, []);

    if(!result){
        return null;  
    }

    return(
    <Text> Result show {result.name} and name is </Text>
    
    
    )
}


const styles = StyleSheet.create()

export default ResultsShowScreen;