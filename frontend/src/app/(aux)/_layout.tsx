import {BackButton} from '@appsformankind/orbit';
import { StyleSheet }  from 'react-native';
import { router, Stack }  from 'expo-router';
import { Ionicons }  from '@expo/vector-icons';


const AuxLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="cookies-policy"
        options={{
          title: "Cookies Policy",
          headerLeft: () => <BackButton colorText={""} />,
        }}
      />
      <Stack.Screen
        name="privacy-policy"
        options={{
          title: "Privacy Policy",
        }}
      />
      <Stack.Screen
        name="terms-of-use"
        options={{
          title: "Terms of Use",
        }}
      />
      <Stack.Screen
        name="delete-data"
        options={{
          title: "Delete Your Data",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="order-completed"
        options={{
          title: "Thank you",
          headerRight: () => (
            <Ionicons
              name="close"
              size={30}
              style={{ marginRight: 16 }}
              onPress={() => router.replace("/" as never)}
            />
          ),
          // headerLeft: () => <BackButton colorText={""} />,
        }}
      />
    </Stack>
  );
};

export default AuxLayout;

const styles = StyleSheet.create({});
