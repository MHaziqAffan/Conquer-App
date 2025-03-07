import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Header from "./Header";


const AddEvent = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSubmit = () => {
    const eventData = {
      title,
      description,
      date: formatDate(date),
      time: formatTime(time),
    };
    console.log("Event Data:", eventData);
    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.backgroundColor },
      ]}
    >
      <Header title="Add Event" />
      <View style={styles.formContainer}>
        <Text style={[styles.label, { color: theme.textColor }]}>Title</Text>
        <TextInput  
          style={styles.input}
          placeholder="Enter Title Here..."
          value={title}
          onChangeText={setTitle}
        />

        <Text style={[styles.label, { color: theme.textColor }]}>Date</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.dateTimeButton}
        >
          <Text style={styles.dateTimeText}>{formatDate(date)}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}

        <Text style={[styles.label, { color: theme.textColor }]}>Time</Text>
        <TouchableOpacity
          onPress={() => setShowTimePicker(true)}
          style={styles.dateTimeButton}
        >
          <Text style={styles.dateTimeText}>{formatTime(time)}</Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={onTimeChange}
          />
        )}

        <Text style={[styles.label, { color: theme.textColor }]}>
          Description
        </Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Enter event description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Add Event</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 0,
    zIndex: 1,
  },
  eventTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  eventText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: colors.black,
  },
  formContainer: {
    backgroundColor: colors.mintGreen,
    borderRadius: 12,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 60,
    textAlignVertical: "top",
  },
  dateTimeButton: {
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  dateTimeText: {
    fontSize: 16,
    color: colors.black,
  },
  submitButton: {
    marginTop: "auto",
    backgroundColor: colors.wineRed,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default AddEvent;
