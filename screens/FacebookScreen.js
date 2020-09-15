import React from 'react';
import { Text, View, Image } from 'react-native';

export default class FacebookPageScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source = {require("../assets/like.PNG")} style = {{width: 60, height: 60}} />
          <Text>Welcome To Facebook</Text>
        </View>
      );
    }
  }