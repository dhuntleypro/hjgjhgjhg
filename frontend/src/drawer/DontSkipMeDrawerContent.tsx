import { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SideBarItem, useActiveStore, useCurrentOwnerStore, useCustomizeViewBoard, useThemeManager, useModeManager } from "@appsformankind/orbit";

enum DrawerSections {
  HOME = "home",
  INBOX = "inbox",
  TASK = "task",
  PROXIES = "proxies",
  LOGS = "logs",
  SETTINGS = "settings",
  CONFIGURATION = "Configuration",
  WALLET = "wallet",
  REFER_A_FRIEND = "refer_a_friend",
  THEME = "theme",
  UPCOMING_DROPS = "upcoming_drops",
  WANT = "want",
  PROFILES = "profiles"
}

const APP_VERSION = "v1.0.0";

interface DontSkipMeDrawerContentProps {
  advancedMode: boolean;
  setAdvancedMode: (value: boolean) => void;
}

const DontSkipMeDrawerContent: FC<DontSkipMeDrawerContentProps> = ({
  advancedMode,
  setAdvancedMode,
  ...props
}) => {
  const { setMode } = useModeManager();
  const [selectedSection, setSelectedSection] = useState<DrawerSections | null>(
    null
  );
  const {colors , toggleTheme, isDarkMode} = useThemeManager()
  // const { store  } = useClientStore();

  const handleSelect = (section: DrawerSections) => {
    setSelectedSection((prev) => (prev === section ? null : section));
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={[
        styles.drawerContainer,
        { backgroundColor: colors.pageBackground },
      ]}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, { color: colors.pageText }]}>
          Menu
        </Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
          <Ionicons
            name={isDarkMode ? "moon" : "sunny"}
            size={24}
            color={colors.pageText}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
  onPress={() => setAdvancedMode(!advancedMode)}
  style={styles.modeToggle}
>
  <Ionicons
    name={!advancedMode ? "flash-outline" : "speedometer-outline"} // ⚡ vs 🧠
    size={20}
    color={colors.pageText}
  />
  <Text style={{ color: colors.pageText, marginLeft: 8 }}>
    {!advancedMode ? "Fast Mode" : "Advanced Mode"}
  </Text>
</TouchableOpacity>


      {/* Main Items */}
      <SideBarItem
        title="Home"
        icon="home"
        isSelected={selectedSection === DrawerSections.HOME}
        onSelect={() => {
          handleSelect(DrawerSections.HOME);
          setMode("default");
          router.push("/(tabs)" as never);
        }}
        selectedColor={colors.pageText}
        selectedBGColor={colors.primary}
        colors={colors}        
      />




<SideBarItem
        title="Task"
        icon="construct-outline"
        isSelected={selectedSection === DrawerSections.TASK}
        onSelect={() => handleSelect(DrawerSections.TASK)}
        subItems={selectedSection === DrawerSections.TASK
          ? [
            {
              label: "All Task",
              route: "/tasks",
              icon:"construct-outline"
            },
            {
              label: "Create Task",
              route: "/tasks/create-task",
              icon: "pencil",
            },

            {
              label: "Profiles (start here)",
              route: "/user-profiles",
              icon: "person",
            },

            {
              label: "Want",
              route: "/want",
              icon: "heart-outline",
            },
            
          ]
          : []}
        selectedColor={colors.pageText}
        selectedBGColor={colors.primary} 
        colors={colors}        
          />


      <SideBarItem
        title="Inbox"
        icon="mail-outline"
        isSelected={selectedSection === DrawerSections.INBOX}
        onSelect={() => {
          handleSelect(DrawerSections.INBOX);
          setMode("default");
          router.push("/inbox" as never);
        }}
        selectedColor="white"
        selectedBGColor={colors.primary}
        colors={colors}        
      />



<SideBarItem
        title="Upcoming Drops" 
        icon="calendar"
        isSelected={selectedSection === DrawerSections.UPCOMING_DROPS}
        onSelect={() => {
          handleSelect(DrawerSections.UPCOMING_DROPS);

          router.push("/upcoming-drops" as never);
        }}
        selectedColor="white"
        selectedBGColor={colors.primary}
        colors={colors}        
      />


