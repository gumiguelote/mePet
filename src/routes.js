import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Image } from 'react-native';
import Colors from './colors';

const logoImg = require('../assets/images/logo/mePetLogo.png');

//Pages
import signupQuestions from './pages/signupQuestions';
import Login from './pages/login';
import Dashboard from './pages/dashboard';


const Routes = createAppContainer(
   createStackNavigator({
      Dashboard: {
         screen: Dashboard,
         navigationOptions: ({ navigation }) => ({
            headerLayoutPreset: 'center',
            headerTitle: <Image source={logoImg} />,
            headerRight: null,
            headerTintColor: '#FFF',
            headerStyle: { backgroundColor: Colors.primary },
         })
      },
      LoginPage: {
         screen: Login,
         navigationOptions: ({ navigation }) => ({
            header: null,
         })
      },
      SingUpPage: {
         screen: signupQuestions,
         navigationOptions: ({ navigation }) => ({
            headerLayoutPreset: 'center',
            headerTitle: <Image source={logoImg} />,
            headerTintColor: '#FFF',
            headerStyle: { backgroundColor: Colors.primary },
         })
      },
   }
   )
);

export default Routes;