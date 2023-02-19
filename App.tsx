import { SafeAreaProvider } from "react-native-safe-area-context";

import ThemeProvider from "./src/themes/ThemeProvider";
import AppIntro from "./AppIntro";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppIntro />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
