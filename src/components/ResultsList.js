import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ResultDetails from './ResultDetails'
const ResultsList = ({ title,filter }) => {
    return (
        
        <View >
            <Text style={resultStyle.title}>{title}</Text>
            <Text>the length is {filter.length}</Text>
            <FlatList    
             horizontal
             showsHorizontalScrollIndicator={false}
             data={filter}
             keyExtractor={filter.name}
             renderItem={({item}) =>{
                 return filter.length ==0 ?<Text> hi</Text>:<ResultDetails results={item}/> 
             }}
             
            />
        </View>
    )
    
}
export default ResultsList;
const resultStyle = StyleSheet.create({

    title: {
        marginLeft:15,
        fontSize: 18,
        fontWeight: 'bold'
    }
}

)