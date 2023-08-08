import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Home from './src/screens/Home';
import RootNavigation from './src/navigation/RootNavigation';
import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from './src/components/SplashScreen';


function App() {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    },10000)
  })

  return (
    <>
      {
        load ? (<>
          <SplashScreen />
          </>) : <>
          <NavigationContainer>
          <RootNavigation />
          </NavigationContainer >
          </>
          
        }
    </>
  )
}

export default App;
