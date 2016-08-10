import React, {Component} from 'react';
import {View , WebView} from 'react-native';

import clrs from '../Utils/clrs';

const Artist = ({url}) => {
    return(
        <View style={{
            backgroundColor: clrs.white,
            borderLeftColor: clrs.black,
            borderLeftWidth:1,
            flex:1,
            marginTop:64,
        }}>
            <WebView 
                style={{
                    flex:1,
                }}
                source={{
                    uri: url, 
                    method: 'GET'}} />
        </View>
        
    );
};

Artist.propTypes = {
    url: React.PropTypes.string,
};

export default Artist;