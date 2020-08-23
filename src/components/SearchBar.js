import React from 'react';
import {View,Text,TextInput,StyleSheet} from  'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar =() =>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyling}/> 
            <TextInput  style={styles.inpuStyle} placeholder="Search"/>
        </View>
    );
};

const styles=StyleSheet.create({  

    backgroundStyle:{
        flexDirection:'row',
        height:51,
        marginHorizontal:15,
        borderRadius:5,
        backgroundColor:'#F0EEEE',
        //alignSelf:'center'   - this make the seach bar collapse, this will not alow the text input to stretch
        //#F0EEEE 
    },
    inpuStyle:{
        borderColor:'black',
        borderWidth:1,
        flex:1 // this basically say the element to use as much as possible space it can in the flex direction.
    },
    iconStyling:{
        fontSize:35, // this bascially controls the size of the icon
        alignSelf:'center',   // alignSelf property is basically used control the layout of 1 single element.
        marginHorizontal:10,
    }
});

export default SearchBar 

// github vector-icons resources  
// https://expo.github.io/vector-icons