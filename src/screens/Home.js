import { StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import Inbox from './Inbox'
import Profile from './Profile'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialBottomTabNavigator();

function Home({navigation}) {
  useEffect( ()=>{
    // const value =async ()=> await AsyncStorage.getItem('token');
    // if(value){
    //   console.log(value)
    //   navigation.navigate("Login")
    // }
  })
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarLabel: route.name,
    })}
    initialRouteName="Inbox"
    activeColor="#ffffff"
    inactiveColor="#f68080"
    barStyle={{ backgroundColor: '#d74545' , shadowRadius:20 }}
    >
      <Tab.Screen 
      name="Inbox" 
      component={Inbox}
      options={{
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
        ),}}
        />

      <Tab.Screen 
      name="Today" 
      component={Inbox}
      options={{
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="calendar" color={color} size={26} />
        ),
      }}/>

      <Tab.Screen 
      name="Upcoming" 
      component={Inbox}
      options={{
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="clock" color={color} size={26} />
        ),
      }}/>

      <Tab.Screen 
      name="Profile" 
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} />
      
    </Tab.Navigator>
  );
}
export default Home

const styles = StyleSheet.create({})