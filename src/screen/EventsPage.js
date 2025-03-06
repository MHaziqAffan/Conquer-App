import React from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { events } from '../constants';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
const EventsPage = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);

  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton,{color:theme.textColor}]}>
          <Ionicons name="arrow-back" size={24} color={theme.textColor} />
        </TouchableOpacity>
        <View style={styles.eventTextContainer}>
          <Text style={[styles.eventText,{color:theme.textColor}]}>Events</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddEvent')}
          style={styles.addButton}
        >
          <View style={styles.circle}>
            <Ionicons name="add" size={24} color={colors.white} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />
      <FlatList
        data={events}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ImageBackground source={item.image} style={styles.eventCard} imageStyle={{ borderRadius: 12 }}>
            <View style={styles.eventContent}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="calendar-outline" size={18} color="#fff" style={{ marginRight: 5 }} />
                <Text style={styles.eventDate}>{item.date}</Text>
              </View>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  eventTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  eventText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  eventCard: {
    width: 'auto',
    marginTop: 15,
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  eventContent: {
    padding: 10,
    borderRadius: 10,
  },
  eventDate: {
    color: colors.lightwhite,
    fontSize: 12,
    fontWeight: '600',
  },
  eventTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  eventDescription: {
    color: colors.lightwhite,
    fontSize: 12,
    marginTop: 3,
  },
  separator: {
    height: 1,
    backgroundColor: colors.softGray,
    marginBottom: 20,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: colors.wineRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventsPage;