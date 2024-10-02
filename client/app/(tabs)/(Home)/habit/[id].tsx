import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import HabitDesc from "@/components/HabitDesc";
import ToggleComponent from "@/components/OptionSelector";
import Axios from "@/constants/Axios";
import { useLocalSearchParams } from "expo-router";

export default function OpenHabit() {
  const [habitName, setHabitName] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<Number[]>([]);
  const [description, setDescription] = useState<string>("");
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await Axios.get(`/habits/getHabit/${id}`);
        setHabitName(response.data.name);
        setDescription(response.data.description);
        setSelectedDays(response.data.targetDays);
      } catch (error: any) {
        console.error("Error occurred:", error.message);
      }
    };

    getDetails();
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <NavBar id={Array.isArray(id) ? id[0] : id} />
        <View style={styles.title_box}>
          <Text style={styles.title}>Weekly</Text>
        </View>
        <HabitDesc name={habitName} description={description} />
        <ToggleComponent />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: "800",
  },
  title_box: {
    width: "100%",
    paddingHorizontal: 20,
  },
  scrollContainer: {
    // marginBottom: 110,
  },
});
