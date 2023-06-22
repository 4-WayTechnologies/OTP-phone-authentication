import React, { useState,useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

const OtpVerification = () => {
    const [confirm, setConfirm] = useState(null);
    const [number, setNumber] = useState(null);
    const [user, setUser] = useState(null);

    const [code, setCode] = useState('');
    function onAuthStateChanged(user) {
        setUser(user);
       console.log(user)
      }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log(confirmation)
      setConfirm(confirmation);
    }
  
    async function confirmCode() {
        console.log(confirm.confirm)
      try {
        const result= await confirm.confirm(code);
        console.log(result)
        alert("OTP verified")
        setCode(null)
      } catch (error) {
        alert('Invalid code.');
      }
    }
  
    if (!confirm) {
      return (
        <>
        <TextInput value={number} placeholder="+91-XXXXXXXXXX" onChangeText={text => setNumber(text)} />
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber(number)}
        />
        </>
      );
    }
  
    return (
      <>
        <TextInput value={code} onChangeText={text => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </>
    );
}

export default OtpVerification