import React, { Component } from 'react';
import { Platform, TouchableNativeFeedback as NativeFeedback, TouchableHighlight} from 'react-native';

export default class TouchableNativeFeedback extends Component {
  render() {
    if(Platform.OS === "android"){
      if(this.props.background)
        return  <NativeFeedback background={NativeFeedback.SelectableBackground()} onPress={this.props.onPress}>{this.props.children}</NativeFeedback>
      return  <NativeFeedback onPress={this.props.onPress}>{this.props.children}</NativeFeedback>

    }else{
      if(this.props.background)
        return <TouchableHighlight underlayColor="#DDD" onPress={this.props.onPress}>{this.props.children}</TouchableHighlight>
      return <TouchableHighlight onPress={this.props.onPress}>{this.props.children}</TouchableHighlight>
    }
}
}
