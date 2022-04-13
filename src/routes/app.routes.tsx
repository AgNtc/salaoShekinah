import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { Dashboard } from '../screens/Dashboard'; 
import { Register } from '../screens/Register';

const { Navigator, Screen} = createBottomTabNavigator();  

export const AppRoutes = () =>{
    const theme = useTheme();   

    return(
        <Navigator 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon', 
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                }
            }}
        >
            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons 
                            name='format-list-bulleted'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen
                name="Cadastrar"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name='add'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen
                name="Agendamento"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name='pie-chart'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
                
        </Navigator>
    );
}