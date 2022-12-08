/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import OnboardingScreen1 from './src/Screens/OnboardingScreen1';
import OnboardingScreen2 from './src/Screens/OnboardingScreen2';
import Login from './src/Screens/Login';
import OfferCard from './src/Screens/SeeAll';
import NavContainer from './src/Routes/NavContainer';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NavContainer);
