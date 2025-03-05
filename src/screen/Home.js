import React from 'react'
import { StyleSheet, Text, View,Image,FlatList,ScrollView,ImageBackground,TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'
import * as Progress from 'react-native-progress';
import { users,events } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Home = () => {
  const today = new Date().getDate();
  const totalDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  const progress = today / totalDays;
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);
  const image = require('../assets/test2.jpg');
  return (
    <ScrollView style={[styles.scrollViewContainer,{backgroundColor:theme.backgroundColor}]}>
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[styles.welcomeText,{color:theme.textColor}]}>Hi, Alex! Ready to {'\n'}conquer today?</Text>
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.profileImage}/>
        </View>
      </View>

      <View style={styles.timeline}>
        <Text style={styles.timelineText}>Check out your timeline or add a new crush!</Text>
      </View>

      <View style={styles.datingProcesscontainer}>
        <Text style={styles.datingtext}>Monthly Dating Progress</Text>
        <Text style={styles.belowdatingtext}>{totalDays - today} Days to Your Monthly Dating Wrapped!</Text>

        <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{today} Days</Text>
            <Progress.Bar 
            progress={progress} 
            width={250} 
            height={10} 
            color={colors.white} 
            borderRadius={5} 
            backgroundColor={colors.lightBrown}
          />
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.statBox, { backgroundColor: colors.peach }]}>
            <View style={styles.statlabelcontainer}>
            <Text style={styles.statLabel}>Crushes</Text>
            </View>
            <View style={styles.statNumberContainer}>
            <Text style={[styles.statNumber,{color: colors.wineRed}]}>24</Text>
            </View>
          </View>
          <View style={[styles.statBox, { backgroundColor: colors.lightPurple }]}>
            <View style = {styles.statlabelcontainer}>
            <Text style={styles.statLabel}>Friend</Text>
            </View>
            <View style={styles.statNumberContainer}>
            <Text style={[styles.statNumber,{color: colors.purple}]}>04</Text>
            </View>
          </View>
          <View style={[styles.statBox, { backgroundColor: colors.babyPink}]}>
            <View style={styles.statlabelcontainer}>
            <Text style={styles.statLabel}>Worst</Text>
            </View>
            <View style={styles.statNumberContainer}>
            <Text style={[styles.statNumber,{color: colors.wineRed}]}>24</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style= {[styles.statusText,{color:theme.textColor}]}>Status</Text>
      <FlatList
        data={users}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.statusWrapper}>
            <View style={[styles.imageWrapper, item.isActive && styles.activeBorder]}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={[styles.userName,{color:theme.textColor}]}>{item.name}</Text>
          </View>
        )}
      />
      <View style={styles.eventStructureTextContainer}>
     <Text style={[styles.eventStructureText,{color:theme.textColor}]}>Events Structure</Text>
     <Text style={styles.seeAllText} onPress={()=>navigation.navigate('EventsPage')}>See All</Text>
     </View>
     <FlatList
          data={events}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ImageBackground source={item.image} style={styles.eventCard} imageStyle={{ borderRadius: 12}}>
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
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: {
    flex: 1, 
    fontWeight: '900',
    fontSize: 20,
  },
  profilePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeline: {
    marginTop: 10,
  },
  timelineText: {
    fontSize: 14,
    color: colors.graytext,
    fontWeight: '600',
  },

  datingProcesscontainer: {
    padding: 20,
    width: '100%',
    height: 'auto',  
    borderRadius: 20,
    backgroundColor: colors.wineRed,
    marginTop: 20,
  },
  datingtext: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  belowdatingtext: {
    color: colors.lightwhite,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },

  progressContainer: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: colors.lightBrown,
    borderRadius: 8,
    justifyContent: 'center',
  },

  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 5,
  },
 
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statBox: {
    width: '30%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  statlabelcontainer: {
    width: 72,
    height: 24,
    borderRadius: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.wineRed,
  },
  statNumberContainer:{
    width: 47,
    height: 28,
    backgroundColor: colors.white, 
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusText: {
    color: colors.darkBlack,
    fontSize: 18,
    fontWeight: '900',
    marginTop: 20,
  },

  statusWrapper: {
    marginTop: 20,
    alignItems: 'center',
    marginRight: 30,
  },
  imageWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBorder: {
    borderWidth: 3,
    borderColor: colors.blushPink,
    padding: 3,
    borderRadius: 40,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  profileImage:{
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  userName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  eventStructureTextContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventStructureText:{
    color: colors.darkBlack,
    fontSize: 18,
    fontWeight: '900',
    marginTop: 20,  
  },
  seeAllText:{
    color: colors.wineRed,
    fontSize: 14,
    fontWeight: '700',
    marginTop : 20,

  },
  eventCard: {
    width: 'auto',
    height: 150,
    marginTop: 20,
    marginRight: 15,
    justifyContent: 'center',
    padding: 10,
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
});
