import { BASE_URL } from '@appsformankind/orbit';
import { apiMaps } from '@appsformankind/orbit';
import { AuthProvider, CurrentOwnerStoreProvider, DigitalImmunityProvider, useAuth } from '@appsformankind/orbit';
import { SecurityScanLoader } from '@appsformankind/orbit';
import { CURRENT_STORE_ID } from '../config/appConfig';
import { ThemeManagerProvider } from '@appsformankind/orbit';
import { isUserAuthenticated } from '@appsformankind/orbit';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Centralized loading screen
// const LoadingScreen = () => (
//   <View style={styles.loadingContainer}>
//     <Text style={styles.loadingText}>Loading...</Text>
//   </View>
// );

// Using centralized authentication check from utils

// Main navigation component with centralized auth logic
function AppNavigation() {
  try {
    const { authState, isLoading } = useAuth();

    console.log('🔍 [AppNavigation] Auth state:', {
      isLoading,
      authenticated: authState?.authenticated,
      hasToken: !!authState?.token,
      hasUser: !!authState?.user?.id,
      userEmail: authState?.user?.email
    });

    // Show loading only during initial app load
    if (isLoading && authState === undefined) {
      console.log('⏳ [AppNavigation] Still loading auth state...');
      return <SecurityScanLoader />;
    }

    // Use centralized authentication check
    const isAuthenticated = isUserAuthenticated(authState);

    console.log('🔍 [AppNavigation] Authentication check result:', isAuthenticated);

    // Always show the main app structure, let individual screens handle auth
    // This prevents double rendering and auth conflicts
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(drawer)" />
        <Stack.Screen name="(welcome)" />
        <Stack.Screen name="(aux)" />
      </Stack>
    );
  } catch (error) {
    console.error('🚨 [AppNavigation] Error in navigation:', error);
    // Fallback: Show welcome screen on any error
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(welcome)" />
      </Stack>
    );
  }
}

const storeProviderOptions = {
  baseUrl: BASE_URL,
  token: '',
  apiMaps,
  context: {
    id: CURRENT_STORE_ID,
    email: '',
  },
};

// Main Root Layout with centralized provider hierarchy
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <CurrentOwnerStoreProvider options={storeProviderOptions}>
            <DigitalImmunityProvider>
              <ThemeManagerProvider>
                <AppNavigation />
              </ThemeManagerProvider>
            </DigitalImmunityProvider>
          </CurrentOwnerStoreProvider>
        </AuthProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
