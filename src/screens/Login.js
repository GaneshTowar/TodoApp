import { View, Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert} from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginValidationSchema} from '../configFiles/FormSchema';
import axios from '../configFiles/Axios';

const Login = ({navigation}) => { 
  const onPress = () => navigation.navigate('Register')


  const storeData = async (auth,username) => {
    try {
      await AsyncStorage.setItem("auth", auth)
      await AsyncStorage.setItem("user",username)
      const user = await AsyncStorage.getItem('user')
      console.log("user",user)
    } catch (e) { 
        console.log("local stoarage saving error")
      // saving error
    }
  }


  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <View style={styles.imageV}>
                <Image
                style={styles.image}
                source={require('../../assets/login.png')}
            />
        </View>
        <View style={styles.LoginTitle}>
            <Text style={styles.LoginText}>Login</Text>
        </View>
        <View style={styles.mainInput}>
            <View>
            <Formik
            initialValues={{ email: '', password: '' }}
                    onSubmit={(value, { resetForm }) => {
                        axios.post('/login',{
                        "name":value.email,
                        "password":value.password,    
                        }
                        ).catch((err) => {
                            console.log("error",err)
                            console.log("Wrong creds try again")
                        })
                        .then((response)=>{
                                console.log(response)
                                storeData(response.data.auth, response.data.getMens.name)
                                console.log("Logged in ")
                                navigation.navigate("Home")

                        })

                            
                        resetForm();                                                         // reset the form
                    
                    }}
            validationSchema={loginValidationSchema}
          >
             {({ handleChange, handleBlur, handleSubmit, values,errors,isValid }) => (
              <>
                        <Text style={styles.InputText}>Username</Text>
                        <TextInput
                            style={styles.input}
                            name="email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Enter Username"
                            
                        />
                               {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
                        <Text style={styles.InputText}>Password</Text>
                        <TextInput
                            style={styles.input}
                            name="password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="Enter Password"
                            secureTextEntry
                        />
                               {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
                        <View style={styles.LoginButton}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleSubmit}
                                disabled={!isValid}
                                >
                                <Text style={styles.LoginButtonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                </>
            )}
                </Formik>
            </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                    >
                    <Text style={styles.registerText}>Dont have an account? Register</Text>
                </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    screen:{
        
    },
    imageV:{
        marginTop:40,   
        //backgroundColor:"red",
    },
    image:{
        resizeMode:"contain",
        height:300,
        width:"auto",
        paddingHorizontal:40,
        borderRadius:100,
    },
    mainInput:{
        //backgroundColor:'red',
        width:300,
        marginHorizontal:50,
        paddingTop:5,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
    },
    LoginTitle:{
        justifyContent:'center',
        alignSelf:'center',
        //backgroundColor:"blue",
    },
    LoginText:{
        //backgroundColor:"red",
        fontSize:30,
        textAlign:'center',

    },
    LoginButton:{
        backgroundColor:"#DB4C3F",
        borderRadius:40,
        width:"100%",
        paddingVertical:7,
        alignSelf:'center',
    },
    LoginButtonText:{
        alignSelf:'center',
        fontSize:20,
        color:"white",
    },
    InputText:{
        fontSize:15,
    },
    input:{
        paddingVertical:10,
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
    },
    registerText:{
        paddingTop:10,
        alignSelf:'center',
        fontStyle:'italic',
        fontSize:12,
        //fontWeight: "400",

    },
    button:{
        textAlign:'center',
        fontSize:30,
        fontWeight:400,
        color:'white',
        
        
    }

})


export default Login