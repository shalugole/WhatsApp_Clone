import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import F from "react-native-vector-icons/Feather"
import E from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"

const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('screen')

export default function AppHeader() {

    const handleSearch=()=>{
        alert("for Searching")
       }
       const handleCamera=()=>{
        alert("for Clicking image")
       }
       const handleMenu=()=>{
        alert("Tab Menu👍")
       }


    return (
        <View>
            <View style={{ backgroundColor: 'pink', height: height * 0.15, elevation: 10 }} >

                <View style={{ height: height * 0.08, flexDirection: 'row', backgroundColor: '#1F8A70' }} >
                    <View style={{ width: width * 0.7, height: height * 0.080, alignItems: 'flex-start', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 10, color: '#fff' }} >WhatsApp</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: width * 0.3, height: height * 0.080, alignItems: 'center', justifyContent: 'space-between' }} >
                        <TouchableOpacity onPress={handleCamera} >
                            <F name={'camera'} style={{ color: '#fff', fontSize: 25 }} />
                        </TouchableOpacity >
                        <TouchableOpacity onPress={handleSearch}>
                            <F name={'search'} style={{ color: '#fff', fontSize: 25 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleMenu}>
                            <E name={'dots-three-vertical'} style={{ color: '#fff', fontSize: 25 }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View View style={{ height: height * 0.080, flexDirection: 'row', backgroundColor: '#1F8A70' }} >

                        <View style={{ width: width * 0.1, height: height * 0.050, alignItems: 'center', justifyContent: 'center', marginLeft:10 }} >
                            <Fontisto name={'persons'} style={{ color: '#fff', fontSize: 25, top: 10 }} />
                        </View>

                        <View style={{ flexDirection: 'row', width: width * 0.9, height: height * 0.050, alignItems: 'center', justifyContent: 'space-evenly' }} >
                            
                            <TouchableOpacity style={{ width: width * 0.25, height: height * 0.05, alignItems: 'center', justifyContent: 'center', top: 10 }} >
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} >Chats</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: width * 0.25, height: height * 0.05, alignItems: 'center', justifyContent: 'center', top: 10 }} >
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} >Status</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: width * 0.25, height: height * 0.05, alignItems: 'center', justifyContent: 'center', top: 10 }} >
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} >Calls</Text>
                            </TouchableOpacity>

                        </View>


                </View>



            </View>
        </View >
    )
}