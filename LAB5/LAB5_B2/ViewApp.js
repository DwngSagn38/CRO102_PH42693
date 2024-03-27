import React from "react";
import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { tang, giam } from "./actions";

const ViewApp = () => {
  const count = useSelector((state) => state.dem);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 20, fontSize: 30 }}>Đếm: {count}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "60%",
        }}
      >
        <Button title="Tăng" onPress={() => dispatch(tang())} />
        <Button title="Giảm" onPress={() => dispatch(giam())} />
      </View>
    </View>
  );
};

export default ViewApp;
