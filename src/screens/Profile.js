import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View,Text,Image,StyleSheet } from 'react-native'


function Profile({navigation}) {
  return (
    <View style={styles.screen}>
        <View style={styles.title}>
          <View style={{alignSelf:"center"}}>  
                <Text style={styles.titleText}>Profile</Text>
          </View>    
        </View>
        <Image
          style={styles.Profile}
          source={require('../../assets/ProfilePic.jpeg')}
        />
        <View style={styles.Options}>
            <View style={styles.option}>
              <View><Text>Ic    </Text></View>
              <Text style={styles.optionText}>Change Account Name</Text>
            </View>
            <View style={styles.option}>
              <View><Text>Ic   </Text></View>
              <Text style={styles.optionText}>Theme Color</Text>
            </View>
            <View style={styles.option}>
              <View><Text>Ic   </Text></View>
              <Text style={styles.optionText}>About US</Text>
            </View>
            <View style={styles.option}>
              <View><Text>Ic   </Text></View>
              <Text style={styles.optionText}>FAQ</Text>
            </View>
            <View style={styles.option}>
              <View><Text>Ic   </Text></View>
              <Text style={styles.optionText}>Help & Feedback</Text>
            </View>
            <View style={styles.option}>
              <View><Text>Ic   </Text></View>
              <Text style={styles.optionText}>Support US</Text>
            </View>
            <View style={styles.option}>
              <View><Text>Ic   </Text></View>
              <Text style={styles.optionText} onPress={()=>{
                navigation.navigate("Login")
                AsyncStorage.removeItem('user')
                AsyncStorage.removeItem('auth')
                const user = async ()=> await AsyncStorage.getItem('user')
                console.log(user)
                }}>Log Out</Text>
            </View>
        </View>

        


    </View>
  )
}
const styles = StyleSheet.create({
        screen:{
            height:"100%",
            backgroundColor:"white",
        },
        title:{
              paddingTop:60,
              paddingBottom:20,

        },
        titleText:{
              fontSize:30,
        },
        Profile:{
          height:80,
          width:80,
          borderRadius:100,
          alignSelf:'center',
      },
      Options:{
          
          marginTop:70,
          marginHorizontal:30,
          //backgroundColor:"pink",

      },
      option:{
        flexDirection:"row",
        paddingVertical:10,
      },
      optionText:{
          fontSize:18,
          

      },
  })

export default Profile