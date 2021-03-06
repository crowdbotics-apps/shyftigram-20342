import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn51102358Navigator from '../features/SignIn51102358/navigator';
import UserProfile3102356Navigator from '../features/UserProfile3102356/navigator';
import NotificationList4102355Navigator from '../features/NotificationList4102355/navigator';
import Messaging5102354Navigator from '../features/Messaging5102354/navigator';
import Feed6102353Navigator from '../features/Feed6102353/navigator';
import Camera7102352Navigator from '../features/Camera7102352/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn51102358: { screen: SignIn51102358Navigator },
UserProfile3102356: { screen: UserProfile3102356Navigator },
NotificationList4102355: { screen: NotificationList4102355Navigator },
Messaging5102354: { screen: Messaging5102354Navigator },
Feed6102353: { screen: Feed6102353Navigator },
Camera7102352: { screen: Camera7102352Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
