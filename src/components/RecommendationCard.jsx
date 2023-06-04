import { View, Text } from "react-native";
import React from "react";
import { dealData, devicesDealData } from "../dataDummy/CarouselData";
import DealCard from "./DealCard";

const RecommendationCard = () => {
	return (
		<View style={{ padding: 10, marginVertical: 20 }}>
			<Text style={{ fontSize: 20, fontWeight: 900 }}>
				Recommendation
			</Text>

			<DealCard
				data={devicesDealData}
				title="Electronics devices for home office"
			/>

			<DealCard
				data={dealData}
				title=" Up to 60% off | Tools & home improvement"
			/>
		</View>
	);
};

export default RecommendationCard;
