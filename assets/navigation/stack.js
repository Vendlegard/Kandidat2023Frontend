import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  ProfileScreen from '../screens/ProfileScreen'
import EditProfile from '../screens/EditProfile';
//import TicketPage from '../screens/ticketPage';
//import MyProfilePage from '../screens/myProfilePage';
import {Ionicons} from '@expo/vector-icons';
import LikeScreen from '../screens/LikeScreen';
import SearchScreen from '../screens/SearchScreen';
import SwipeScreen from '../screens/SwipeScreen';


const Tab = createBottomTabNavigator();

export const FirstStack = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: '#BDE3FF',
        },
        tabBarActiveTintColor: 'black',
        //tabBarInactiveTintColor: 'red',
        tabBarIcon: ({focused, color, size}) => {
            let IconName; 
            if (route.name === 'Like') {
                IconName = focused ? 'like' : 'like-outline'
            }
            else if (route.name === 'Search') {
                IconName = focused ? 'search' : 'search-outline'
            }
            else if (route.name === 'Swipe') {
                IconName = focused ? 'swipe' : 'swipe-outline'
            }
            else if (route.name === 'Profile') {
                IconName = focused ? 'person' : 'person-outline'
            }
            return <Ionicons name={IconName} size={focused? 35: size} color={color}/>
        }

    })}>
      <Tab.Screen name="Like" component={LikeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Swipe" component={SwipeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  );
}