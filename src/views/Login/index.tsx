import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  AccessToken,
  LoginButton,
  GraphRequestManager,
  GraphRequest,
} from "react-native-fbsdk-next";
import { RootStackParamList } from "../../constants/types";
import { AuthReqProps, postAuthReq } from "../../services/auth";
import { AuthContext } from "../../store/AuthContext";

type loginProps = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: loginProps) {
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
      const authReq: AuthReqProps = {
        email: user.email as string,
        name: user.displayName as string,
        uidToken: token,
      };
      postAuthReq(authReq).then((res) => {
        console.log("Logged in successfully!", JSON.stringify(res));
        setAuthState({
          accessToken: res.accessToken,
          signedIn: true,
          isLoading: false,
          isNewUser: res.newUser as boolean,
        });
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#f5f5f5",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
      }}
    >
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log("login has error: " + error);
          } else if (result.isCancelled) {
            console.log("login is cancelled.");
          } else {
            setAuthState({
              accessToken: "",
              signedIn: false,
              isLoading: true,
              isNewUser: false,
            });
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
    flex: 3,
    padding: 24,
    marginTop: 80,
    alignSelf: "center",
    width: "80%",
  },
});
