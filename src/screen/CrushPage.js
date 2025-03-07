import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
const CrushPage = () => {
  return (
    <View style={styles.container}>
      <Text>CrushPage</Text>
    </View>
  )
}

export default CrushPage

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
})