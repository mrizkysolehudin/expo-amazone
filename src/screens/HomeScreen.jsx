import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import CategoryCard from "../components/CategoryCard";
import CarouselCard from "../components/CarouselCard";
import RecommendationCard from "../components/RecommendationCard";

const HomeScreen = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerTitle: "",
			header: () => (
				<View
					style={{
						backgroundColor: "rgba(5, 250, 242,0.4)",
					}}>
					<View style={styles.searchInputWrapper}>
						<MaterialIcon name="search" size={20} color={"gray"} />

						<TextInput
							style={styles.searchInput}
							placeholder="search amazone.in"
							placeholderTextColor="gray"
						/>

						<MaterialIcon name="mic-none" size={26} />
					</View>
				</View>
			),
		});
	}, []);

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<DeliveryAddressCard />

			<CategoryCard />

			<CarouselCard />

			<RecommendationCard />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	searchInput: {
		width: "92%",
		height: "90%",
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "white",
		paddingBottom: 2,
	},
	searchInputWrapper: {
		flexDirection: "row",
		borderWidth: 1,
		width: "80%",
		borderColor: "b8baba",
		marginHorizontal: 39,
		marginBottom: 25,
		marginTop: 35,
		paddingLeft: 15,
		paddingRight: 25,
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 5,
		overflow: "hidden",
		height: 40,
	},
});

export default HomeScreen;
