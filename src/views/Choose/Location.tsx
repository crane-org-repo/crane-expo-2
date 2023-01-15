import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/CRButton";
import MultiSelectInput from "../../components/MultiSelectInput";
import { RootStackParamList } from "../../constants/types";
import { AuthContext } from "../../store/AuthContext";

type chooseLocationPropss = NativeStackScreenProps<
  RootStackParamList,
  "Location"
>;

export default function Location({ navigation }: chooseLocationPropss) {
  const { authState, setAuthState } = React.useContext(AuthContext);

  const handlePress = () => {
    setAuthState({
      ...authState,
      isNewUser: false,
    });
  };
  return (
    <View
      style={{
        backgroundColor: "#FC642D",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
      }}
    >
      <MultiSelectInput
        items={[
          { label: "Singapore", value: "singapore" },
          { label: "New Zealand", value: "new zealand" },
          { label: "America", value: "america" },
          { label: "Germany", value: "germany" },
          { label: "Canada", value: "canada" },
        ]}
        values={[]}
        open={false}
        placeholder="Select your countries..."
      ></MultiSelectInput>
      <View
        style={{
          marginTop: "50%",
        }}
      >
        <Button label="next" onPress={handlePress}></Button>
      </View>
    </View>
  );
}
