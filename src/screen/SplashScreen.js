import { StyleSheet,Image} from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import {LinearGradient} from 'expo-linear-gradient'
const SplashScreen = () => {
  return (
    <LinearGradient 
    colors={['#FF8C94', '#FF61A6', '#7162F8']} 
    style={styles.container}
  >
      <Image source={require('../assets/conquer.png')} style = {styles.logo} />
    </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.blushPink,
      alignItems: 'center',
    },
   
    logo: {
      width: 300,
      height: 300,
      alignSelf: 'center',
      marginTop: 300
    },
    
   
})