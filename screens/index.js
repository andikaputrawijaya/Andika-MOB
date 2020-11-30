import LoginScreen from './Login';
import SignupScreen from './SignUp';
import DetailsScreen from './Details';
import TabScreen from './Menu/BotTab';

module.exports = [

  {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'SignUp',
    component: SignupScreen,
    options: { headerShown: false },
  },
  {
    name: 'BotTab',
    component: TabScreen,
    options: { headerShown: false },
  },

  {
    name: 'Details',
    component: DetailsScreen,
    options: { headerShown: false },
  },
];
