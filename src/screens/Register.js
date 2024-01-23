import { View, Text,StyleSheet,TextInput,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import {signUpValidationSchema} from '../configFiles/FormSchema'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
  const onPress = () => navigation.navigate('Login');

  const storeData = async (auth,username) => {
    try {
      await AsyncStorage.setItem('auth', auth)
      await AsyncStorage.setItem('user',username)
      const user = await AsyncStorage.getItem('user')
      console.log(user)
    } catch (e) {
        console.log(e)
    }
  }


  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <View style={styles.imageV}>
                <Image
                style={styles.image}
                source={require('../../assets/RegisterImage.jpg')}
            />
        </View>
        <View style={styles.LoginTitle}>
            <Text style={styles.LoginText}>Register</Text>
        </View>
        <View style={styles.mainInput}>
            <View>
            <Formik
                initialValues={{ email: '', password: '' ,Confirmpassword:''}}
                onSubmit={(value, { resetForm }) => {
                    axios.post('https://4637-103-241-82-81.ngrok-free.app/register',{
                        "name":value.email,
                        "password":value.password,    
                        }
                        ).catch((err) => {
                            console.log("error",err)
                        })
                        .then((response)=>{
                            console.log(response.data)
                            storeData(response.data.auth, response.data.username)
                            navigation.navigate("Home")
                        })
                  console.log("hi")
                  resetForm(); 
                }}
                validationSchema={signUpValidationSchema}
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
                <Text style={styles.InputText}>Confirm Password</Text>
                <TextInput
                            style={styles.input}
                            name="Confirmpassword"
                            onChangeText={handleChange('Confirmpassword')}
                            onBlur={handleBlur('Confirmpassword')}
                            value={values.Confirmpassword}
                            placeholder="Confirm Password"
                            secureTextEntry
                />
                 {errors.Confirmpassword &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.Confirmpassword}</Text>
       }
                <View style={styles.LoginButton}>
                <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                            disabled={!isValid}
                            >
                    <Text style={styles.LoginButtonText}>Register</Text>
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


export default Register