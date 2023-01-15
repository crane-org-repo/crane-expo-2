import * as React from "react";
import { Button } from "react-native-paper";

interface CRButtonProps {
  title: string;
  onPress: () => void;
}

const CRButton = (props: CRButtonProps) => (
  <Button icon="camera" mode="contained" onPress={props.onPress}>
    {props.title}
  </Button>
);

export default CRButton;
