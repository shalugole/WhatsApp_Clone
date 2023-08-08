import React from "react";
import { Dimensions } from "react-native";
import Home from "../screens/Home"; 
import ShowMsg from "../components/ShowMsgHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"

const Stack=createNativeStackNavigator();

const {width,height}=Dimensions.get('screen')

export default function RootNavigation(){   


    return(
        // <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}  />
                <Stack.Screen name="ShowMsg" component={ShowMsg} options={{headerShown:false}}  />                
            </Stack.Navigator>
        // </NavigationContainer>
    )
}