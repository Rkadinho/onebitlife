import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/start";
import AppExplanation from '../pages/appExplanation'

const Stack = createNativeStackNavigator();

export default function AllPages() {

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Start' component={Start}/>
        <Stack.Screen name='AppExplanation' component={AppExplanation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}