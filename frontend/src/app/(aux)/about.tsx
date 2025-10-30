import { AboutView } from "@appsformankind/orbit";
import { PageWrapper } from "@appsformankind/orbit";
import { StyleSheet } from "react-native";

const aboutScreen = () => {
  return (
    <PageWrapper>
      <AboutView />
    </PageWrapper>
  );
};

export default aboutScreen;

const styles = StyleSheet.create({});
