import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  ListView,
  TextInput,
  View,
} from 'react-native';

import ListItem from './ListItem';
import clrs from '../Utils/clrs';
import {searchFor} from '../Utils/fetcher';
import {debounce} from 'lodash';

export default class Main extends Component {
    constructor(props){
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
       
       this.state = {artists: dataSource};
    
}

renderRow = ( artist , sId , id) => {
    const imageUrl = artist.images[0] ? artist.images[0].url : null;
 return(
     <ListItem index={id}
        text={artist.name}
        imageUrl={imageUrl}
        />
 );
};

render(){
       const { artists } = this.state;

        return(
            <View style={styles.container}>

             <StatusBar barStyle='light-content' />

             <TextInput style={styles.searchBox} 
             onChangeText={this.makeQuery} />

            <ListView dataSource={ artists }
                    style={ styles.listView }
                    renderRow={ this.renderRow } />

            </View>
        );
    }

    makeQuery = debounce(query=> {
        searchFor(query)
        .then(artists => {
            this.setState({
                artists: this.state.artists.cloneWithRows(artists),
            });
        })
        .catch((error) => {
            throw error;
        });
    },400);
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 64,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: clrs.white,
    },
    searchBox: {
        height: 40,
        borderColor: clrs.black,
        borderWidth: 2,
        margin: 16,
        paddingLeft: 10,
        fontWeight: '800',
    },
    row: {
        margin: 16,
    },
    listView:{
        flex: 1 , alignSelf: 'stretch'
    },
});