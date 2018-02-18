
import React, { Component } from 'react';
import { AppRegistry,Text,View } from 'react-native';

export default class Component1 extends Component{
  constructor(props){
      super(props);
      this.state = {
          name: 'Brad',
          showName: false,
          message: this.props.message,
          message2: this.props.message2
      }
  }

    static defaultProps = {
            message2: 'Hi There'
    }

    render(){
            let name = this.state.showName ? this.state.name : 'No Name';
        return (
      <View>
        <Text> Hello World </Text>
        <Text> {this.state.message}</Text>
        <Text>{name}</Text>
        <Text>{this.state.message2}</Text>
      </View>  
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);