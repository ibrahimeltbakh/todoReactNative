import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/Home"
import DetailsScreen from "./screens/Details"
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const stackRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={HomeScreen} options={{
                title: "TODO APP",
                headerStyle: {
                    backgroundColor: "teal",
                },
                headerTitleStyle: {
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold"
                },
                headerTintColor: "White",
                headerTitleAlign: "center"

            }} />
        </Stack.Navigator>
    )

}
const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={stackRoutes} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<Ionicons name="home-outline" size={20} color={color} />),
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "teal",
                    tabBarActiveBackgroundColor: "teal"
                }} />
                <Tab.Screen name="Details" component={DetailsScreen} options={{
                    title: "DETAILS",
                    headerStyle: {
                        backgroundColor: "teal",
                    },
                    headerTitleStyle: {
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold"
                    },
                    headerTintColor: "White",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color }) => (<MaterialIcons name="details" size={20} color={color} />),
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "teal",
                    tabBarActiveBackgroundColor: "teal"



                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router
