import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FacebookPageScreen from "./screens/FacebookScreen";
import InstagramPageScreen from "./screens/InstagramScreen";


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FacebookPageScreen },
  Instagram: { screen: InstagramPageScreen }
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: () =>{
      const routeName = navigation.state.routeName;
      if(routeName === "Facebook"){
        return(
          <Image source = {require("./assets/facebook.PNG")} style = {{width: 40, height: 40}} />
        )
      }
      else if(routeName === "Instagram"){
        return(
          <Image source = {require("../assets/instagram.PNG")} style = {{width: 40, height: 40}} />
        )
      }
    }
  })
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
