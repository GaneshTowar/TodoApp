import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'


const Intro = ({navigation}) => {
    const onPress = () => navigation.navigate('Login');
  return (
    <View style={styles.screen} >
        <View style={styles.imageV}>
                <Image
                style={styles.image}
                source={require('../../assets/into_Img.webp')}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>Organize your work and life</Text>
            <Text style={styles.text2}>Become focused, organized, and calm with Todoist.The world's #1 task manager and to-do list app.</Text>
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.ButtonInnerContainer}>
            <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                    >
                    <Text styles={styles.button}>GET STARTED</Text>
            </TouchableOpacity>
                
            </View>
            
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        height:"100%",
    },
    imageV:{
        marginTop:40,
        
        
    
    },
    image:{
        resizeMode:"contain",
        height:350,
        width:"auto",
        paddingHorizontal:40,
        borderRadius:50,
        
    },

    textContainer:{
        marginHorizontal:18,
        marginTop:35,
        //backgroundColor:"blue",

    },
    text1:{
        textAlign:'center',
        fontSize:35,
        letterSpacing:2,
        //fontFamily:"KoPub Batang",
    },
    text2:{
        marginTop:20,
        textAlign:'center',
        fontSize:15,
        letterSpacing:2,
        fontWeight:200,
        

    },

    buttonContainer:{
        marginHorizontal:15,
        marginTop:35,
        alignItems:"center",
        
        
    },
    ButtonInnerContainer:{
        backgroundColor:"#E54431",
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        
    },
    button:{
        textAlign:'center',
        fontSize:30,
        fontWeight:400,
        color:'white',
        
        
    }
})

export default Intro

