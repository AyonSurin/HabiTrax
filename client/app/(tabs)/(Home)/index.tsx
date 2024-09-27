// import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
// import Habit from "@/components/habit";
// import NavBar from "@/components/NavBar";

// export default function HomeScreen() {
//   StatusBar.setBarStyle("dark-content");
//   StatusBar.setBackgroundColor("#f2f2f2");
//   return (
//     <View style={styles.container}>
//       <NavBar />
//       <View style={styles.title_box}>
//         <Text style={styles.title}>Today</Text>
//       </View>
//       <ScrollView style={{ width: "100%" }}>
//         <Habit />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   title: {
//     fontSize: 35,
//     fontWeight: "800",
//   },
//   title_box: {
//     width: "100%",
//     paddingHorizontal: 20,
//   },
// });

import { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import Habit from "@/components/habit";
import NavBar from "@/components/NavBar";
import Axios from "@/constants/Axios"; // Adjust the import for your axios instance

export default function HomeScreen() {
  const [habits, setHabits] = useState<
    { _id: string; name: string; description: string }[]
  >([]);

  useEffect(() => {
    // Fetch the habits from the backend
    const fetchHabits = async () => {
      try {
        const response = await Axios.get("/habits/gethabits"); // Adjust the endpoint as necessary
        setHabits(response.data); // Assuming the server sends an array of habits
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchHabits();
  }, []);

  StatusBar.setBarStyle("dark-content");
  StatusBar.setBackgroundColor("#f2f2f2");

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.title_box}>
        <Text style={styles.title}>Today</Text>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {habits.map((habit) => (
          <Habit
            key={habit._id} // Use a unique key, like the habit ID
            name={habit.name}
            description={habit.description}
            // streak={habit.streak} // Assuming you have a streak field
          />
        ))}
      </ScrollView>
    </View>
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
});
