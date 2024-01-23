import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddButton = ({navigation}) => {
  return (
    <><View style={{ flex: 1, justifyContent: 'flex-end' ,zIndex:100}}>
          <View style={styles.add}>
            <MaterialCommunityIcons name="plus"  size={36} style={styles.AddIcon} />
          </View>
      </View>
          </>
  )
}

export default AddButton

const styles = StyleSheet.create({ 
            add:{
                alignSelf:"center",
                backgroundColor:"#ffffff",
                borderColor:"#d45050",
                borderWidth:1,
                position:"relative",
                top:25,
                right:10,
                zIndex:1,
                elevation: 3,
                width:45,
                height:45,
                borderRadius:100,
                shadowColor:"black",
                
          },
          AddIcon:{
            alignSelf:'center',
            color:"#eb8e8e",
            
          }
})