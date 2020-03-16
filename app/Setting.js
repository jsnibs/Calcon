
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import {Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends Component {  

  render() {
    return (      
      <View style={styles.container}>        
        <View style={{textAlign: 'justify'}}>      
          <Text style={styles.welcome}>About Developer <Icon name='studiovinari' size={25} color='#a6a6a6' /></Text>
          <Text style={styles.instructions}>
            Hey! I am James, I develop as a hobby and 
            I am trying my hands on making apps for the first time. 
            It is my hope that I make apps that is extremely useful 
            for regular people ...and get some little donation doing so.
          </Text>
        </View>    
          
        <View style={{flex: 1, justifyContent: 'flex-end', flexShrink: 2, backgroundColor: '#000000',}}>
          <Text style={styles.welcome}>Suggest Features!</Text>
          <TextInput
            style={{ height: 40, margin: 5, backgroundColor: '#333333', }}
            onChangeText={text => onChangeText(text)}
            placeholder='Title'
            placeholderTextColor='#ffffff'
          />
          <TextInput
            style={{ height: 120, margin: 5, backgroundColor: '#333333', textAlignVertical: 'top'}}
            onChangeText={text => onChangeText(text)}
            placeholder='Suggest a feedback'
            placeholderTextColor='#ffffff'
            multiline={true}
          />
          <View style={{margin: 5,}}>
            <Button
              title="Outline button"
              type="outline"
            />
          </View>
        </View>
               
      </View>     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 10,
  },
  welcome: {
    fontSize: 16,
    color: 'white',
    margin: 5,
    textAlign: 'left',
    backgroundColor: '#000000'
  },
  instructions: {
    color: 'white',
    margin: 5,
    fontSize: 12,
    marginBottom: 15,
    textAlign: 'left',
  },
})


