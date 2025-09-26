import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { Card, Button } from "react-native-paper";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const colors = {
  primary: "#F9A825",
  secondary: "#F57F17",
  background: "#FFFDE7",
  cardBackground: "#FFFFFF",
  text: "#333",
  lightText: "#555",
  placeholder: "#888",
  buttonText: "#FFFFFF",
};

// ================== Login Screen ==================
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email && password) {
      navigation.replace("MainTabs");
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>SkillSwap</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.lightText}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors.lightText}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.link}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

// ================== Signup Screen ==================
function SignupScreen({ navigation }) {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>SkillSwap</Text>
      <Text style={styles.subtitle}>Create an account</Text>

      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("MainTabs")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

// ================== Home Screen ==================
function HomeScreen() {
  const posts = [
    { title: "Free UX Design Workshop", desc: "Swap, Learn, Grow" },
    { title: "Photography Basics", desc: "Community Session" },
     { title: "Mobile application development ", desc: "UI,Backend, API Intigratiion" },
  ];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Explore Skills</Text>
      {posts.map((item, i) => (
        <Card key={i} style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.desc}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

// ================== Community Screen ==================
function CommunityScreen() {
  const skills = [ "Music","Web Dev","Graphic Design", "Gaming" ];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Community</Text>
      {skills.map((s, i) => (
        <Card key={i} style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>{s}</Text>
            <TouchableOpacity style={styles.smallButton}>
              <Text style={styles.smallButtonText}>Join</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

// ================== Swaps Screen ==================
function SwapsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>My Swaps</Text>

      {/* Swap Box */}
      <View style={styles.swapBox}>
        <View style={styles.swapRow}>
          <Text style={styles.swapLabel}>You Offered:</Text>
          <Text style={styles.swapValue}>Data Analyst</Text>
        </View>

        <View style={styles.swapRow}>
          <Text style={styles.swapLabel}>You Get:</Text>
          <Text style={styles.swapValue}>Graphic Design</Text>
        </View>

        <View style={styles.swapRow}>
          <Text style={styles.swapLabel}>Status:</Text>
          <Text style={styles.statusPending}>Pending</Text>
        </View>
      </View>
    </View>
  );
}


// ================== Messages Screen ==================
// ================== Messages Screen ==================
function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Conversation with Tayyab</Text>

      {/* Talha Message */}
      <View style={styles.rightMessage}>
        <Text style={styles.msgText}>Talha: Hi, can you swap UX for Coding?</Text>
      </View>

      {/* Tayyab Message */}
      <View style={styles.leftMessage}>
        <Text style={styles.msgText}>
          Tayyab: Sure, I can help with Coding. What level are you looking for?
        </Text>
      </View>

      {/* Talha Message */}
      <View style={styles.rightMessage}>
        <Text style={styles.msgText}>
          Talha: Beginner level would be great. In return, I’ll guide you in UX basics.
        </Text>
      </View>

      {/* Tayyab Message */}
      <View style={styles.leftMessage}>
        <Text style={styles.msgText}>
          Tayyab: Perfect! Let’s schedule a swap this weekend.
        </Text>
      </View>

      {/* Message Input Box (static, no send) */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Type a message"
          style={styles.textInput}
          editable={false} // makes it look real but not usable
        />
      </View>
    </View> // ✅ this was missing
  );
}


// ================== Profile Screen ==================
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>My Profile</Text>
      {/* Profile Picture */}
<View style={{ alignItems: "center", marginBottom: 16 }}>
  <Image
    source={{ uri: "https://via.placeholder.com/150" }} // replace with your own image
    style={styles.profileImage}
  />
</View>


      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>👤 Personal Info</Text>
          <Text style={styles.profileItem}>Name: Talha Shahbaz</Text>
          <Text style={styles.profileItem}>Email: TalhaShahbaz001@skillswap.com</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>💡 Skills</Text>
          <Text style={styles.profileItem}>🎮 Taken 8 Pro Player</Text>
          <Text style={styles.profileItem}>📱 Mobile App Developer</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>📅 Activity</Text>
          <Text style={styles.profileItem}>Swaps Completed: 5</Text>
          <Text style={styles.profileItem}>Joined: Jan 2025</Text>
        </Card.Content>
      </Card>
    </View>
  );
}


// ================== Tabs ==================
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.lightText,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          if (route.name === "Community") iconName = "people-outline";
          if (route.name === "Swaps") iconName = "swap-horizontal-outline";
          if (route.name === "Messages") iconName = "chatbubbles-outline";
          if (route.name === "Profile") iconName = "person-outline";
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Swaps" component={SwapsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// ================== App Entry ==================
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ================== Styles ==================
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 16 }, // light gray background
  authContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#F9FAFB", 
    padding: 20 
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#6C63FF", marginBottom: 10 }, // lavender
  subtitle: { fontSize: 16, color: "#6B7280", marginBottom: 20 }, // cool gray
  input: { 
    borderWidth: 1, 
    borderColor: "#D1D5DB", 
    borderRadius: 12, 
    padding: 12, 
    marginVertical: 8, 
    width: "100%", 
    backgroundColor: "#FFFFFF" 
  },
  button: { 
    backgroundColor: "#6C63FF", 
    padding: 14, 
    borderRadius: 12, 
    alignItems: "center", 
    marginVertical: 12, 
    width: "100%" 
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  link: { color: "#6C63FF", marginTop: 10, fontWeight: "500" },

  card: { 
    backgroundColor: "#FFFFFF", 
    padding: 16, 
    borderRadius: 16, 
    marginVertical: 8,
    shadowColor: "#000", 
    shadowOpacity: 0.05, 
    shadowRadius: 4, 
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#374151" },
  cardSubtitle: { fontSize: 14, color: "#6B7280" },

  pageTitle: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#6C63FF", 
    marginBottom: 12,
    textAlign: "center",
  },

  smallButton: { 
    backgroundColor: "#34D399", // mint green
    padding: 8, 
    borderRadius: 8, 
    marginTop: 8, 
    alignSelf: "flex-start" 
  },
  smallButtonText: { color: "#fff", fontWeight: "600" },

  // Messages
  leftMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E7EB", // soft gray
    padding: 10,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: "75%",
  },
  rightMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#6C63FF", // lavender
    padding: 10,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: "75%",
  },
  msgText: {
    fontSize: 16,
    color: "#111827",
  },

  // Chat Input
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    padding: 8,
    marginTop: "auto",
  },
  textInput: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F3F4F6", // very light gray
    borderRadius: 20,
    fontSize: 16,
  },

  // Profile
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#6C63FF",
  },
  profileItem: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 4,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#34D399", // mint green border
  },
  swapBox: {
  backgroundColor: "#f9f9ff",
  padding: 16,
  borderRadius: 12,
  marginVertical: 8,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 3,
},
swapRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 6,
},
swapLabel: {
  fontSize: 15,
  fontWeight: "bold",
  color: "#6a5acd",
},
swapValue: {
  fontSize: 15,
  color: "#333",
},
statusPending: {
  fontSize: 15,
  fontWeight: "bold",
  color: "orange",
},

});
