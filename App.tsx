import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/views/Login";
import { AuthContext } from "./src/store/AuthContext";
import Skills from "./src/views/Choose/Skills";
import { RootStack } from "./src/constants/types";
import Languages from "./src/views/Choose/Languages";
import Home from "./src/views/HomeTabs";
import Location from "./src/views/Choose/Location";

export default function App() {
  const [authState, setAuthState] = useState({
    accessToken: "",
    signedIn: false,
    isLoading: false,
    isNewUser: false,
  });
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {authState.accessToken == "" ? (
            // No token found, user isn't signed in
            <RootStack.Screen
              name="Login"
              component={Login}
              options={{
                title: "Log In",
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: authState.signedIn ? "pop" : "push",
              }}
            />
          ) : (
            <>
              {authState.isNewUser ? (
                <>
                  <RootStack.Screen name="Skills" component={Skills} />
                  <RootStack.Screen name="Languages" component={Languages} />
                  <RootStack.Screen name="Location" component={Location} />
                </>
              ) : (
                <>
                  <RootStack.Screen name="Home" component={Home} />
                </>
              )}
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
