import React from "react";
import { Field, Formik, useFormik } from "formik";
import { ScrollView, KeyboardAvoidingView, Platform, View } from "react-native";
import * as Yup from "yup";
import CRInput from "../../../components/CRInput";
import CRButton from "../../../components/CRButton";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../constants/types.js";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  post: Yup.string()
    .min(20, ({ min, value }) => `${min - value.length} characters to go`)
    .required("Blog post is required"),
});

const initialValues = {
  name: "",
  summary: "",
};

type resumeProps = NativeStackScreenProps<RootStackParamList, "Resume">;

const Resume = ({ navigation }: resumeProps) => {
  const onSubmit = (values: any) => {
    setTimeout(() => {
      navigation.navigate("Languages");
    }, 3000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <View>
          <Formik
            initialValues={{
              title: "",
              post: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleSubmit, isValid, values }) => (
              <>
                <Field component={CRInput} name="name" placeholder="Name" />
                <Field
                  component={CRInput}
                  name="summary"
                  placeholder="Write Summary..."
                  multiline
                  numberOfLines={3}
                />
                <CRButton title="To Education" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Resume;
