import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import s from './styles/Styles';

import Icon from 'react-native-vector-icons/FontAwesome';


class Weight extends Component {

    constructor(props){
        super(props);
        this.state = { userInput: '', unitFrom: 'kg', unitTo: 'lb', result: null,
                        weight:{'kg':1000,'g':1,'lb':453.592,'oz':28.3495}
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
        // Intermediary: Gram
        if (this.state.userInput !== '') {
            let intermediary, target;
            intermediary=this.state.userInput*this.state.weight[this.state.unitFrom]
            target = intermediary/this.state.weight[this.state.unitTo]
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
                <View style={[s.headerContainer,{backgroundColor: '#c6c9ce'}]} >
                    <Text style={s.headerText}> Weight </Text>
                </View>

                <View style={s.contentsContainer} >

                    <View style={s.inputContainer}>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitFrom}
                            onValueChange={this.handleFromChange}>
                            <Picker.Item label="Kg Kilogram" value="kg" />
                            <Picker.Item label="G Gram" value="g" />
                            <Picker.Item label="Lb Pound/" value="lb" />
                            <Picker.Item label="Oz Ounce" value="oz" />
                        </Picker>
                        <View style ={s.textInputContainerIOS}>
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
                            <Icon name='exchange' style={s.iconStlye} size={25}/>
                        </TouchableOpacity>

                        {Platform.OS === 'android' &&
                        <TouchableOpacity onPress={this.clearInput}>
                            <Icon name='trash' style={s.iconStlye} size={25}/>
                        </TouchableOpacity>
                        }
                    </View>

                    <View style={s.inputContainer}>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitTo}
                            onValueChange={this.handleToChange}>
                            <Picker.Item label="Kg Kilogram" value="kg" />
                            <Picker.Item label="G Gram" value="g" />
                            <Picker.Item label="Lb Pound" value="lb" />
                            <Picker.Item label="Oz Ounce" value="oz" />
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

export default Weight;