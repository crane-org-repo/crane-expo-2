import React from "react";
import JobItem from "../components/JobItem";
import { FlatList, View } from "react-native";
import { Job } from "../models/Job";
import { SearchBar } from "@rneui/themed";
import { Header } from "@rneui/base";

const JOB_URL_LOCAL = "http://localhost:3000/jobs/";

export default function JobsListScreen() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [jobs, setJobs] = React.useState<Job[]>([]);

  React.useEffect(() => {
    fetch(JOB_URL_LOCAL, {
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
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Jobs", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <SearchBar
        platform="default"
        containerStyle={{}}
        inputContainerStyle={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onChangeText={(newVal) => setQuery(newVal)}
        placeholder="Type query here..."
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
