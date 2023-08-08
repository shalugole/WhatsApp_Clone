import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { useState } from "react";

const { Dimensions } = require("react-native");
const { width, height } = Dimensions.get('screen')

export default function Chats() {

    var navigation = useNavigation();



    var colors = ['#7158e2', '#ff4d4d', '#fdcb6e', '#00b894']

    var data = [
        
        { id: 1, image: require('../assets/suneo.jpg'), name: 'Suneo😎', msg: 'I am so cool nd u fool.', time: '8:45 AM' },
        { id: 2, image: require('../assets/nobita.png'), name: 'Nobita😀', msg: 'How can i do this.', time: '11:45 PM' },
        { id: 3, image: require('../assets/sijuka.png'), name: 'Shizuka😘', msg: 'Hiii...', time: '12:11 AM' },
        { id: 4, image: require('../assets/doraemon.png'), name: 'Doraemon😁', msg: 'How are you.', time: '1:04 PM' },
        { id: 5, image: require('../assets/dekisugi.webp'), name: 'Dekisugi🤗', msg: 'I am fine nd u.', time: '3:50 PM' },
        { id: 6, image: require('../assets/giyan.png'), name: 'Giyan😡', msg: 'As you know that.', time: '10:45 AM' },
        { id: 7, image: require('../assets/suneo.jpg'), name: 'Suneo😎', msg: 'I am so cool nd u fool.', time: '8:45 AM' },
        { id: 8, image: require('../assets/suneo.jpg'), name: 'Suneo😎', msg: 'I am so cool nd u fool.', time: '8:45 AM' },
        { id: 9, image: require('../assets/suneo.jpg'), name: 'Suneo😎', msg: 'I am so cool nd u fool.', time: '8:45 AM' },
    ]
    const [image, setImage] = useState(data)

    const showData = () => {
        return data.map((item) => {
            return (

                <View style={{ backgroundColor: '#fff', flexDirection: 'row' }} >

                    <TouchableOpacity onPress={() => navigation.navigate('ShowMsg', { data: item })} style={{ height: height * 0.11, width: width * 0.99, flexDirection: 'row', justifyContent: 'flex-start' }} >
                        <View style={{ width: width * 0.2, height: height * 0.11, overflow: 'hidden', left: 10, justifyContent: 'center', alignItems: 'center' }} >
                            <Image source={item.image} style={{ width: width * 0.18, height: height * 0.09, backgroundColor: colors[parseInt(Math.random() * 4)], borderRadius: 70 }} />
                        </View>
                        <View style={{ left: 25, width: width * 0.72, height: height * 0.11, justifyContent: 'center', flexDirection: 'column' }} >
                            <View style={{ height: height * 0.04, flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }} >{item.name} </Text>
                                <Text style={{ color: '#000', fontSize: 14, right: 4 }} >
                                    {item.time}
                                </Text>
                            </View>
                            <View style={{ top: 5 }} >
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#777' }} >{item.msg} </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            )
        })
    }

    return (

        <ScrollView style={{ flexDirection: 'column' }} scrollEnabled={true} showsHorizontalScrollIndicator={false} >
            <View style={{ height: height }}>

                {showData()}
            </View>

        </ScrollView>
    )
}
