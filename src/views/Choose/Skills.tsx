import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/CRButton";
import MultiSelectInput from "../../components/MultiSelectInput";
import { RootStackParamList } from "../../constants/types";

type chooseSkillsProps = NativeStackScreenProps<RootStackParamList, "Skills">;

export default function Skills({ navigation }: chooseSkillsProps) {
  return (
    <View
      style={{
        backgroundColor: "#FF5A5F",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
      }}
    >
      <MultiSelectInput
        items={[
          { label: "Construction", value: "construction" },
          { label: "Operator", value: "operator" },
          { label: "Cleaner", value: "cleaner" },
          { label: "Supervisor", value: "supervisor" },
          { label: "Manager", value: "manager" },
        ]}
        values={[]}
        open={false}
        placeholder="Select your skills..."
      ></MultiSelectInput>
      <View
        style={{
          marginTop: "50%",
        }}
      >
        <Button
          label="next"
          onPress={() => navigation.navigate("Languages")}
        ></Button>
      </View>
    </View>
  );
}
