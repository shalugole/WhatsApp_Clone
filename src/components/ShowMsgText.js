import { View, Text,TextInput,TouchableOpacity, Image } from 'react-native';
import F from "react-native-vector-icons/Fontisto"
import FA from "react-native-vector-icons/FontAwesome6"
import { useState } from 'react';
const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('screen')

export default function ShowMsgText() {

   const handleSmile=()=>{
    alert("Emoji 😘")
   }
   const handleCamera=()=>{
    alert("Send Image")
   }
   const handleLink=()=>{
    alert("Add Document")
   }
   const handleMic=()=>{
    alert("Send Voice Message")
   }

    return (
        <View style={{flexDirection:'column', height:height}} >
            <View style={{ height: height * 0.90, width: width * 1 }} >
               <Image source={require('../assets/chat_theme.jpg')} style={{width:width*1,height:height*0.90}} />
            </View>

            <View style={{height:height*0.1,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row', position:"absolute", zIndex:2,bottom:80, margin:5 }} >
                <View style={{backgroundColor:'#fff',height:height*0.06,width:width*0.84,borderRadius:30,justifyContent:'space-between',overflow:'hidden',flexDirection:'row' }} >
                    <TouchableOpacity onPress={handleSmile} style={{width:width*0.5,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',left:3 }} >
                        <F  name={'smiley'} style={{fontSize:20,color:'#777',margin:5}} />
                        <TextInput style={{color:'#777',margin:5,fontSize:20, width:width*0.5 }} placeholder='Message' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:width*0.21,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',right:3 }} >
                        <FA onPress={handleLink} name={'link'} style={{fontSize:22,color:'#777',margin:5}} />
                        <F onPress={handleCamera} name={'camera'} style={{fontSize:22,color:'#777',margin:5}} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleMic} style={{margin:5,backgroundColor:'#1F8A70',height: height * 0.062, width: width * 0.13,overflow:'hidden',borderRadius:30,justifyContent:'center',alignItems:'center' }} >
                        <FA name={'microphone'} style={{fontSize:22,color:'#fff',margin:5}} />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
