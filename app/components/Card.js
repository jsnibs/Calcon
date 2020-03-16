import React from 'react';
import { View, Text } from 'react-native';

state = {
    colorView: true,
};

const Card = (props) => (
        <View style={this.state.colorView ? styles.containerLight : styles.containerDark}>
            {props.children}
        </View>
    );

const styles = {
    container: {
        flex:1,
        backgroundColor: 'rgb(240,240,240)'
    },
    containerLight: {
        flex:1,
        backgroundColor: 'rgb(240,240,240)'
    },
    containerDark: {
        flex:1,
        backgroundColor: 'rgb(40,40,40)'
    },

};

export default Card;
