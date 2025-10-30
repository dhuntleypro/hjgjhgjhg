// import { BackButtonNoText } from '@appsformankind/orbit';
import { BackButtonNoText } from '@appsformankind/orbit';
import { Stack }  from 'expo-router';


const FullScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="get-started"
        options={{
          title: "Get Started",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="setup-payment"
        options={{
          title: "Setup payment",
        }}
      />

      <Stack.Screen
        name="payment-setup-completed"
        options={{
          title: "Payment Setup Completed",
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="wallet"
        options={{
          title: "Wallet",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="subscription-checkout"
        options={{
          title: "Checkout",
          headerLeft: () => <BackButtonNoText color={"gray"} />,
        }}
      />
    </Stack>
  );
};

export default FullScreenLayout;

