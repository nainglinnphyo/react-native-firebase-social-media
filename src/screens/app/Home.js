import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setLoggout } from '../../redux/features/authSlice'
import { auth } from '../../../firebase'
import { signOut } from 'firebase/auth'

const Home = () => {
const navigation = useNavigation()
const dispatch = useDispatch()
const logout=()=>{
  signOut(auth).then(() => {
    dispatch(setLoggout())
  }).catch((error) => {
    // An error happened.
  });
 
}
  return (
    <View>
      <Text>Home</Text>
      <Button title='logout' onPress={logout}/>
      <Button title='go to details' onPress={()=> navigation.navigate('Details')}/>
    </View>
  )
}

export default Home