{/* 
<SideBarItem
        title="Wallet"
        icon="wallet"
        isSelected={selectedSection === DrawerSections.WALLET}
        onSelect={() => {
          handleSelect(DrawerSections.WALLET);
          setMode("default");
          router.push("/wallet" as never);
        }}
        selectedColor="white"
        selectedBGColor={colors.primary}
        colors={colors}        
      /> */}





   <SideBarItem
        title="Settings"
        icon="settings-outline"
        isSelected={selectedSection === DrawerSections.SETTINGS}
        onSelect={() => handleSelect(DrawerSections.SETTINGS)}
        subItems={selectedSection === DrawerSections.SETTINGS
          ? [
            {
              label: "General",
              route: "/user-default-settings",
              icon: "settings",
            },
            {
              label: "Theme",
              route: "/theme",
              icon: "link-outline",
            },
            {
              label: "Refer A Friend ($25)",
              route: "/refer-a-friend",
              icon: "gift-outline",
            },

            
          ]
          : []}
        selectedColor={colors.pageText}
        selectedBGColor={colors.primary} 
        colors={colors}        
          />



   

      {advancedMode && (
        <>
          <SideBarItem
            title="Proxy Groups"
            icon="git-network-outline"
            isSelected={selectedSection === DrawerSections.PROXIES}
            onSelect={() => handleSelect(DrawerSections.PROXIES)}
            subItems={
              selectedSection === DrawerSections.PROXIES && advancedMode
                ? [
                    {
                      label: "Add Groups",
                      route: "/proxy-groups/add-group",
                      icon: "add-outline",
                    },
                    {
                      label: "Latency Test",
                      route: "/proxy-groups/latency-test",
                      icon: "pulse-outline",
                    },
                    {
                      label: "Assign to Tasks",
                      route: "/proxy-groups/assign-to-tasks",
                      icon: "swap-horizontal-outline",
                    },
                  ]
                : []
            }
            selectedColor={colors.pageText}
        selectedBGColor={colors.primary}
        colors={colors}        
          />

          <SideBarItem
            title="Analytics & Logs"
            icon="stats-chart-outline"
            isSelected={selectedSection === DrawerSections.LOGS}
            onSelect={() => handleSelect(DrawerSections.LOGS)}
            subItems={
              selectedSection === DrawerSections.LOGS && advancedMode
                ? [
                    {
                      label: "Checkout History",
                      route: "/analytics-and-logs/checkout-history",
                      icon: "reader-outline",
                    },
                    {
                      label: "Task Logs",
                      route: "/analytics-and-logs/task-logs",
                      icon: "document-text-outline",
                    },
                    {
                      label: "Declines",
                      route: "/analytics-and-logs/declines",
                      icon: "close-circle-outline",
                    },
                    {
                      label: "Success Rate",
                      route: "/analytics-and-logs/success-rate",
                      icon: "checkmark-done-outline",
                    },
                  ]
                : []
            }
            selectedColor={colors.pageText}
            selectedBGColor={colors.primary}
            colors={colors}        
          />

          <SideBarItem
            title="Configuration"
            icon="settings-outline"
            isSelected={selectedSection === DrawerSections.CONFIGURATION}
            onSelect={() => handleSelect(DrawerSections.CONFIGURATION)}
            subItems={
              selectedSection === DrawerSections.CONFIGURATION && advancedMode
                ? [
                    {
                      label: "Webhooks",
                      route: "/configuration/webhooks",
                      icon: "link-outline",
                    },
                    {
                      label: "Captcha",
                      route: "/configuration/captcha",
                      icon: "eye-outline",
                    },
                    {
                      label: "Delays",
                      route: "/configuration/delays",
                      icon: "timer-outline",
                    },
                    {
                      label: "Captcha API Key",
                      route: "/configuration/captcha-api-key",
                      icon: "key-outline",
                    },
                  ]
                : []
            }
            selectedColor={colors.pageText}
            selectedBGColor={colors.primary}
            colors={colors}        
          />
        </>
      )}


     






      {/* App Version */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>App Version {APP_VERSION}</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default DontSkipMeDrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  themeToggle: {
    padding: 8,
  },
  modeToggle: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  versionContainer: {
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
    marginHorizontal: 10,
  },
  versionText: {
    fontSize: 14,
    color: "#666",
  },
});

