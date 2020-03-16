import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import s from './styles/Styles';

import Icon from 'react-native-vector-icons/FontAwesome';


class Distance extends Component {

    constructor(props){
        super(props);
        this.state = { userInput: '', unitFrom: 'mi', unitTo: 'km', result: null,
                        distance:{'km': 1000,'m': 1,'cm':0.01,'mm':0.001,'in':0.0254,
                                    'mi':1609.34,'n.m':1852,'yd':0.9144,'ft':0.3048
                    }
        }
        
    }
    
    formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    clearInput = () => {
        this.setState({userInput:''});
    }

    handleToChange = (unit2) => {
        this.setState({unitTo: unit2},()=> this.calculate());
    }

    handleFromChange = (unit1) => {
        this.setState({unitFrom:unit1},() => this.calculate());
    }

    calculate = () => {
        // Intermediary: Meter
        if (this.state.userInput !== '') {
            let intermediary, target;
            intermediary=this.state.userInput*this.state.distance[this.state.unitFrom]
            target = intermediary/this.state.distance[this.state.unitTo]
            if(isNaN(target))
                Alert.alert('Problem occurred','Unrecognized character found. Remove it to proceed');
            else    
                this.setState({ result: this.formatNumber(parseFloat(target).toFixed(1)) });
        }
        else {
            this.setState({ result: null })
        }
    }
    swap = () => {
        let temp1, temp2;
        temp1 = this.state.unitFrom;
        temp2 = this.state.unitTo;
        this.setState({ unitFrom: temp2, unitTo: temp1 }, () => {
            this.calculate()
        })
    }

    updateAndCalculate = (text) => {
        this.setState({userInput: text.replace(/,/g,'')},() => 
            this.calculate()
     )
    }

    render() {        
        return (
            
            <View style={s.card}>
                <View style={[s.headerContainer,{backgroundColor: '#4a4a4c'}]} >
                    <Text style={s.headerText}> Distance </Text>
                </View>

                <View style={s.contentsContainer} >

                    <View style={s.inputContainer}>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitFrom}
                            onValueChange={this.handleFromChange}>
                            <Picker.Item label="Km Kilometer" value="km" />
                            <Picker.Item label="M Meter" value="m" />
                            <Picker.Item label="Cm Centimeter" value="cm" />
                            <Picker.Item label="Mm Millimeter" value="mm" />
                            <Picker.Item label="Mi Mile" value="mi" />
                            <Picker.Item label="Yd Yard" value="yd" />
                            <Picker.Item label="Ft Foot" value="ft" />
                            <Picker.Item label="In Inch" value="in" />
                            <Picker.Item label="N.m Nautical Mile" value="n.m" />
                        </Picker>
                        <View style ={s.textInputContainerIOS} >
                            <TextInput
                                placeholder="Input"
                                style={s.textStyle}
                                value= {this.formatNumber(this.state.userInput)}
                                onChangeText={this.updateAndCalculate}
                                maxLength={18}
                                keyboardType='numeric'
                                clearButtonMode='while-editing'
                            />
                        </View>
                    </View>
                    <View style={s.iconContainer} >
                        <TouchableOpacity onPress={this.swap}>
                            <Icon name='exchange' style={s.iconStyle} size={25}/>
                        </TouchableOpacity>
                        {Platform.OS === 'android' &&
                        <TouchableOpacity onPress={this.clearInput}>
                            <Icon name='trash' style={s.iconStyle} size={25}/>
                        </TouchableOpacity>
                        }
                    </View>

                    <View style={s.inputContainer}>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitTo}
                            onValueChange={this.handleToChange}>
                            <Picker.Item label="Km Kilometer" value="km" />
                            <Picker.Item label="M Meter" value="m" />
                            <Picker.Item label="Cm Centimeter" value="cm" />
                            <Picker.Item label="Mm Millimeter" value="mm" />
                            <Picker.Item label="Mi Mile" value="mi" />
                            <Picker.Item label="Yd Yard" value="yd" />
                            <Picker.Item label="Ft Foot" value="ft" />
                            <Picker.Item label="In Inch" value="in" />
                            <Picker.Item label="N.m Nautical Mile" value="n.m" />
                        </Picker>
                        <View>
                            <Text style={[s.textStyle,s.resultText]}> {this.state.result} </Text>
                        </View>
                    </View>

                </View>



            </View>
        );
    }
}

export default Distance;