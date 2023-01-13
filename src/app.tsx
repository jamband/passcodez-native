import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { usePasscode } from "./hooks/passcode";
import { usePressedCode } from "./hooks/pressed-code";
import { useScore } from "./hooks/score";
import { useStep } from "./hooks/step";
import { Header } from "./layouts/header";
import { Main } from "./layouts/main";
import { StepFinish } from "./steps/finish";
import { StepFirst } from "./steps/first";
import { StepTry } from "./steps/try";

export default function App() {
  const score = useScore();
  const step = useStep();
  const passcode = usePasscode();
  const pressedCode = usePressedCode();

  return (
    <View style={styles.container}>
      <Header score={score} />
      <Main>
        {step.state === "first" ? (
          <StepFirst
            step={step}
            passcode={passcode}
            pressedCode={pressedCode}
          />
        ) : step.state === "try" ? (
          <StepTry
            step={step}
            score={score}
            passcode={passcode}
            pressedCode={pressedCode}
          />
        ) : (
          <StepFinish
            step={step}
            passcode={passcode}
            pressedCode={pressedCode}
          />
        )}
      </Main>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

registerRootComponent(App);
