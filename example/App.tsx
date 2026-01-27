import { getCornerRadius } from "expo-device-corner-radius";
import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  const [radius, setRadius] = useState(getCornerRadius());

  return (
    <SafeAreaView style={styles.container}>
      <Group name="Corner Radius">
        <Text style={{ fontSize: 20, marginLeft: "auto", marginRight: "auto" }}>
          {radius}
        </Text>
      </Group>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
};
