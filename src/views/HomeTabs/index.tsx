import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import JobsList from "./JobsList";
import Profile from "./Profile";
import { RootStackParamList } from "../../constants/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Resume from "./Resume";

const Tab = createBottomTabNavigator<RootStackParamList>();
type chooseHomTabNavProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: chooseHomTabNavProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Jobs"
        component={JobsList}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Resume"
        component={Resume}
        options={{
          tabBarLabel: "Resume",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="text-box-multiple-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
