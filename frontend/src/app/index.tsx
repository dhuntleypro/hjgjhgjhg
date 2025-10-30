import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to the main drawer layout instead of aux layout
  // This ensures the app starts in the main app flow, not in auxiliary pages
  return <Redirect href="/(drawer)/(tabs)" />;
}
