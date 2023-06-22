import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button,Dimensions } from 'react-native'
import { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const SignInWithEmailPassword = () => {
    // state = { email: '', password: '', errorMessage: null }
    const[email,setEmail]=useState("qwerty@gmail.com")
    const[password,setPassword]=useState("Qwerty@1234")
    const [isLoggedIn,setLoggedIn]=useState(false)
    const reference = firebase
    .app()
    .database('https://auth-825ae-default-rtdb.firebaseio.com')
    .ref('/users/123')


  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) =>setLoggedIn(true))
      .catch(error =>console.log(error))
  }
  return (
    <View >

      
      
      
            <Text style={{fontSize:18,alignSelf:"center",marginTop:20}}>Login</Text>

            

            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"

              onChangeText={email => setEmail( email)}
              value={email}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={password => setPassword( password)}
              value={password}
            />
            <Button title="Login" onPress={handleLogin} />
            {}


           {isLoggedIn && <Text style={{fontSize:18,alignSelf:"center",marginTop:20}}>The User is logged In</Text>}
          </View>
  )
}

export default SignInWithEmailPassword


const styles=StyleSheet.create({
    textInput:{
        borderWidth:1,
        width:Dimensions.get("window").width-30,
        marginHorizontal:15,
        marginVertical:10
    }
})