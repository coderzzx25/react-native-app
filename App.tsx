import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './src/views/Home';
import Me from './src/views/Me';

const Tab = createBottomTabNavigator();

const HomeTabIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="home" size={size} color={color} />
);
const MeTabIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="user" size={size} color={color} />
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: HomeTabIcon,
            tabBarLabelStyle: {fontSize: 12},
            tabBarLabel: '首页',
          }}
        />
        <Tab.Screen
          name="me"
          component={Me}
          options={{
            headerShown: false,
            tabBarIcon: MeTabIcon,
            tabBarLabelStyle: {fontSize: 12},
            tabBarLabel: '我的',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
