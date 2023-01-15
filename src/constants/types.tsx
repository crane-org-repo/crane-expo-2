import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Skills: undefined;
  Languages: undefined;
  Location: undefined;
  Home: undefined;
  Profile: undefined;
  Jobs: undefined;
  Resume: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
