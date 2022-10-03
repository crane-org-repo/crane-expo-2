import React, { Component } from "react";
import { View } from "react-native";
import {
  AccessToken,
  LoginButton,
  GraphRequestManager,
  LoginManager,
  GraphRequest,
} from "react-native-fbsdk-next";

export default class Login extends Component {
  handleUserInfos = (token) => {
    const userParams = {
      fields: { string: "id,name,first_name,last_name,picture,email" },
    };
    const userProfileRequest = new GraphRequest(
      "/me",
      { token, parameters: userParams },
      (error, user) => {
        if (error) {
          console.error("Handle user infos error: ", error);
        } else {
          // signIn(user, { fromFacebook: true, facebookToken: token });
          console.log(user);
          this.postData(user, token);
        }
      }
    );
    new GraphRequestManager().addRequest(userProfileRequest).start();
  };

  postData = async (user, token) => {
    try {
      let res = await fetch("https://localhost:3000/continueWithFacebook", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          accessToken: token,
        },
      });
      res = await res.json();
      console.log(res);
      Alert.alert("onPress", res.json.str);
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                this.handleUserInfos(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log("logout.")}
          nonceIOS={"my_nonce"}
        />
      </View>
    );
  }
}
