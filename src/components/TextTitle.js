import React from 'react';
import {Text,StyleSheet} from 'react-native';

const TextTitle = props =>{
    return(
   <Text style = {{...styles.body, ...props.style}}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    body:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        marginVertical:10,
    }
});

export default TextTitle;