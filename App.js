import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Converter from './app/Converter';
import Setting from './app/Setting';
import Calculator from './app/calculator/index';

import Icon from 'react-native-vector-icons/FontAwesome';

const Navigator = createMaterialTopTabNavigator(
    {
      Calculator: {screen: Calculator},
      Converter: {screen: Converter},
      Setting: {screen: Setting}
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Calculator') {
            iconName = `calculator`;
          }; 
          if (routeName === 'Converter') {
            iconName = `exchange`;
          }
          else if (routeName === 'Setting' ) {
            iconName = 'navicon';
          }
  
          // You can return any component that you like here!
          return <Icon type='FontAwesome' name={iconName} size={25} color={tintColor} />;
        },
        }),      
        tabBarOptions: {
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: '#000000',
            paddingVertical: 2.5,
          }
        },
    }    
);
export default createAppContainer(Navigator);

export class App extends Component {
    render() {
        return (
            <View style={styles.container}>
              <StatusBar
                backgroundColor="#000000"
                barStyle="light-content"
                animated={true}
              />
              <Navigator />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    }
});
