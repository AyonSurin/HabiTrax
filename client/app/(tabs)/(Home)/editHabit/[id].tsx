import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useAppDispatch } from "@/context/store";
import { editHabit } from "@/context/habitSlice"; // Redux actions
import Axios from "@/constants/Axios";

const NewHabitScreen = () => {
  const [habitName, setHabitName] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [description, setDescription] = useState<string>("");
  const { id } = useLocalSearchParams();

  const dispatch = useAppDispatch(); // Redux dispatch

  const toggleDay = (day: number) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await Axios.get(`/habits/getHabit/${id}`);
        console.log(response.data);
        setHabitName(response.data.name);
        setDescription(response.data.description);
        setSelectedDays(response.data.target_days || []); // Ensure it defaults to an empty array if undefined
      } catch (error: any) {
        console.error("Error occurred:", error.message);
      }
    };

    getDetails();
  }, [id]); // Adding id to dependency array

  const handleSubmit = async () => {
    try {
      const response = await Axios.patch(`/habits/editHabit/${id}`, {
        name: habitName,
        description,
        target_days: selectedDays,
      });

      const editedHabit = response.data.habit;
      dispatch(editHabit(editedHabit));
      console.log("Edited habit successfully");

      router.navigate("/(Home)");
    } catch (error: any) {
      console.error("Error occurred:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Habit</Text>
      <Text style={styles.label}>Habit Name</Text>
      <TextInput
        style={styles.input}
        value={habitName}
        placeholder="Enter habit name"
        onChangeText={setHabitName}
      />
      <Text style={styles.label}>Habit Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        placeholder="Enter habit Description"
        onChangeText={setDescription}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default NewHabitScreen;
