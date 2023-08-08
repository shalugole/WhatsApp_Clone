import { View,Text } from "react-native"
import AppHeader from "../components/AppHeader"
import Chats from "../components/Chats"
import { NavigationContainer, ThemeProvider } from "@react-navigation/native"
import RootNavigation from "../navigation/RootNavigation"

export default function Home(){ 

    return( 
    
         <View> 
            <AppHeader />
            <Chats/>
         </View>

        // <NavigationContainer>
        //     <RootNavigation />
        // </NavigationContainer>
    )
}