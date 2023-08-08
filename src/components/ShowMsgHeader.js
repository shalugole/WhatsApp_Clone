import { View, Text, Image, TouchableOpacity } from "react-native";
import AD from "react-native-vector-icons/AntDesign"
import MI from "react-native-vector-icons/MaterialIcons"
import I from "react-native-vector-icons/Ionicons"
import E from "react-native-vector-icons/Entypo"
import { useNavigation } from "@react-navigation/native"
import { useLocation } from "@react-navigation/native"
import ShowMsgText from "./ShowMsgText";

const { Dimensions } = require("react-native");


const { width, height } = Dimensions.get('screen')

export default function ShowMsg(props) {

    var  Name= props.route.params.data?.name
    var  image= props.route.params.data?.image
    var navigation = useNavigation();


    var colors = ['#7158e2', '#ff4d4d', '#fdcb6e', '#00b894']

    const handleVideoCall = () => {
        alert("for Video Call")
    }
    const handleCall = () => {
        alert("for Call")
    }
    const handleMenu = () => {
        alert("Tab Menu👍")
    }

    const handleImage = () => {
        alert(
            <View style={{ backgroundColor: 'red' }} >
                <Image source={require('../assets/nobita.png')} />
            </View>
        )
    }

    return (

        <>
            <View style={{ height: height * 0.080, width: width * 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#1F8A70', elevation: 10 }} >
                <View style={{ height: height * 0.1, width: width * 0.73, flexDirection: 'row', alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ height: height * 0.1, width: width * 0.1, justifyContent: 'center', alignItems: 'center', marginLeft: 20,borderRadius:50 }} >
                        <AD name={"arrowleft"} size={20} style={{ color: '#fff' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleImage} style={{ height: height * 0.1, width: width * 0.15, justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={image} style={{ width: width * 0.10, height: height * 0.050, backgroundColor: colors[parseInt(Math.random() * 4)], borderRadius: 70 }} />
                    </TouchableOpacity>
                    <View style={{ height: height * 0.06, width: width * 0.5, justifyContent: 'center', alignItems: 'flex-start', }} >
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff', margin: 5 }} >
                            {Name}
                        </Text>
                    </View>
                </View>

                <View style={{ width: width * 0.3, flexDirection: 'row', justifyContent: 'space-between', marginRight: 25 }} >
                    <TouchableOpacity onPress={handleVideoCall} >
                        <I name={'videocam'} size={25} style={{ color: '#fff' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCall} >
                        <I name={'call'} size={25} style={{ color: '#fff' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleMenu} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <E name={'dots-three-vertical'} style={{ color: '#fff', fontSize: 25 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <ShowMsgText />
        </>

    )
}