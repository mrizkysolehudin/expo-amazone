import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="home" component={HomeScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
