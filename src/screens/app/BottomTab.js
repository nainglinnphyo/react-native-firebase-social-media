import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../feed/Feed";
import Home from "./Home";
import {Ionicons} from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feed') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'ios-search-sharp' : 'ios-search-sharp';
        }else if (route.name === 'Message') {
          iconName = focused ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses-outline';
        }else if (route.name === 'Profile') {
          iconName = focused ? 'ios-person-outline' : 'ios-person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerShown:false,
      tabBarActiveTintColor: '#3796F3',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Search" component={Feed} />
      <Tab.Screen name="Message" component={Feed} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTab;
