import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileScreen from "./src/screens/ProfileScreen";
import CartScreen from "./src/screens/CartScreen";
import MenuScreen from "./src/screens/MenuScreen";

export default function App() {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: "#02c3d9",
				}}>
				<Tab.Screen
					name="home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon name="home" size={size} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name="account"
					component={ProfileScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon name="account" size={size} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name="cart"
					component={CartScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon name="cart" size={size} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name="menu"
					component={MenuScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon name="menu" size={size} color={color} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
