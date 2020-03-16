
import React, { Component } from 'react';
import {
  Platform,
  Linking,
  Text,
  ScrollView, 
  View
} from 'react-native';

import CardSection from './components/CardSection';
import Temp from './components/Temp';
import Weight from './components/Weight';
import Distance from './components/Distance';
import Volume from './components/Volume';
import Card from './components/Card';

export default class App extends Component {

  render() {
    return (
      
      <ScrollView >
        <Card>
        
        <CardSection>
          <Distance />
        </CardSection>

        <CardSection>
          <Weight />
        </CardSection>

        <CardSection>
          <Volume />
        </CardSection>

        <CardSection>
          <Temp />
        </CardSection>
        
        </Card>
      </ScrollView>
     
    );
  }
}


