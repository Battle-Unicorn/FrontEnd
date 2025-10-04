import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Main Page"}} />
      <Stack.Screen name="wiki" options={{title: "Wiki Page"}} />
      <Stack.Screen name="dream-design" options={{title: "Design Your Dream"}} />
      <Stack.Screen name="history" options={{title: "Sleep History"}} />
      <Stack.Screen name="config" options={{title: "Connect To Smart Device"}} />
    </Stack>
  );
}
