import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const token = async ()=> {
    const auth = await AsyncStorage.getItem('auth')
    console.log(auth)
  }

console.log(token)
const Axios = axios.create({
    baseURL: 'https://b18e-103-241-82-81.ngrok-free.app',
    headers: {
        authorization: `bearer ${token}`,
      }
});


export default Axios;