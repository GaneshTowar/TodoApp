import { View, Text,StyleSheet,Image } from 'react-native'
import React, { useEffect } from 'react'
import AddButton from '../components/AddButton'
import { useRoute } from '@react-navigation/native';
import Axios from '../configFiles/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {
  const route = useRoute();

  const username = async ()=> {
    const username = await AsyncStorage.getItem('user')

  }

  const screenName = route.name;
        useEffect(()=>{
          //const username = JSON.stringify(getdata);
          console.log(screenName,username)
          if(screenName==='Inbox'){
            
            Axios.get(`/listData/${username}`).then((response) =>{    // Get INBOX data
                console.log(response.data)
              }).catch((err) => console.log(err));

        }if(screenName==='Upcoming'){

            Axios.get(`/upcoming/${username}`).then((response) =>{   // Get upcoming data
                console.log(response.data)
          }).catch((err)=> console.log(err))                       

        }if(screenName==='Today'){

            Axios.get(`/todays/${username}`).then((response) =>{   // gET todays DATA
                    console.log(response.data)
            }).catch((err)=> console.log(err))

        }
  },[])
  return (
    <View style={styles.screen}>
      <View style={styles.Header}>
          <View></View>
          <Text style={styles.HeaderText}>INBOX</Text>
                <Image
                      style={styles.Profile}
                      source={require('../../assets/ProfilePic.jpeg')}
                  />
      </View>
      <Image
            style={styles.image}
            source={require('../../assets/InboxImg.jpg')}
      />
      <View style={{justifyContent:'center',alignContent:"center",alignSelf:'center',paddingHorizontal:20,}}>
        <View style={{paddingBottom:20}}>
              <Text style={{fontSize:30,textAlign:"center"}}>Your peace of mind is priceless</Text>
        </View>
          <Text style={{textAlign:'center',fontStyle:"italic",fontWeight:"400",fontSize:15}}>Well done, Ganesh! All your team's tasks are organized in the right place.</Text>
      </View>
      <AddButton></AddButton>
      
    </View>
  )
}
const styles = StyleSheet.create({
      screen:{
          height:"100%",
          backgroundColor:"white",
      },
      Header:{
          paddingTop:70,
          flexDirection:"row",
          paddingHorizontal:20,
          justifyContent:'space-between',
          //backgroundColor:"red",
          paddingBottom:70,

      },
      HeaderText:{
          alignSelf:'center',
          fontSize:20,
          //backgroundColor:"green",
      },
      Profile:{
          height:50,
          width:50,
          borderRadius:100,
      },
      image:{
        alignSelf:'center',
      },
      nav:{
          flexDirection:"row",
          backgroundColor:"#DB4C3F",
          justifyContent:"space-around",
          paddingBottom:16,
          
      },
      navComponents:{
          flexDirection:"row",
          justifyContent:"space-around"
      },
      navtext:{
          padding:10,
          paddingHorizontal:12,

      },
      font:{
          fontSize:15,
          color:"white",

      },
      add:{
            alignSelf:"center",
            backgroundColor:"#fb6868",
            borderColor:"#fe3838",
            borderWidth:3,
            position:"relative",
            top:18,
            //borderColor:"black",
            zIndex:1,
            elevation: 3,
            width:40,
            height:40,
            borderRadius:100,
            
      }
      
})

export default Home