import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => (
        <View style={styles.section}>{props.children}</View>
    );

const styles = {
    section: {        
        backgroundColor: 'transparent', 
        position: 'relative',
    }
};

export default CardSection;
