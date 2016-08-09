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

export default class Main extends Component {
    constructor(props){
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
       
       const data = ['Spectacles' , 'Giraffe' , 'Turtule' , 'Shark' , 'Lamp' , 'Salt',
       'Beef' , 'Drawer' , 'Brocolii' , 'Rasberies','Plate','Zibra'];

       this.state = {artists: dataSource.cloneWithRows(data) };
    
}

renderRow = (text , sId , rId) => {
 return(
     <ListItem index={rId}
        text={text}
        image={null}
        />
 );
};

render(){
       const {artists} = this.state;
        return(
            <View style={styles.container}>

             <StatusBar barStyle='light-content' />

             <TextInput style={styles.searchBox} 
             onChangeText={this.makeQuery} />

            <ListView dataSource={artists}
                    style={styles.listView}
                    renderRow={this.renderRow} />

            </View>
        );
    }
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