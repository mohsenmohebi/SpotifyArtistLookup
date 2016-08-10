import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import clrs from '../Utils/clrs';
import FadeInView from './FadeInView'

const placeholder = require('../Utils/assets/placeholder.jpg');

const ListItem = ({index, text, imageUrl, navState , navigator}) => {
    const image = (
        imageUrl ? {uri: imageUrl} : placeholder
    );

return (
    <TouchableOpacity
    underlayColor={clrs.gray}
    onPress={()=> navigator.push(navState)}>
    
        <FadeInView delay= {index * 25}>
            <View style={styles.mediaObject}>
                <Image source={image} style={styles.image}/>
                <Text style={styles.text}> {text} </Text>
            </View>
        </FadeInView>
    </TouchableOpacity>
);

};

export default ListItem;

const styles = StyleSheet.create({
    mediaObject:{
        flex: 1,
        alignItems: 'center',
        flexDirection:'row',
        marginBottom: 10,
        marginLeft:16,
    },
    text: {
        flex: 1,
    },
    image: {
        backgroundColor: clrs.gray,
        width: 40,
        height: 40,
        marginRight: 16,
        paddingLeft: 10,
    },
});