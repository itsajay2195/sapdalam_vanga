import React from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails';
import { withNavigation } from 'react-navigation';

// withNavigation helps the component to directly access the navigate 
const ResultsList = ({ title,filter,navigation }) => {
    if(!filter.length){
        return null;
    }
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
                 return (
                    <TouchableOpacity onPress={()=>navigation.navigate('ResultDetail',{id:item.id})}>
                    <ResultDetails results={item}/> 
                    </TouchableOpacity> )
                    
             }}
             
            />
        </View>
        
    )}
    

export default withNavigation(ResultsList);
const resultStyle = StyleSheet.create({

    title: {
        marginLeft:15,
        fontSize: 18,
        fontWeight: 'bold'
    }
}

)