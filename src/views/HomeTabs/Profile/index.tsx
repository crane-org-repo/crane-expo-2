import { Text, View, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../../store/AuthContext";
import { LoginButton } from "react-native-fbsdk-next";
import Button from "../../../components/CRButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../constants/types";

type profileProps = NativeStackScreenProps<RootStackParamList, "Profile">;
export default function ProfileScreen({ navigation }: profileProps) {
  const { authState, setAuthState } = useContext(AuthContext);

  const JOB_URL_LOCAL = "http://localhost:3000/jobs/";

  return (
    <View>
      <LoginButton
        style={styles.container}
        onLogoutFinished={() =>
          setAuthState({
            accessToken: "",
            signedIn: true,
            isLoading: false,
            isNewUser: false,
          })
        }
        nonceIOS={"my_nonce"}
      />
      <Button
        label="Preferences"
        onPress={() =>
          setAuthState({
            ...authState,
            isNewUser: true,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 80,
    alignSelf: "center",
    width: "80%",
  },
});
