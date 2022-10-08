import { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/views/LoginScreen";
import { AuthContext } from "./src/store/AuthContext";
import JobsListScreen from "./src/views/JobsListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [authState, setAuthState] = useState({
    accessToken: "",
    signedIn: false,
  });
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {authState.accessToken == "" ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Log In",
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: authState.signedIn ? "pop" : "push",
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="JobsList" component={JobsListScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
