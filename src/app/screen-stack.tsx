import { ThemeColorsType, useTheme } from "@/provider/theme-provider";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ScreenStack = () => {
  const { themeColors } = useTheme();
  const styles = generateStyles(themeColors);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="note-edit" />
      </Stack>
    </SafeAreaView>
  )
}

const generateStyles = (themeColors: ThemeColorsType) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: themeColors.primary,
  },
});
