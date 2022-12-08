import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen1 from "./src/Screens/OnboardingScreen1";
import OnboardingScreen2 from "./src/Screens/OnboardingScreen2";
import Login from "./src/Screens/Login";
import Signup from "./src/Screens/Signup";
import HomePage from "./src/Screens/HomePage";
import SeeAll from "./src/Screens/SeeAll";
import BottomStack from "./src/Routes/BottomNav";
import VegetableScreen from "./src/Screens/CategoryOpened/VegetableScreen";
import FruitsScreen from "./src/Screens/CategoryOpened/FruitsScreen";
import MeatScreen from "./src/Screens/CategoryOpened/MeatScreen";
import SeafoodScreen from "./src/Screens/CategoryOpened/SeafoodScreen";
import DetailedView from "./src/Screens/CategoryOpened/DetailedView";



const App = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        
            <Stack.Navigator>
                <Stack.Screen name="OnboardingScreen1"
                component={OnboardingScreen1} options={{
                    headerShown:false
                }}/>
                <Stack.Screen name="OnboardingScreen2"
                component={OnboardingScreen2}options={{
                    headerShown:false
                }}/>
                <Stack.Screen name="Login"
                component={Login} options={{
                    headerShown:false
                }}/>
                 <Stack.Screen name="HomePage"
                component={HomePage} options={{
                    headerShown:false
                }}/>
                <Stack.Screen
                name="Signup"
                component={Signup}  options={{
                    headerShown:false
                }}/>
              
                <Stack.Screen
                name="SeeAll"
                component={SeeAll}  options={{
                    headerShown:false
                    
                }}/>
                 <Stack.Screen
                name="BottomStack"
                component={BottomStack}  options={{
                    headerShown:false
                    
                }}/>
                 <Stack.Screen
                name="FruitsScreen"
                component={FruitsScreen}  options={{
                    headerShown:false
                    
                }}/>
                 <Stack.Screen
                name="VegetableScreen"
                component={VegetableScreen}  options={{
                    headerShown:false
                    
                }}/>
                 <Stack.Screen
                name="MeatScreen"
                component={MeatScreen}  options={{
                    headerShown:false
                    
                }}/>
                 <Stack.Screen
                name="SeafoodScreen"
                component={SeafoodScreen}  options={{
                    headerShown:false
                    
                }}/>
                <Stack.Screen
                name="DetailedView"
                component={DetailedView}  options={{
                    headerShown:false
                    
                }}/>
            </Stack.Navigator>
     
    )
}
export default App