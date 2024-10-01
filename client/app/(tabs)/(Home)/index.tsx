import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "@/context/store"; // Redux setup
import { setHabits } from "@/context/habitSlice"; // Redux actions
import Habit from "@/components/habit";
import NavBar from "@/components/NavBar";
import Axios from "@/constants/Axios";
import { router } from "expo-router";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const habits = useSelector((state: RootState) => state.habits.habits);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await Axios.get("/habits/habits");
        dispatch(setHabits(response.data)); // Store habits in Redux
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchHabits();
  }, [dispatch]);

  StatusBar.setBarStyle("dark-content");
  StatusBar.setBackgroundColor("#f2f2f2");

  return (
    <View style={styles.container}>
      <NavBar id={0} />
      <View style={styles.title_box}>
        <Text style={styles.title}>Today</Text>
      </View>
      {habits.length === 0 ? (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyText}>
            Your habits list is empty, add new habits
          </Text>
          <TouchableOpacity
            style={styles.emptyButton}
            onPress={() => router.navigate("/(AddHabit)")}
          >
            <Text style={styles.emptyButtonText}>Add New Habit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView style={{ width: "100%" }}>
          {habits.map((habit) => (
            <Habit
              key={habit._id}
              id={habit._id}
              name={habit.name}
              description={habit.description}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

// Add styles for the empty state
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
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    marginBottom: 10,
  },
  emptyButton: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  emptyButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
