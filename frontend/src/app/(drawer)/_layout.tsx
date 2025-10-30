import { CustomDrawerContent } from '@appsformankind/orbit';
import { useThemeManager } from '@appsformankind/orbit';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  const { colors } = useThemeManager();

  return (
      <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: { height: 0 },
        headerTransparent: true,
        drawerStyle: {
          backgroundColor: colors.pageBackground,
          width: 260,
          borderRightWidth: 0,
          paddingTop: 0, // Ensure drawer respects safe area
        },
        drawerType: 'front',
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.pageText,
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
          marginLeft: -10,
        },
        drawerItemStyle: {
          borderRadius: 12,
          marginHorizontal: 8,
          marginVertical: 2,
        },
        drawerActiveBackgroundColor: colors.primary + '15', // 15% opacity
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          headerShown: false, // Disable drawer header to avoid duplicate
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} name="home-outline" size={size} />
          ),
        }}
      />
    
     
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Settings',
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} name="settings-outline" size={size} />
          ),
        }}
      />
    </Drawer>
  );
}
