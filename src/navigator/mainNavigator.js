import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen20191695Navigator from '../features/BlankScreen20191695/navigator';
import BlankScreen33187787Navigator from '../features/BlankScreen33187787/navigator';
import BlankScreen32187786Navigator from '../features/BlankScreen32187786/navigator';
import BlankScreen31187785Navigator from '../features/BlankScreen31187785/navigator';
import BlankScreen30187784Navigator from '../features/BlankScreen30187784/navigator';
import BlankScreen29187783Navigator from '../features/BlankScreen29187783/navigator';
import BlankScreen28187782Navigator from '../features/BlankScreen28187782/navigator';
import BlankScreen27187781Navigator from '../features/BlankScreen27187781/navigator';
import BlankScreen26187780Navigator from '../features/BlankScreen26187780/navigator';
import BlankScreen25187779Navigator from '../features/BlankScreen25187779/navigator';
import BlankScreen24187778Navigator from '../features/BlankScreen24187778/navigator';
import BlankScreen23187777Navigator from '../features/BlankScreen23187777/navigator';
import BlankScreen22187776Navigator from '../features/BlankScreen22187776/navigator';
import BlankScreen21187775Navigator from '../features/BlankScreen21187775/navigator';
import BlankScreen20187774Navigator from '../features/BlankScreen20187774/navigator';
import BlankScreen19187773Navigator from '../features/BlankScreen19187773/navigator';
import BlankScreen18187741Navigator from '../features/BlankScreen18187741/navigator';
import BlankScreen17187738Navigator from '../features/BlankScreen17187738/navigator';
import BlankScreen16187737Navigator from '../features/BlankScreen16187737/navigator';
import BlankScreen15187736Navigator from '../features/BlankScreen15187736/navigator';
import BlankScreen14187702Navigator from '../features/BlankScreen14187702/navigator';
import BlankScreen13187700Navigator from '../features/BlankScreen13187700/navigator';
import BlankScreen12187699Navigator from '../features/BlankScreen12187699/navigator';
import BlankScreen11187698Navigator from '../features/BlankScreen11187698/navigator';
import BlankScreen10187697Navigator from '../features/BlankScreen10187697/navigator';
import BlankScreen9187696Navigator from '../features/BlankScreen9187696/navigator';
import BlankScreen8187695Navigator from '../features/BlankScreen8187695/navigator';
import BlankScreen7187694Navigator from '../features/BlankScreen7187694/navigator';
import BlankScreen6187693Navigator from '../features/BlankScreen6187693/navigator';
import BlankScreen5187692Navigator from '../features/BlankScreen5187692/navigator';
import BlankScreen4187691Navigator from '../features/BlankScreen4187691/navigator';
import BlankScreen3187690Navigator from '../features/BlankScreen3187690/navigator';
import BlankScreen1187669Navigator from '../features/BlankScreen1187669/navigator';
import BlankScreen0187644Navigator from '../features/BlankScreen0187644/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen20191695: { screen: BlankScreen20191695Navigator },
BlankScreen33187787: { screen: BlankScreen33187787Navigator },
BlankScreen32187786: { screen: BlankScreen32187786Navigator },
BlankScreen31187785: { screen: BlankScreen31187785Navigator },
BlankScreen30187784: { screen: BlankScreen30187784Navigator },
BlankScreen29187783: { screen: BlankScreen29187783Navigator },
BlankScreen28187782: { screen: BlankScreen28187782Navigator },
BlankScreen27187781: { screen: BlankScreen27187781Navigator },
BlankScreen26187780: { screen: BlankScreen26187780Navigator },
BlankScreen25187779: { screen: BlankScreen25187779Navigator },
BlankScreen24187778: { screen: BlankScreen24187778Navigator },
BlankScreen23187777: { screen: BlankScreen23187777Navigator },
BlankScreen22187776: { screen: BlankScreen22187776Navigator },
BlankScreen21187775: { screen: BlankScreen21187775Navigator },
BlankScreen20187774: { screen: BlankScreen20187774Navigator },
BlankScreen19187773: { screen: BlankScreen19187773Navigator },
BlankScreen18187741: { screen: BlankScreen18187741Navigator },
BlankScreen17187738: { screen: BlankScreen17187738Navigator },
BlankScreen16187737: { screen: BlankScreen16187737Navigator },
BlankScreen15187736: { screen: BlankScreen15187736Navigator },
BlankScreen14187702: { screen: BlankScreen14187702Navigator },
BlankScreen13187700: { screen: BlankScreen13187700Navigator },
BlankScreen12187699: { screen: BlankScreen12187699Navigator },
BlankScreen11187698: { screen: BlankScreen11187698Navigator },
BlankScreen10187697: { screen: BlankScreen10187697Navigator },
BlankScreen9187696: { screen: BlankScreen9187696Navigator },
BlankScreen8187695: { screen: BlankScreen8187695Navigator },
BlankScreen7187694: { screen: BlankScreen7187694Navigator },
BlankScreen6187693: { screen: BlankScreen6187693Navigator },
BlankScreen5187692: { screen: BlankScreen5187692Navigator },
BlankScreen4187691: { screen: BlankScreen4187691Navigator },
BlankScreen3187690: { screen: BlankScreen3187690Navigator },
BlankScreen1187669: { screen: BlankScreen1187669Navigator },
BlankScreen0187644: { screen: BlankScreen0187644Navigator },

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
