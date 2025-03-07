// src/screen/Theme.js
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/themeSlice';
import Header from './Header';

const Theme = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme); // Get the current theme from Redux
  const [selectedTheme, setSelectedTheme] = useState(theme.theme); // Set initial state to the current theme

  const themes = [
    { name: 'White', color: '#FFFFFF', textColor: '#000000' },
    { name: 'Cream White', color: '#FFFBF4', textColor: colors.black },
    { name: 'Black', color: '#000000', textColor: '#FFFFFF' },
  ];

  const handleThemeSelect = (themeName, themeColor, themeText) => {

    setSelectedTheme(themeName); // Update local state
    dispatch(setTheme({ theme: themeName, backgroundColor: themeColor, textColor: themeText })); // Dispatch to Redux
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
     <Header title="Theme" />

      {/* Theme Options */}
      {themes.map((themeOption, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => handleThemeSelect(themeOption.name, themeOption.color, themeOption.textColor)}
        >
          <View style={styles.option}>
            <View style={[styles.colorPreview, { backgroundColor: themeOption.color }]} />
            <Text style={[styles.optionText, { color: theme.textColor }]}>{themeOption.name}</Text>
          </View>
          <Ionicons
            name={selectedTheme === themeOption.name ? 'radio-button-on' : 'radio-button-off'}
            size={24}
            color={selectedTheme === themeOption.name ? colors.wineRed : theme.textColor} // Use theme text color
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 15,
    borderWidth: 1,
    borderColor: colors.wineRed,
  },
  optionText: {
    fontSize: 18,
  },
});