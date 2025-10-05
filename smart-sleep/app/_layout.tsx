import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1b191f',
        },
        headerTintColor: '#fff3fd',
        headerTitleStyle: {
          fontFamily: 'Verdana',
        },
      }}
    >
      <Stack.Screen name="index" options={{title: "Design Your Sleep"}} />
      <Stack.Screen name="wiki" options={{title: "Wiki Page"}} />
      <Stack.Screen name="dream-design" options={{title: "Design Your Dream"}} />
      <Stack.Screen name="history" options={{title: "Sleep History"}} />
      <Stack.Screen name="config" options={{title: "Connect To Smart Device"}} />
      <Stack.Screen name="rem-config" options={{title: "Configure REM"}} />
    </Stack>
  );
}
