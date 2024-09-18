import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const NewHabitScreen = () => {
  const [habitName, setHabitName] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [selectedDays, setSelectedDays] = useState<Number[]>([]);

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;

    if (type === "set" && selectedDate) {
      setStartDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const toggleDay = (day: Number) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Habit</Text>
      <Text style={styles.label}>Habit Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter habit name"
        value={habitName}
        onChangeText={setHabitName}
      />

      <Text style={styles.label}>Start Date</Text>
      <Pressable
        onPress={() => setShowDatePicker(true)}
        style={styles.dateInput}
      >
        <Text>{startDate.toLocaleDateString()}</Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>
        How many days per week should you complete this habit?
      </Text>
      <View style={styles.daysContainer}>
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <Pressable
            key={day}
            style={[
              styles.dayButton,
              selectedDays.includes(day) && styles.selectedDayButton,
            ]}
            onPress={() => toggleDay(day)}
          >
            <Text style={styles.dayButtonText}>{day}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dateInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    width: 40,
    alignItems: "center",
  },
  selectedDayButton: {
    backgroundColor: "#DECCFF",
    borderColor: "#7e49ff",
  },
  dayButtonText: {
    color: "#000",
  },
});

export default NewHabitScreen;
