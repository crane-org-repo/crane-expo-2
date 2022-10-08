import { Text, Button, View } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import { LoginButton } from "react-native-fbsdk-next";

export default function HomeScreen() {
  const { authState, setAuthState } = useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Text>{authState.accessToken}</Text>
      <Button
        title="Sign out"
        onPress={() => setAuthState({ accessToken: "", signedIn: false })}
      />
      <LoginButton
        onLogoutFinished={() =>
          setAuthState({ accessToken: "", signedIn: true })
        }
        nonceIOS={"my_nonce"}
      />
    </View>
  );
}
