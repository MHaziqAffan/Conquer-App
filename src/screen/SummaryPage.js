import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'

const SummaryPage = () => {
  return (
    <View style={styles.container}>
      <Text>SummaryPage</Text>
    </View>
  )
}

export default SummaryPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
})