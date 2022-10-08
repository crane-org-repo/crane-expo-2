import React, { Component } from "react";
import { View, Alert, StyleSheet } from "react-native";
import {
  AccessToken,
  LoginButton,
  GraphRequestManager,
  GraphRequest,
} from "react-native-fbsdk-next";
import { AuthContext } from "../store/AuthContext";

export default function Login() {
  const { authState, setAuthState } = React.useContext(AuthContext);

  const handleUserInfos = (accessToken: string) => {
    const parameters = {
      fields: { string: "id,name,first_name,last_name,picture,email" },
    };
    const userProfileRequest = new GraphRequest(
      "/me",
      { accessToken, parameters },
      (error, user) => {
        if (error) {
          console.error("Handle user infos error: ", error);
        } else {
          // signIn(user, { fromFacebook: true, facebookToken: token });
          postData(user, accessToken);
        }
      }
    );
    new GraphRequestManager().addRequest(userProfileRequest).start();
  };

  const postData = async (user: any, token: string) => {
    try {
      let res = await fetch("http://192.168.28.17:3000/continueWithFacebook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          accessToken: token,
        }),
      }).then((res) => res.json());
      setAuthState({ accessToken: res.accessToken, signedIn: true });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <LoginButton
        style={styles.container}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log("login has error: " + error);
          } else if (result.isCancelled) {
            console.log("login is cancelled.");
          } else {
            AccessToken.getCurrentAccessToken().then((data) => {
              if (data) {
                handleUserInfos(data.accessToken.toString());
              }
            });
          }
        }}
        nonceIOS={"my_nonce"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 24,
  },
});
