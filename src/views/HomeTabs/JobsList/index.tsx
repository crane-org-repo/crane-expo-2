import React from "react";
import JobItem from "../Job/item";
import { FlatList, StyleSheet, View } from "react-native";
import { Job } from "../../../models/Job";
import { SearchBar } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../constants/types";
import { AuthContext } from "../../../store/AuthContext";

const JOB_URL_LOCAL = "http://localhost:3000/jobs/";

type jobsListProps = NativeStackScreenProps<RootStackParamList, "Jobs">;
export default function JobsList({ navigation }: jobsListProps) {
  const { authState, setAuthState } = React.useContext(AuthContext);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [jobs, setJobs] = React.useState<Job[]>([]);

  React.useEffect(() => {
    fetch(JOB_URL_LOCAL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + authState.accessToken,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setJobs(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  React.useEffect(() => {
    // time set to prevent too many API calls
    const timer = setTimeout(() => {
      const url = JOB_URL_LOCAL + query;
      console.log(url);
      fetch(url, {
        mode: "cors",
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setJobs(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <View>
      <SearchBar
        style={styles.searchBar}
        platform="default"
        containerStyle={{}}
        inputContainerStyle={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onChangeText={(newVal) => setQuery(newVal)}
        placeholder="Find Jobs here..."
        placeholderTextColor="#888"
        value={query}
      />
      <FlatList
        data={jobs}
        renderItem={(itemInfo) => <JobItem job={itemInfo.item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {},
});
