import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useAppDispatch } from "@/context/store";
import { deleteHabit, editHabit } from "@/context/habitSlice"; // Redux actions
import Axios from "@/constants/Axios";

const NewHabitScreen = () => {
  const [habitName, setHabitName] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const { id }: { id: string } = useLocalSearchParams();

  const dispatch = useAppDispatch(); // Redux dispatch

  const toggleDay = (day: string) => {
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

  const confirmDelete = () => {
    Alert.alert(
      "Delete Habit?",
      `Would you like to delete ${habitName} from your Habit list?`,
      [
        {
          text: "No",
          onPress: () => {
            console.log("User pressed No");
          },
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("User pressed yes");
            handleDelete();
            router.navigate("/(Home)");
          },
        },
      ]
    );
  };

  const handleDelete = async () => {
    try {
      const response = await Axios.delete(`/habits/removehabit/${id}`);
      if (response.status == 200) {
        dispatch(deleteHabit(id));
      }
    } catch (error: any) {
      console.error("Error occurred while trying to delete habit: \n", error);
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
        {["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"].map((day) => (
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

      <TouchableOpacity style={styles.deleteBtn} onPress={confirmDelete}>
        <Text style={styles.buttonText}>Delete Habit</Text>
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
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: 45,
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
  deleteBtn: {
    marginTop: 15,
    backgroundColor: "#f53649",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default NewHabitScreen;
