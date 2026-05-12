import { ThemeColorsType, useTheme } from "@/provider/theme-provider";
import { Stack } from "expo-router";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ScreenStack = () => {
  const { themeColors, theme } = useTheme();
  const styles = useMemo(() => generateStyles(themeColors), [themeColors.primary]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack screenOptions={{ headerShown: false, statusBarStyle: theme === 'dark' ? 'light' : 'dark' }} >
        <Stack.Screen name="index" />
        <Stack.Screen name="notes/index" />
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
