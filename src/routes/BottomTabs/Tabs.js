import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  MapIcon,
  BookmarkIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Home from "../../screens/main/Home";
import strings from "../../utils/strings";
import Profile from "../../screens/main/Profile";
import Subscription from "../../screens/main/Subscription";
import Match from "../../screens/main/Match";
import Chats from "../../screens/main/Chats";
import { Image } from "react-native";
import { images } from "../../assets/images";
import { colors } from "../../utils/colors";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator   screenOptions={{
        tabBarStyle: { backgroundColor:colors.white },
        tabBarLabelStyle:{lineHeight:18,fontWeight:'500',}
      }}>
      <Tab.Screen
      
        name={strings.home}
        component={Home}
        options={{
          headerShown: false,
      tabBarIcon: ({ color,focused }) =>  <Image  source={focused ? images.boldHome : images.home} />,
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.grey,
        }}
      />
   <Tab.Screen
        name={strings.subscription}
        component={Subscription}
        options={{
          headerShown: false,
          tabBarIcon: ({ color,focused }) => <Image  source={focused ? images.boldSubscription : images.subscription} />,
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.grey,
        }}
      />
      <Tab.Screen
        name={strings.match}
        component={Match}
        options={{
          headerShown: false,
          tabBarIcon: ({ color,focused }) => <Image  source={focused ?images.boldMatch : images.match} />,
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.grey,
        }}
      />
            <Tab.Screen
        name={strings.chats}
        component={Chats}
        options={{
          headerShown: false,
          tabBarIcon: ({ color,focused }) => <Image  source={focused ? images.boldChat : images.chat} />,
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.grey,
        }}
      />
      <Tab.Screen
        name={strings.profile}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color,focused }) => <Image  source={focused ? images.boldProfile : images.profile} />,
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.grey,
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
