import React from 'react'
import { View, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')

function SplashScreen() {
    return (
        <View style={{ width: width * 0.99, height: height * 1, justifyContent: "center", alignContent: "center"}}>
            <View style={{alignItems:'center',width:width*0.99,height:height*0.2,justifyContent:'center',bottom:20}} >

                <Image source={require('../assets/whatsapplogo.png')} style={{ width: width * 0.23, height: height * 0.111, margin: 5 }} />
            </View>
            <View style={{margin:10,alignItems:'center',top:200}} >
                <Text style={{fontSize:25,color:'#777'}} >
                    from
                </Text>
            </View>
            <View style={{alignItems:'center',top:200, flexDirection:"row", justifyContent:"center"}} >
                <Image source={require('../assets/meta1.png')} style={{ width: width * 0.12, height: height * 0.05,margin:2}} />
                <Text style={{fontSize:30,color:'green',fontWeight:'bold', marginLeft:5}} >
                        META 
                </Text>
            </View>
        </View>

    )
}

export default SplashScreen