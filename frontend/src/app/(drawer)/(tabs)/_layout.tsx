import { useAuth } from '@appsformankind/orbit';
import { useThreatsData } from '@appsformankind/orbit';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useMemo } from 'react';
import { Platform, useWindowDimensions } from 'react-native';

export default function TabLayout() {
  const { authState, isLoading: authLoading } = useAuth();
  const { threats } = useThreatsData();
  const { width } = useWindowDimensions();
  
  // ✅ RESPONSIVE: Detect if we should show tab bar
  const isLargeScreen = useMemo(() => {
    return Platform.OS === 'web' || width >= 768; // Hide tabs on web and tablets
  }, [width]);
  
  // ✅ OPTIMIZED: Memoize expensive calculations to prevent re-renders
  const { isAuthenticated, hasScanResults, shouldShowDiscover } = useMemo(() => {
    const authenticated = authState?.authenticated === true;
    const hasResults = threats && threats.length > 0;
    // Always show discover for unauthenticated users, regardless of threats
    // This ensures after reset, we go back to the home/discover page
    const showDiscover = !authLoading && !authenticated;
    
    return {
      isAuthenticated: authenticated,
      hasScanResults: hasResults,
      shouldShowDiscover: showDiscover
    };
  }, [authState?.authenticated, threats?.length, authLoading]);

  // ✅ OPTIMIZED: Memoize tab screen options to prevent re-creating objects
  const discoverOptions = useMemo(() => ({
    ...(shouldShowDiscover ? {} : { href: null as any }),
    title: 'Discover',
    tabBarLabel: 'Discover',
    headerShown: false,
    tabBarIcon: ({ color, size }: any) => (
      <Ionicons name="search-outline" size={size} color={color} />
    ),
  }), [shouldShowDiscover]);

  const reportOptions = useMemo(() => ({
    ...(shouldShowDiscover ? { href: null as any } : {}),
    title: 'Report',
    tabBarLabel: 'Report',
    headerShown: false,
    tabBarIcon: ({ color, size }: any) => (
      <Ionicons name="analytics-outline" size={size} color={color} />
    ),
  }), [shouldShowDiscover]);

  return (
    <Tabs
      initialRouteName={shouldShowDiscover ? 'index' : 'report/index'}
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: isLargeScreen ? { display: 'none' } : {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          height: 80,
          opacity: 1,
          position: 'absolute',
          bottom: 0,
          borderTopWidth: 1,
          borderTopColor: 'rgba(255, 255, 255, 0.1)',
          paddingBottom: 10,
          paddingTop: 10,
        },
        headerShown: false,
        headerStyle: { height: 0 },
        headerTransparent: true,
      }}
    >

      <Tabs.Screen
        name="index"
        options={discoverOptions}
      />

      <Tabs.Screen
        name="report/index"
        options={reportOptions}
      />

      {/* Hide monitoring routes */}
      <Tabs.Screen
        name="report/monitoring/index"
        options={{
          href: null, // Hide from tab bar
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="report/monitoring/[featureId]"
        options={{
          href: null, // Hide from tab bar
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="request/index"
        options={{
          title: 'Request',
          tabBarLabel: 'Request',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings/profile"
        options={{
          href: null, // Hide from tab bar
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="report/delete-all"
        options={{
          title: 'Delete All',
          tabBarLabel: 'Delete All',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trash" size={size} color={color} />
          ),
        }}
      />


      {/* Hide dynamic routes from tab bar */}
      <Tabs.Screen
        name="report/[report-details]"
        options={{
          href: null, // Hide from tab bar
        }}
      />
      
      {/* Threat category pages */}
      <Tabs.Screen
        name="report/critical"
        options={{
          href: null, // Hide from tab bar
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="report/high-risk"
        options={{
          href: null, // Hide from tab bar
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="report/verified"
        options={{
          href: null, // Hide from tab bar
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="report/users-affected"
        options={{
          href: null, // Hide from tab bar
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="features/index"
        options={{
          href: null, // Hide from tab bar
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="features/[featureId]"
        options={{
          href: null, // Hide from tab bar
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="request/[create]"
        options={{
          href: null, // Hide from tab bar
        }}
      />



            <Tabs.Screen
                name="settings/change-password"
                options={{
                  href: null, // Hide from tab bar
                }}
              />

            <Tabs.Screen
                name="settings/saved-data"
                options={{
                  href: null, // Hide from tab bar
                  headerShown: false,
                }}
              />

            <Tabs.Screen
                name="settings/apiStatus"
                options={{
                  href: null, // Hide from tab bar
                  headerShown: false,
                }}
              />

<Tabs.Screen
        name="settings/index"
        options={{
          title: 'Settings',
          tabBarLabel: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
