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

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SwipeScreen" component={SwipeScreen} />
      <Stack.Screen name="HomePage" component={HomeTabs} />
      <Stack.Screen name="OrganizationLoginPage" component={OrganizationLoginPage}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
 
    </Stack.Navigator>
  );
}



