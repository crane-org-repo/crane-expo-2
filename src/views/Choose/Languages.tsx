import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/CRButton";
import MultiSelectInput from "../../components/MultiSelectInput";
import { RootStackParamList } from "../../constants/types";

type chooseLangaugesProps = NativeStackScreenProps<
  RootStackParamList,
  "Languages"
>;

export default function Languages({ navigation }: chooseLangaugesProps) {
  return (
    <View
      style={{
        backgroundColor: "#00A699",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
      }}
    >
      <MultiSelectInput
        items={[
          { label: "English", value: "english" },
          { label: "Tamil", value: "tamil" },
          { label: "German", value: "german" },
          { label: "Chinese", value: "chinese" },
          { label: "Malay", value: "malay" },
        ]}
        values={[]}
        open={false}
        placeholder="Select your languages..."
      ></MultiSelectInput>
      <View
        style={{
          marginTop: "50%",
        }}
      >
        <Button
          label="next"
          onPress={() => navigation.navigate("Location")}
        ></Button>
      </View>
    </View>
  );
}
