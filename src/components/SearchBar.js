import React from 'react';
import {View,Text,TextInput,StyleSheet} from  'react-native';
import {Feather} from '@expo/vector-icons';



const SearchBar =({searchTerm,onChangeTerm,onSubmit}) =>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyling}/> 
            <TextInput  style={styles.inpuStyle} 
            placeholder="Search" value={searchTerm} 
            onChangeText={(newTerm)=>onChangeTerm(newTerm)}
            autoCapitalize="none" 
            autoCorrect={false}
            onEndEditing={()=>onSubmit()}/>
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
        marginTop:10
        //alignSelf:'center'   - this make the seach bar collapse, this will not alow the text input to stretch
        //#F0EEEE 
    },
    inpuStyle:{
        flex:1, // this basically say the element to use as much as possible space it can in the flex direction.
        fontSize:20 // the default is 18
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