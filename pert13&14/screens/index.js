import LoginScreen from './Login';
import SignupScreen from './SignUp';
import DetailsScreen from './Details';
import TabScreen from './Menu/BotTab';
import EditScreen from './Menu/TampilanEdit'
import updateScreen from './Menu/edit'
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
  {
    name: 'TampilanEdit',
    component: EditScreen,
    options: { headerShown: false },
  },
  {
    name: 'edit',
    component: updateScreen,
    options: { headerShown: false },
  },
];
