import React from "react";
import { Job } from "../models/Job";
import { Card, Icon, Text } from "@rneui/base";
import { View } from "react-native";

interface JobItemProps {
  job: Job;
}

const jobItem: React.FC<JobItemProps> = ({ job }) => {
  const salary = job.minSalary + " - " + job.maxSalary + " a month";
  return (
    <>
      <Card>
        <Card.Title>{job.title}</Card.Title>
        <View>
          <Text>{job.company}</Text>
        </View>
        <View>
          <Text>{job.ratings}</Text>
        </View>
        <View>
          <Text>{salary}</Text>
        </View>
        <View>
          <Text>{job.url}</Text>
        </View>
      </Card>
    </>
  );
};

export default jobItem;
