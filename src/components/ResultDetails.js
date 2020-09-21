import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';


const ResultDetails =({results})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri:"https://www.spendwithpennies.com/wp-content/uploads/2019/06/Grilled-BBQ-Chicken-SpendWithePennies-4-500x500.jpg"}}></Image>
            <Text numberOfLines={1}  style={styles.nameStyle}> {results.name.length <32 ?results.name  : results.name.substring(0,28)+'...' }</Text>
            <Text> 5 stars,  1773 reviews</Text>
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
       marginLeft:15
    },
    imageStyle:{
        height:110,
        width:200,
    },
    nameStyle:{
        fontWeight:'bold'
    }
})

export default ResultDetails;
