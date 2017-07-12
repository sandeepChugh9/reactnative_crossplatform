import React, { Component } from 'react';
import {  Platform, Image as NativeImage} from 'react-native';

export default class Image extends Component {
  render() {
    if(Platform.OS === "android"){
      return  <NativeImage {...this.props}></NativeImage>
    }else{
      if(this.props.tintColor)
        return  <NativeImage {...this.props} style={[this.props.style,{tintColor:this.props.tintColor}]}></NativeImage>
      return  <NativeImage {...this.props}></NativeImage>
    }
  }
}
