
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './src/screens/Intro';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen name="Intro"  options={{headerShown:false}} >{(props)=><Intro {...props}/>}</Stack.Screen>
      <Stack.Screen name="Login"  options={{headerShown:false}} >{(props)=><Login {...props}/>}</Stack.Screen>
      <Stack.Screen name="Register"  options={{headerShown:false}} >{(props)=><Register {...props}/>}</Stack.Screen>
      <Stack.Screen name="Profile" options={{headerShown:false}} >{(props)=><Profile {...props}/>}</Stack.Screen>
      <Stack.Screen name="Home" options={{headerShown:false}} >{(props)=><Home {...props}/>}</Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

