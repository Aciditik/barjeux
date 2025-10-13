import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

type TabIconProps = {
  readonly color: string;
  readonly focused: boolean;
  readonly iconName: keyof typeof Ionicons.glyphMap;
  readonly iconNameOutline: keyof typeof Ionicons.glyphMap;
};

function TabIcon({ color, focused, iconName, iconNameOutline }: TabIconProps) {
  return <Ionicons name={focused ? iconName : iconNameOutline} size={28} color={color} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6b53d3',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          height: 85,
          position: 'absolute',
          bottom: 40,
          shadowColor: '#1a1a1a',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
          paddingHorizontal: 10,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Quicksand-SemiBold',
          fontSize: 13,
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
          paddingHorizontal: 4,
        },
        tabBarShowLabel: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} iconName="home" iconNameOutline="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} iconName="search" iconNameOutline="search-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} iconName="chatbubble" iconNameOutline="chatbubble-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} focused={focused} iconName="person" iconNameOutline="person-outline" />
          ),
        }}
      />
    </Tabs>
  );
}
